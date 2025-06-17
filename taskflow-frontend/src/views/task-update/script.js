import api from '../../services/api';

export default {
  data() {
    return {
      id: null,
      title: '',
      description: '',
      status: '',
      loading: true,
    };
  },

  methods: {

    async loadTask() {
      try {
        const response = await api.get(`/tasks/${this.id}`);
        const task = response.data;
        this.title = task.title;
        this.description = task.description;
        this.status = task.status;
      } catch (error) {
        console.error('Erro ao carregar tarefa:', error);
        alert('Erro ao carregar tarefa');
      } finally {
        this.loading = false;
      }
    },

    async updateTask() {
      try {
        await api.put(`/tasks/${this.id}`, {
          title: this.title,
          description: this.description,
          status: this.status,
        });
        this.$router.push({ path: '/tasks/list', state: { successMessage: 'Tarefa atualizada com sucesso' } });
      } catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
        alert('Erro ao atualizar tarefa. Tente novamente.');
      }
    },

    goBack() {
      this.$router.back();
    }
  },

  mounted() {
    this.id = this.$route.params.id;
    this.loadTask();
  },
};
