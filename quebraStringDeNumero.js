//Quebra em 2 caracteres uma string que contém uma sequência numérica
let numerozao = "1202031424545222231324354131116151224253181515151515151515151515151515151515151515151230";
let num = '';
let numerosQuebrados = [];

//percorre cada posição da string
for(let i = 0; i < numerozao.length;i++){
    num = num + numerozao[i];
    //adiciona uma sequencia de 2 caracteres em no array numerosQuebrados
    //no caso de sobrar 1 caratere, é adicionado 0 na frente desse caractere
    if(i%2 == 1){
      numerosQuebrados.push(num);
      num = '';
    }else if(i == numerozao.length-1){
      numerosQuebrados.push('0'+num);
      num = '';
    }
}
console.log(numerosQuebrados);