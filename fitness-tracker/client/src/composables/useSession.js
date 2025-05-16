import { computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';
import { useDarkModeStore } from '@/store/darkMode';

export function useSession() {
  const router = useRouter();
  const userStore = useUserStore();
  const darkModeStore = useDarkModeStore();

  // Computed states
  const isLoggedIn = computed(() => !!userStore.currentUser);
  const username = computed(() => userStore.currentUser?.username || 'User');
  const darkMode = computed(() => darkModeStore.darkMode);

  // Actions
  const toggleDarkMode = () => darkModeStore.toggle();

  const logout = () => {
    userStore.logout();
    router.push('/login');
  };

  // Initialize session: load user and dark mode from localStorage or defaults
  const initializeSession = () => {
    darkModeStore.initialize();
    userStore.loadUser();
  };

  // Storage event handler
  const onStorageChange = (event) => {
    if (event.key === 'currentUser' || event.key === 'darkMode') {
      initializeSession();
    }
  };

  onMounted(() => {
    initializeSession();
    window.addEventListener('storage', onStorageChange);
  });

  onUnmounted(() => {
    window.removeEventListener('storage', onStorageChange);
  });

  return {
    isLoggedIn,
    username,
    darkMode,
    toggleDarkMode,
    logout,
    initializeSession,
  };
}