import { defineStore } from 'pinia';
import { db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from '@/firebaseConfig';

export const useActivityStore = defineStore('activity', {
  state: () => ({
    activities: [],
    error: null, // Track errors for better user feedback
  }),

  actions: {
    async fetchActivities() {
      try {
        const querySnapshot = await getDocs(collection(db, "activities"));
        this.activities = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      } catch (err) {
        this.error = 'Error fetching activities: ' + err.message;
        console.error(this.error);
      }
    },

    async addActivity(user, type, duration, calories) {
      try {
        const newActivity = { user, type, duration, calories, date: new Date().toISOString() };
        
        // Optimistically update the state
        const newActivityRef = await addDoc(collection(db, "activities"), newActivity);
        this.activities.push({ ...newActivity, id: newActivityRef.id });

      } catch (err) {
        this.error = 'Error adding activity: ' + err.message;
        console.error(this.error);
      }
    },

    async updateActivity(activityId, updatedData) {
      try {
        const activityRef = doc(db, "activities", activityId);
        await updateDoc(activityRef, updatedData);

        // Optionally, update state locally
        const index = this.activities.findIndex(activity => activity.id === activityId);
        if (index !== -1) {
          this.activities[index] = { ...this.activities[index], ...updatedData };
        }

        // Refresh the activities list after update
        await this.fetchActivities();
      } catch (err) {
        this.error = 'Error updating activity: ' + err.message;
        console.error(this.error);
      }
    },

    async deleteActivity(activityId) {
      try {
        const activityRef = doc(db, "activities", activityId);
        await deleteDoc(activityRef);

        // Optimistically remove the activity from local state
        this.activities = this.activities.filter(activity => activity.id !== activityId);

        // Refresh the activities list after delete
        await this.fetchActivities();
      } catch (err) {
        this.error = 'Error deleting activity: ' + err.message;
        console.error(this.error);
      }
    },
  }
});