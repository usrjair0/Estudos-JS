let jogador = { 
    //jogador é um objeto
    nome: 'Renato',
    idade: 34, //parametro idade tem como valor 34
    numGol: 81,
    //g=0 para definir que se eu não inserir o numero de gols, logo g=0
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
jogador.Gol(2)
console.log(jogador.numGol)
//consigo adicionar a posição do jogador sem mexer lá em cima apenas fazendo:
jogador.posicao = `posição: meio campista` //aqui adicionei um objeto para a classe jogador
console.log(jogador.posicao)