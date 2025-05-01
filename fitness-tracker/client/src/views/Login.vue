<script>
import API from '@/api';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await API.post('/users/login', this.user);
        localStorage.setItem('token', response.data.token);
        this.$router.push('/');
      } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
        alert('Login failed, check your credentials.');
      }
    },
  },
};
</script>