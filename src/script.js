window.onload = function(){
    result = document.getElementById("result");
    document.getElementById("submit").addEventListener("click", function(){
        imCalc();
    });
    document.getElementById("weight").addEventListener("focusin", function(){
        this.value = '';
        result.textContent = '';
    });
    document.getElementById("height").addEventListener("focusin", function(){
        this.value = '';
        result.textContent = '';
    });

}

function imc(weight, height){
    var _imc = Number(weight)/Number(height)**2 
    return _imc.toFixed(2)
}


function imCalc(){
    weight = document.getElementById("weight");
    height = document.getElementById("height");
    result = document.getElementById("result");
    result.textContent = "Seu IMC é: " + imc(weight.value, height.value);
    
}