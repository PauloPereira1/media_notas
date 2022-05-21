function exibirValor(){
    let input = parseInt(document.getElementById('inpt1').value); 
    let input2 = parseInt(document.getElementById('inpt2').value);

    let calculo = (input + input2) / 2;

    if(calculo >= 6) {
        document.getElementById('resultado').innerHTML = `Parabens, voce foi aprovado!!! Sua média foi de <strong>${calculo}</strong>`;
    } else {
        document.getElementById('resultado').innerHTML = `Que pena, voce foi reprovado!!! Sua média foi de <strong>${calculo}</strong>`;        
    }  
}