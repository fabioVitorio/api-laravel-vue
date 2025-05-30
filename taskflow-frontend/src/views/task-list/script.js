import api from '../../services/api';


export default {
  data() {
    return {
      tasks: [],
      error: null,
    }
  },

  methods: {
    getTasks() {
      api.get('/tasks')
        .then(response => {
          this.tasks = response.data;
        })
        .catch(error => {
          console.error('Erro ao carregar tarefas:', error);
        });
    },
    goToCreate() {
      this.$router.push('/create-task')
    },
    editTask(id) {
      this.$router.push(`/edit-task/${id}`)
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
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
  },
}

