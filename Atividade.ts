import Professor from "./Professor";

class PlanilhaAtividades {
    professores: Professor[];

    constructor() {
        this.professores = [];
    }

    adicionarProfessor(professor: Professor) {
        this.professores.push(professor);
    }

    listarProfessores() {
        return this.professores;
    }
}

export default PlanilhaAtividades;
