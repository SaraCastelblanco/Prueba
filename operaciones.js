function f_operar(){
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    var signo = document.getElementById('operador').value;

    switch(signo){
        case '+' : var suma= n1 + n2;
        document.getElementById('resultado').value = suma;
        break;
        case '-' : var resta= n1 - n2;
        document.getElementById('resultado').value = resta;
        break;
        case '*' : var multi= n1 * n2;
        document.getElementById('resultado').value = multi;
        break
        case '/' : if (n2==0){
            var mensaje="Nose puede divir por zero";
            alert(mensaje);
            break;
        }
        else{
            var divi= n1 / n2;
            document.getElementById('resultado').value = divi;
            break;
        }

        break;
    }
}