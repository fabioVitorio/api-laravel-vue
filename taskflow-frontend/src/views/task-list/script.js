import api from '../../services/api';

export default {
  data() {
    return {
      tasks: [],
      error: null,
      successMessage: null,
      isLoading: true,
    }
  },

  methods: {
    getTasks() {
      this.isLoading = true;
      api.get('/tasks')
        .then(response => {
          this.tasks = response.data;
        })
        .catch(error => {
          console.error('Erro ao carregar tarefas:', error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    updateTask(id) {
      this.$router.push(`/tasks/update/${id}`)
    },

    deleteTask(id) {
      api.delete(`/tasks/${id}`)
        .then(() => {
          this.getTasks();
        })
        .catch(error => {
          console.error('Erro ao excluir tarefa:', error);
        });
    },

    formatStatus(status) {
      const map = {
        pendente: 'Pendente',
        concluida: 'Concluída',
        em_andamento: 'Em Andamento',
        cancelada: 'Cancelada',
      };
      return map[status] || status;
    },
  },

  mounted() {
    this.getTasks();
    const successMessage = history.state?.successMessage;
    if (successMessage) {
      this.successMessage = successMessage;
      history.replaceState({}, document.title);
      setTimeout(() => {
        this.successMessage = null;
      }, 5000);
    }
  },
}
