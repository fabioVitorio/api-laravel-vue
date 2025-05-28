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
          this.$router.push('/tasks');
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
};
