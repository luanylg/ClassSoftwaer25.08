import Aluno from "./Aluno";

class Professor {
    nome: string;
    disciplina: string;
    alunos: Aluno[];

    constructor(nome: string, disciplina: string) {
        this.nome = nome;
        this.disciplina = disciplina;
        this.alunos = [];
    }

    adicionarAluno(aluno: Aluno) {
        this.alunos.push(aluno);
    }

    listarAlunos() {
        return this.alunos;
    }

    buscarAlunoPorMatricula(matricula: string) {
        return this.alunos.find(aluno => aluno.matricula === matricula);
    }
}

export default Professor;
