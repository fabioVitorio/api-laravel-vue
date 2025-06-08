import api from '../../services/api';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
      success: null,
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
          localStorage.setItem('email_verified', response.data.user.email_verified_at ? 'true' : 'false');
          this.$router.push('/home');
        })
        .catch(error => {
          this.error = 'Usuário ou senha inválido(s)';
          console.error('Erro no login:', error);
          this.email = '';
          this.password = '';
        });
    },

    logout() {
      api.post('/logout')
        .then(() => {
          localStorage.removeItem('access_token');
          this.$router.push('/login');
        })
        .catch(error => {
          console.error('Erro no logout:', error);
          localStorage.removeItem('access_token');
          this.$router.push('/login');
        });
    }
  },

  mounted() {
    const message = history.state?.success;
    if (message) {
      this.success = message;
      history.replaceState({}, document.title);
    }
  }
};
