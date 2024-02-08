const bolsa = [
    'Carteira', 
    'Notebook',
    'Moletom',
    'Escova de dentes',
    'Celular',
    'Carregador'
]

let i = 0
while( i < bolsa.length){
    console.log(bolsa[i])
    if(bolsa[i] =='Escova de dentes') break
    else
    i++
};
/* bolsa.lenght diz que é do tamanho do array que criamos como bolsa, no caso é 6*/  
// for (let i = 0; i < bolsa.length; i++) {
//     console.log(bolsa[i])
//     if (bolsa[i] == 'Escova de dentes') 
//     break
// }