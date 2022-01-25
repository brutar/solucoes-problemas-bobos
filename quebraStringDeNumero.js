let numerozao = "1202031424545222231324354131116151224253181515151515151515151515151515151515151515151230";
let num = '';
let numerosQuebrados = [];
for(let i = 0; i < numerozao.length;i++){
    num = num + numerozao[i];
    if(i%2 == 1){
      numerosQuebrados.push(num);
      num = '';
    }else if(i == numerozao.length-1){
      numerosQuebrados.push('0'+num);
      num = '';
    }
}
console.log(numerosQuebrados);