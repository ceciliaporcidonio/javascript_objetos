import Animal from './Animal.js';

// Classe Cachorro que herda de Animal
class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
    }

    falar() {
        return `${this.nome} diz: Au au!`;
    }
}

export default Cachorro;
