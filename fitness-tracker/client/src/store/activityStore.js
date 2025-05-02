import { defineStore } from 'pinia';
import { db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from '@/firebaseConfig';

export const useActivityStore = defineStore('activity', {
  state: () => ({ activities: [] }),

  actions: {
    async fetchActivities() {
      const querySnapshot = await getDocs(collection(db, "activities"));
      this.activities = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    },

async addActivity(user, type, duration, calories) {
  try {
    const newActivity = { user, type, duration, calories, date: new Date() };
    this.activities.push(newActivity); // Optimistically add activity
    await addDoc(collection(db, "activities"), newActivity);
  } catch (err) {
    console.error('Error adding activity:', err);
  }
},

    async updateActivity(activityId, updatedData) {
      try {
        const activityRef = doc(db, "activities", activityId);
        await updateDoc(activityRef, updatedData);
        await this.fetchActivities(); // Refresh activities list after update
      } catch (err) {
        console.error('Error updating activity:', err);
      }
    },

    async deleteActivity(activityId) {
      try {
        const activityRef = doc(db, "activities", activityId);
        await deleteDoc(activityRef);
        await this.fetchActivities(); // Refresh activities list after delete
      } catch (err) {
        console.error('Error deleting activity:', err);
      }
    }
  }
});