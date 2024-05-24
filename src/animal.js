// Classe Abstrata Animal
class Animal {
  constructor(nome) {
      if (this.constructor === Animal) {
          throw new Error("Classe abstrata não pode ser instanciada.");
      }
      this.nome = nome;
  }

  falar() {
      throw new Error("Método abstrato deve ser implementado.");
  }
}

export default Animal;

const cachorro1 = new Cachorro("Rex");
const gato1 = new Gato("Mingau");
const cachorro2 = new Cachorro("Max");

console.log(cachorro1.falar()); // Rex diz: Au au!
console.log(gato1.falar());     // Mingau diz: Miau!
console.log(cachorro2.falar()); // Max diz: Au au!
