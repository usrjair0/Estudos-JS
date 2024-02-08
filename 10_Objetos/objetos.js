//let num = [1, 2, 3]
let jogador = { //jogador é um objeto
    nome: 'Renato',
    idade: 34, //objeto idade dentro do objeto jogador
    numGol: 81,
    Gol(g = 0) {
        if (g == 0) {
            console.log(`${this.nome} não fez gol!`);
        } else {
            console.log(`${this.nome} fez gol!`);
            this.numGol += g;
        }
    }
}
console.log(jogador) // se eu quiser apenas o nome digito jogador.nome
console.log(jogador.nome)
console.log(jogador.numGol)
jogador.Gol()
console.log(jogador.numGol)
//consigo adicionar a posição do jogador sem mexer lá em cima apenas fazendo:
jogador.posicao = `posição: meio campista` //aqui adicionei um objeto para a classe jogador
console.log(jogador.posicao)