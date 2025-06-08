import api from '../../services/api';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            conf_password: '',
            error: null,
        };
    },
    methods: {
        verifyPassword() {
            if (this.password.length < 6) {
                this.error = 'A senha deve ter pelo menos 6 caracteres.';
                return false;
            }
            if (this.password !== this.conf_password) {
                this.error = 'As senhas não coincidem.';
                return false;
            }

            this.error = null;
            return true;
        },
        register() {

            if(!this.verifyPassword()) {
                return;
            }
            
            api.post('/register', {
                name: this.name,
                email: this.email,
                password: this.password,
            })
                .then(response => {
                    const token = response.data.token;
                    localStorage.setItem('access_token', token);
                    localStorage.setItem('email_verified', response.data.user.email_verified_at ? 'true' : 'false');
                    this.$router.push({ path: '/login', state: { success: 'Verifique seu e-mail antes de fazer login' } });
                })
                .catch(error => {
                    this.error = 'Erro ao cadastrar. Verifique os dados.';
                    console.error('Erro no cadastro:', error);
                });
        },
    },
};