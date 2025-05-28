import api from '../../services/api';

export default {
  methods: {
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



// export default {

  
  
//   // logout() {

//   //   alert('Você foi desconectado com sucesso!');
//   //     api.post('/logout')
//   //       .then(() => {
//   //         localStorage.removeItem('access_token');
//   //         this.$router.push('/login');
//   //       })
//   //       .catch(error => {
//   //         console.error('Erro no logout:', error);
//   //         localStorage.removeItem('access_token');
//   //         this.$router.push('/login');
//   //       });
//   //   }
// }