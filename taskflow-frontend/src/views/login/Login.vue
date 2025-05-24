<template>
  <div class="login-container">
    <div class="login-box">
      <div v-if="error" id="errorSenha">
        <p>Usuário ou senha inválido(s)</p>
      </div>
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
        <p class="text-center">Não tem uma conta? <router-link to="/register">Registrar</router-link></p>
      </form>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style scoped src="./styles.css"></style>