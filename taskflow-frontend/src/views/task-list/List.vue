<template>
    <div
        class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
        <div class="w-full max-w-3xl space-y-6">

            <div class="text-center">
                <div class="flex items-center justify-center gap-3">
                    <div class="bg-blue-600 p-3 rounded-full">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect width="18" height="18" x="3" y="3" stroke-width="2" rx="2" ry="2" />
                            <path d="M9 12l2 2l4-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h1 class="text-2xl font-bold text-blue-600">TASKflow</h1>
                </div>
                <h2 class="text-3xl font-bold text-gray-800 mt-4">Suas Tarefas</h2>
                <p class="text-gray-600">Gerencie suas tarefas com facilidade e produtividade!</p>
            </div>

            <div class="flex justify-between">
                <router-link to="/home"
                    class="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M15 18l-6-6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Voltar
                </router-link>

                <router-link
                    to="/tasks/create"
                    class="flex items-center gap-2 !bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19" stroke-width="2" stroke-linecap="round" />
                        <line x1="5" y1="12" x2="19" y2="12" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    Nova Tarefa
                </router-link>
            </div>

            <div class="bg-white rounded-md shadow-xl p-6 space-y-4">
                <div v-if="isLoading" class="text-center text-gray-500">
                    Carregando tarefas...
                </div>

                <div v-else-if="tasks.length === 0" class="text-center text-gray-500">
                    Nenhuma tarefa cadastrada.
                </div>

                <div v-else>
                    <div v-for="task in tasks" :key="task.id"
                        class="flex items-center justify-between border border-gray-200 p-4 hover:shadow-md transition mb-4">
                        <div class="p-4 rounded-lg">
                            <h2 class="text-xl font-bold">{{ task.title }}</h2>
                            <p class="text-gray-600">{{ task.description }}</p>
                            <span class="inline-block mt-2 px-3 py-1 rounded-full text-sm" :class="{
                                'bg-green-100 text-green-700': task.status === 'concluida',
                                'bg-yellow-100 text-yellow-700': task.status === 'pendente',
                                'bg-blue-100 text-blue-700': task.status === 'em_andamento',
                                'bg-red-100 text-red-700': task.status === 'cancelada',
                            }">
                                {{ formatStatus(task.status) }}
                            </span>
                        </div>

                        <div class="flex gap-2">
                            <button @click="editTask(task.id)"
                                class="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md transition">
                                Editar
                            </button>

                            <button @click="deleteTask(task.id)"
                                class="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition cursor-pointer">
                                Deletar
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="text-center">
                <p class="text-sm text-gray-400">TASKflow v1.0</p>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>
