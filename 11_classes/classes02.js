class jogador {
    constructor(nome, posicao, numGol) {//essa é minha função construtora da classe jogador
        this.nome = nome
        this.posicao = posicao
        this.numGol = numGol
    } 
    golsMarcados(){ //Essa função mostra os gols marcados de determinado jogador
        console.log(`O ${this.nome} já marcou ${this.numGol} gols` );
    }
        
}
const Neymar = new jogador('Neymar', 'Atacante', 400);
Neymar.golsMarcados()