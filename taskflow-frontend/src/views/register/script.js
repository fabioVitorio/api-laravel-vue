import api from '../../services/api';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            error: null,
        };
    },
    methods: {
        register() {
            api.post('/register', {
                name: this.name,
                email: this.email,
                password: this.password,
            })
                .then(response => {
                    const token = response.data.token;
                    localStorage.setItem('access_token', token);
                    this.$router.push('/login');
                })
                .catch(error => {
                    this.error = 'Erro ao cadastrar. Verifique os dados.';
                    console.error('Erro no cadastro:', error);
                });
        },
    },
};