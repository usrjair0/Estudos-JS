// function presente (dinheiro, valor){
//     if (dinheiro < valor){
//         return 'Não vai dar para comprar...'
//     }else{
//         return 'Você precisa realmente fazer essa compra?'
//     }
// }
// let p = presente (80, 90)
// console.log(p)

function validar (){
    let idade = parseInt(prompt('Digite sua idade'));
    if(idade >= 18)
        window.alert('você é maior de idade');  
    else
        window.alert('você é menor de idade');
    return idade
}
let id = validar();
console.log(id)

