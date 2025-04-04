<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Digite seu email" required />
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input type="password" id="password" v-model="password" placeholder="Digite sua senha" required />
        </div>
        
        <button type="submit" class="login-button">Entrar</button>
        <p v-if="error" class="error-message">{{ error }}</p>
        <p class="text-center">Não tem uma conta? <router-link to="/cadastro">Registrar</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

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
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}	

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-box {
  width: 350px;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #1877f2;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #1c1e21;
  font-weight: 600;
}

input {
  width: calc(100% - 18px);
  padding: 10px;
  border: 1px solid #dddfe2;
  outline-color: #166fe5;
  border-radius: 5px;
  font-size: 16px;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #166fe5;
}

.error-message {
  color: #f02849;
  margin-top: 15px;
  text-align: center;
}

.text-center {
  text-align: center;
  margin-top: 20px;
}
</style>