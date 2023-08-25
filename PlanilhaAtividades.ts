class PlanilhaAtividades {
    professores: [];

    constructor() {
        this.professores = [];
    }

    adicionarProfessor(professor: []) {
        this.professores.push(professor[]);
    }

    listarProfessores() {
        return this.professores;
    }
}
