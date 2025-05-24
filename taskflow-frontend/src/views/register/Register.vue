<template>
    <div class="cadastro-container">
        <div class="cadastro-box">
            <h1>Cadastro</h1>
            <form @submit.prevent="register">
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <input type="text" id="name" v-model="name" placeholder="Digite seu nome" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" placeholder="Digite seu email" required />
                </div>
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" v-model="password" placeholder="Digite sua senha" required />
                </div>

                <button type="submit" class="cadastro-button">Cadastrar</button>
                <p v-if="error" class="error-message">{{ error }}</p>
                <p class="text-center">Retornar ao <router-link to="/login">Login</router-link></p>

            </form>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style scoped src="./styles.css"></style>