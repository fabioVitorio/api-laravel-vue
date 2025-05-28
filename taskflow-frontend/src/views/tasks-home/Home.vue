<template>
  <div class="min-h-screen flex flex-col items-center justify-center space-y-6 bg-gray-100">
 
    <div class="flex items-center justify-center space-x-3">
      <div class="bg-blue-600 p-3 rounded-full">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect width="18" height="18" x="3" y="3" stroke-width="2" rx="2" ry="2" />
          <path d="M9 12l2 2l4-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="text-2xl font-bold text-blue-600">TASKflow</div>
    </div>

    <div class="flex flex-col gap-4 w-full max-w-xs">

      <button
        class="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group">
        <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="4" rx="1" ry="1" stroke-width="2" />
          <rect x="3" y="10" width="18" height="4" rx="1" ry="1" stroke-width="2" />
          <rect x="3" y="16" width="18" height="4" rx="1" ry="1" stroke-width="2" />
        </svg>
        <span>Listar Tarefas</span>
      </button>

      <button
        class="cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group">
        <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <line x1="12" y1="5" x2="12" y2="19" stroke-width="2" stroke-linecap="round" />
          <line x1="5" y1="12" x2="19" y2="12" stroke-width="2" stroke-linecap="round" />
        </svg>
        <span>Criar Tarefa</span>
      </button>

      <button
        class="cursor-pointer w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group">
        <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <circle cx="12" cy="7" r="4" stroke-width="2" />
          <path d="M5.5 21a6.5 6.5 0 0113 0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>Perfil</span>
      </button>

      <button
        class="cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group">
        <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path d="M16 17l5-5m0 0l-5-5m5 5H9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9 19v-2a4 4 0 014-4h7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>Logout</span>
      </button>
    </div>
  </div>
</template>


<script src="./script.js"></script>
