<template>
    <div
        class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
        <div class="w-full max-w-md">

            <div class="mb-8 text-center">
                <div class="flex items-center justify-center gap-3">
                    <div class="bg-blue-600 p-3 rounded-full">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect width="18" height="18" x="3" y="3" stroke-width="2" rx="2" ry="2" />
                            <path d="M9 12l2 2l4-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h1 class="text-2xl font-bold text-blue-600">TASKflow</h1>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl">
                <div class="p-6 space-y-1">
                    <h2 class="text-2xl font-bold text-center">Cadastrar</h2>
                    <p class="text-center text-sm text-gray-600">
                        Crie sua conta para começar a gerenciar suas tarefas
                    </p>
                </div>

                <div class="p-6">

                    <div v-if="error" class="bg-red-100 text-red-700 px-4 py-2 rounded-sm mb-4 text-center">
                        {{ error }}
                    </div>

                    <form @submit.prevent="register" class="space-y-4">
                        <div class="space-y-2">
                            <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
                            <input id="name" type="text" v-model="name" placeholder="Seu nome"
                                class="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required />
                        </div>

                        <div class="space-y-2">
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input id="email" type="email" v-model="email" placeholder="seu@email.com"
                                class="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required />
                        </div>

                        <div class="space-y-2">
                            <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
                            <input id="password" type="password" v-model="password" placeholder="Sua senha"
                                class="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required />
                        </div>

                        <button type="submit"
                            class="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-sm transition-colors">
                            Cadastrar
                        </button>
                    </form>

                    <div class="mt-6 text-center">
                        <p class="text-sm text-gray-600">
                            Já tem uma conta?
                            <router-link to="/login" class="text-blue-600 hover:text-blue-800 font-medium">
                                Faça login
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>

            <div class="mt-6 text-center">
                <p class="text-sm text-gray-400">TASKflow v1.0</p>
            </div>

        </div>
    </div>
</template>

<script src="./script.js"></script>