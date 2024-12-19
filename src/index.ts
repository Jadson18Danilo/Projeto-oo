import promptSync from 'prompt-sync'

import { Carro } from './classes/carro.js';
import { Conta } from './classes/conta.js';
import { Bola } from './classes/tarefa1.js';
import { Quadrado } from "./classes/tarefa2.js";
import { Retangulo } from "./classes/tarefa3.js";


/*
const irineu = new Conta(1, 'Irineu', 50)
const erick = new Conta(2, 'Erick', 100)
console.log(`Saldo de Irineu: R$ ${irineu.saldo}`);
console.log(`Saldo de Erick: R$ ${erick.saldo}`)
irineu.transferir(erick, 10);

console.log(`Saldo de Irineu: R$ ${irineu.saldo}`)
console.log(`Saldo de Erick: R$ ${erick.saldo}`)*/

/*Tarefa1
const trocarCor = new Bola('Preto', 12, 'Ferro')
console.log(`A cor é ${trocarCor.cor}`)
trocarCor.mudar(trocarCor,'Azul')
console.log(`A nova cor é ${trocarCor.cor}`)*/

/*Tarefa2
const trocarCor = new Quadrado('Rosa', 12, 'Ferro')
console.log(`A cor é ${trocarCor.cor}`)
trocarCor.mudar(trocarCor,'Verde')
console.log(`A nova cor é ${trocarCor.cor}`)*/

let altura = parseInt(promptSync("Digite a altura"))