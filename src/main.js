import Cachorro from './Cachorro.js';
import Gato from './Gato.js';

// Criação de Instâncias de Objetos
const cachorro1 = new Cachorro("Rex");
const gato1 = new Gato("Mingau");
const cachorro2 = new Cachorro("Max");

console.log(cachorro1.falar()); // Rex diz: Au au!
console.log(gato1.falar());     // Mingau diz: Miau!
console.log(cachorro2.falar()); // Max diz: Au au!
