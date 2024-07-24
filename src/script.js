window.onload = function(){
    document.getElementById('submit').addEventListener('click', function(){
        imCalc();
    });
    document.getElementById('clean').addEventListener('click', function(){
        cleanInput();
    });
    document.getElementById('test').addEventListener('click', function(){
        runTest();
    });

}

function runTest(){
    test = sortTest();
    document.getElementById('weight').value = test.weight;
    document.getElementById('height').value = test.height;

    imc_value = imc(test.weight, test.height);
    imc_class = classify(imc_value);
    showResult(imc_value, imc_class);

}

function sortTest(){
    test_n = Math.floor(Math.random() * 5);

    if (test_n == 0){
        return {id: 0, weight: 70.0, height: 1.50}
    }
    if (test_n == 1){
        return {id: 1, weight: 60.0, height: 1.75}
    }
    if (test_n == 2){
        return {id: 2, weight: 60.0, height: 1.60}
    }
    if (test_n == 3){
        return {id: 3, weight: 70.0, height: 1.90}
    }
    if (test_n == 4){
        return {id: 4, weight: 80.0, height: 1.50}
    }
}

function cleanInput(){
    document.getElementById('result').textContent = '';
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
}

function imc(weight, height){
    var imc_value = Number(weight)/Number(height)**2 
    return imc_value.toFixed(2)
}

function classify(result){
    var imc_class = 'Valor inconsistente.';
    
        if (Number(result) < 18.5){
        imc_class = 'Abaixo do peso';
        }
        if (Number(result) >= 18.5 && Number(result) < 24.9){
            imc_class = 'Peso normal';
        }
        if (Number(result) >= 25 && Number(result) < 29.9){
            imc_class = 'Sobrepeso';
        }
        if (Number(result) >= 30){
             imc_class = 'Obesidade';
        }

    return imc_class;
}

function showResult(imc_value, imc_class){
    document.getElementById('result').textContent = `Seu IMC é: ${imc_value} (${imc_class})`;
}

function imCalc(){
    weight = document.getElementById('weight');
    height = document.getElementById('height');

    var imc_value = imc(weight.value, height.value);
    var imc_class = classify(Number(imc_value));

    showResult(imc_value, imc_class);
    
}