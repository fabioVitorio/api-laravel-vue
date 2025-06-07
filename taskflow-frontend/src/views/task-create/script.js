import api from '../../services/api';

export default {
  data() {
    return {
      title: '',
      description: '',
      status: '',
    };
  },
  methods: {
    async submitTask() {
      try {
        await api.post('/tasks', {
          title: this.title,
          description: this.description,
          status: this.status,
        });
        this.$router.push('/tasks/list');
      } catch (error) {
        console.error('Erro ao criar tarefa:', error);
        alert('Erro ao criar tarefa. Tente novamente.');
      }
    }
  }
};
