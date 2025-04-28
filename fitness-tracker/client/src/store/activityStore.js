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
      await addDoc(collection(db, "activities"), { user, type, duration, calories, date: new Date() });
      this.fetchActivities();
    },
    async updateActivity(activityId, updatedData) {
      const activityRef = doc(db, "activities", activityId);
      await updateDoc(activityRef, updatedData);
      this.fetchActivities(); // Refresh activities list
    },
    async deleteActivity(activityId) {
      const activityRef = doc(db, "activities", activityId);
      await deleteDoc(activityRef);
      this.fetchActivities(); // Refresh activities list
    }
  }
});