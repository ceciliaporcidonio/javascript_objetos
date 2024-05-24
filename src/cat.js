import Animal from './Animal.js';

// Classe Gato que herda de Animal
class Gato extends Animal {
    constructor(nome) {
        super(nome);
    }

    falar() {
        return `${this.nome} diz: Miau!`;
    }
}

export default Gato;
