class Aluno {
    nome: string;
    matricula: string;
    atividades: Atividade[];

    constructor(nome: string, matricula: string) {
        this.nome = nome;
        this.matricula = matricula;
        this.atividades = [];
    }

    adicionarAtividade(atividade: Atividade) {
        this.atividades.push(atividade);
    }

    listarAtividades() {
        return this.atividades;
    }
}

export default Aluno;
