const jogador = function (nome, posicao, numGols) {
    Nome = nome,
    Posicao = posicao,
    Gols = numGols

    this.getNome = function(){
        return Nome
    } //aqui estou criando uma função chamada getNome
    this.getPos = function() {
        return Posicao
    }
    this.getGols = function() {
        return Gols
    }
}

const Neymar = new jogador("Neymar", "Atacante", 400);
console.log(Neymar.getGols());
const Renato = new jogador("Renato", "Meio campo", 80);
//essa é uma forma antiga de fazer, existe uma forma nova que é bem eficiente, será vista logo adiante.
