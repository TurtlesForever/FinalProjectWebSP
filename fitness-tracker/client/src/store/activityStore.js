import { defineStore } from 'pinia';
import { db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where } from '@/firebaseConfig';

function sortByDateDesc(arr) {
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const useActivityStore = defineStore('activity', {
  state: () => ({
    activities: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchActivities() {
      this.loading = true;
      this.error = null;
      try {
        const querySnapshot = await getDocs(collection(db, 'activities'));
        this.activities = sortByDateDesc(
          querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        );
      } catch (err) {
        this.error = 'Error fetching activities: ' + err.message;
        console.error(this.error);
      } finally {
        this.loading = false;
      }
    },

    async fetchActivitiesForUser(username) {
      if (!username) {
        this.error = 'Username is required to fetch activities.';
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        const q = query(collection(db, 'activities'), where('user', '==', username));
        const querySnapshot = await getDocs(q);
        this.activities = sortByDateDesc(
          querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        );
      } catch (err) {
        this.error = 'Error fetching user activities: ' + err.message;
        console.error(this.error);
      } finally {
        this.loading = false;
      }
    },

    async addActivity(user, type, duration, calories) {
      if (!user || !type || !duration || !calories) {
        this.error = 'All activity fields are required.';
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        const newActivity = {
          user,
          type,
          duration,
          calories,
          date: new Date().toISOString(),
        };
        const newActivityRef = await addDoc(collection(db, 'activities'), newActivity);
        this.activities.unshift({ ...newActivity, id: newActivityRef.id });
      } catch (err) {
        this.error = 'Error adding activity: ' + err.message;
        console.error(this.error);
      } finally {
        this.loading = false;
      }
    },

    async updateActivity(activityId, updatedData) {
      if (!activityId || !updatedData) {
        this.error = 'Activity ID and updated data are required.';
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        const activityRef = doc(db, 'activities', activityId);
        await updateDoc(activityRef, updatedData);

        const index = this.activities.findIndex(activity => activity.id === activityId);
        if (index !== -1) {
          this.activities[index] = { ...this.activities[index], ...updatedData };
          this.activities = sortByDateDesc(this.activities);
        }
      } catch (err) {
        this.error = 'Error updating activity: ' + err.message;
        console.error(this.error);
      } finally {
        this.loading = false;
      }
    },

    async deleteActivity(activityId) {
      if (!activityId) {
        this.error = 'Activity ID is required for deletion.';
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        const activityRef = doc(db, 'activities', activityId);
        await deleteDoc(activityRef);
        this.activities = this.activities.filter(activity => activity.id !== activityId);
      } catch (err) {
        this.error = 'Error deleting activity: ' + err.message;
        console.error(this.error);
      } finally {
        this.loading = false;
      }
    },

    clearError() {
      this.error = null;
    },
  },
});