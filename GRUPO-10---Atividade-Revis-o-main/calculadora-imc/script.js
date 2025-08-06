function get_imc() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let valor = peso / (altura * altura);
    return valor.toFixed(2);
}

function calcular(){    
    let imc = get_imc();
    let texto =  document.getElementById("Resposta")
    texto.innerText = "IMC: " + imc;
    
    if (imc <= 18.5){
        texto.innerText = texto.innerText  + "\n Abaixo do peso.";
    } else if (imc <= 24.9){
        texto.innerText = texto.innerText  + "\n Peso normal.";
    } else if (imc <= 29.9){
        texto.innerText = texto.innerText  + "\n Acima do peso.";
    }
    else if (imc <= 30){
        texto.innerText = texto.innerText  + "\n Obesidade.";
    }
}