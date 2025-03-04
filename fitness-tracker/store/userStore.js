import { defineStore } from 'pinia';
import bcrypt from 'bcryptjs';
import { db, collection, getDocs, doc, updateDoc } from '@/firebaseConfig';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users')) || [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    friends: [],
  }),

  actions: {
    // Fetch friends data for the current user
    async fetchFriends() {
      if (!this.currentUser) return;
      
      // Fetch all users
      const friendsDocs = await getDocs(collection(db, "users"));
      
      // Filter friends based on the current user's friends list
      this.friends = friendsDocs.docs
        .filter(doc => this.currentUser.friends.includes(doc.id))
        .map(doc => doc.data());
    },

    // Register a new user
    async register(username, password, role = 'user') {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { username, password: hashedPassword, role, friends: [] }; // Ensure each user starts with an empty friends list

      this.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(this.users));
    },

    // Log in a user
    async login(username, password) {
      const user = this.users.find(u => u.username === username);
      if (user && await bcrypt.compare(password, user.password)) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      }
      return false;
    },

    // Log out the current user
    logout() {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
    },

    // Add a friend to the current user's friends list
    async addFriend(friendId) {
      if (!this.currentUser) return;
      
      // Add friend to the current user's friends array
      const userRef = doc(db, "users", this.currentUser.uid);
      const updatedFriends = [...this.currentUser.friends, friendId];
      
      await updateDoc(userRef, {
        friends: updatedFriends
      });
      
      // Update the current user's state with the new friend
      this.currentUser.friends = updatedFriends;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    },
    
    // Remove a friend from the current user's friends list
    async removeFriend(friendId) {
      if (!this.currentUser) return;
      
      // Remove friend from the current user's friends array
      const userRef = doc(db, "users", this.currentUser.uid);
      const updatedFriends = this.currentUser.friends.filter(id => id !== friendId);
      
      await updateDoc(userRef, {
        friends: updatedFriends
      });
      
      // Update the current user's state with the removed friend
      this.currentUser.friends = updatedFriends;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
  }
});