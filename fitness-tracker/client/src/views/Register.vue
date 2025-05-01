<script>
import API from '@/api';

export default {
  name: 'Register',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await API.post('/users/register', this.user);
        localStorage.setItem('token', response.data.token);
        this.$router.push('/');
      } catch (error) {
        console.error('Registration failed:', error.response?.data || error.message);
        alert('Registration failed, try again.');
      }
    },
  },
};
</script>