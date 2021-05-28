function submitForm(){
    var weight = document.getElementById('weight-number').value;
    var height = document.getElementById('height-number').value;

    if(weight === "" || height === ""){
        document.getElementById('IMC').innerHTML = 'Preencha todos os campos';
        return 0;
    }else{

        height /= 100;
        var IMC = (weight/(height*height)).toFixed(2);
        var message = "";

        if(IMC < 18.5){
            message = 'Abaixo do peso ideal'; 
        }else if(IMC < 25){
            message = 'Peso Ideal';
        }else if(IMC < 30){
            message = 'Acima do peso Ideal';
        }else if(IMC < 35){
            message = 'Obesidade grau I';
        }else if(IMC < 40){
            message = 'Obesidade grau II';
        }else{
            message = 'Obesidade grau III';
        }

        document.getElementById('IMC').innerHTML = IMC + ' - ' + message;
    }
}