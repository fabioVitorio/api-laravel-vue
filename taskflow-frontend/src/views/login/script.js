import api from '../../services/api';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    login() {
      api.post('/login', {
        email: this.email,
        password: this.password,
      })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('access_token', token);
          this.$router.push('/dashboard');
        })
        .catch(error => {
          this.error = 'Email ou senha incorretos.';
          console.error('Erro no login:', error);
        });
    },
  },
};
