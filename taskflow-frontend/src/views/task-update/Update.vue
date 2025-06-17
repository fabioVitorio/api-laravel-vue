<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
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
        <h2 class="text-3xl font-bold text-gray-800 mt-4">Editar Tarefa</h2>
        <p class="text-gray-600">Edite sua tarefa para manter seu fluxo de trabalho organizado</p>
      </div>

      <div class="flex justify-start">
        <button @click="goBack" class="flex items-center gap-2 font-medium px-4 py-2 rounded-lg transition cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Voltar
        </button>
      </div>

      <div class="bg-white rounded-md shadow-xl p-6 space-y-4">
        <form v-if="!loading" @submit.prevent="updateTask" class="space-y-4">
          <div>
            <label class="block mb-1 text-gray-700 font-medium">Título</label>
            <input v-model="title" type="text" required
              class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label class="block mb-1 text-gray-700 font-medium">Descrição</label>
            <textarea v-model="description" rows="4"
              class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <div>
            <label class="block mb-1 text-gray-700 font-medium">Status</label>
            <select v-model="status" required
              class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
              <option disabled value="">Selecione o status</option>
              <option value="pendente">Pendente</option>
              <option value="em_andamento">Em Andamento</option>
              <option value="concluida">Concluída</option>
              <option value="cancelada">Cancelada</option>
            </select>
          </div>

          <button type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition cursor-pointer">
            Salvar Tarefa
          </button>
        </form>

        <div v-else class="text-center text-gray-500">Carregando tarefa...</div>
      </div>

      <div class="text-center">
        <p class="text-sm text-gray-400">TASKflow v1.0</p>
      </div>
    </div>
  </div>
</template>


<script src="./script.js"></script>
