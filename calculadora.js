var num0 = document.getElementById('num0');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var num4 = document.getElementById('num4');
var num5 = document.getElementById('num5');
var num6 = document.getElementById('num6');
var num7 = document.getElementById('num7');
var num8 = document.getElementById('num8');
var num9 = document.getElementById('num9');
var C = document.getElementById('C');
var suma = document.getElementById('suma');
var resta = document.getElementById('resta');
var multiplicacion = document.getElementById('multiplicacion');
var divisor = document.getElementById('divisor');
var calcular = document.getElementById('calcular');
var punto = document.getElementById('punto');
var numero1 = 0;
var numero2 = 0;

calcular.addEventListener('click',()=>{
    numero2 = document.getElementById('visor').textContent;
    if(operacion == "+"){
        varVisor = parseFloat(numero1)+ parseFloat(numero2);
    }else if(operacion == "-") {
        varVisor = parseFloat(numero1)- parseFloat(numero2);
    }else if(operacion == "*") {
        varVisor = parseFloat(numero1)* parseFloat(numero2);
    }else if(operacion == "/"){
        varVisor = parseFloat(numero1)/ parseFloat(numero2);
        
    }
    document.getElementById('visor').textContent = varVisor;
});

num1.addEventListener('click',()=>{
    varVisor = document.getElementById('visor').textContent;
    if(varVisor == '0') {
        varVisor = '1';
    }else{
        varVisor += '1';
    }
    document.getElementById('visor').textContent = varVisor;
});

num2.addEventListener('click',()=>{
    varVisor = document.getElementById('visor').textContent;
    if(varVisor == '0') {
        varVisor = '2';
    }else{
        varVisor += '2';
    }
    document.getElementById('visor').textContent = varVisor;
});

num3.addEventListener('click',()=>{
    varVisor = document.getElementById('visor').textContent;
    if(varVisor == '0') {
        varVisor = '3';
    }else{
        varVisor += '3';
    }
    document.getElementById('visor').textContent = varVisor;
});

num4.addEventListener('click',()=>{
    varVisor = document.getElementById('visor').textContent;
    if(varVisor == '0') {
        varVisor = '4';
    }else{
        varVisor += '4';
    }
    document.getElementById('visor').textContent = varVisor;
});

num5.addEventListener('click',()=>{
    varVisor = document.getElementById('visor').textContent;
    if(varVisor == '0') {
        varVisor = '5';
    }else{
        varVisor += '5';
    }
    document.getElementById('visor').textContent = varVisor;
});

num6.addEventListener('click',()=>{
    varVisor = document.getElementById('visor').textContent;
    if(varVisor == '0') {
        varVisor = '6';
    }else{
        varVisor += '6';
    }
    document.getElementById('visor').textContent = varVisor;
});

num7.addEventListener('click',()=>{
    varVisor = document.getElementById('visor').textContent;
    if(varVisor == '0') {
        varVisor = '7';
    }else{
        varVisor += '7';
    }
    document.getElementById('visor').textContent = varVisor;
});

num8.addEventListener('click',()=>{
    varVisor = document.getElementById('visor').textContent;
    if(varVisor == '0') {
        varVisor = '8';
    }else{
        varVisor += '8';
    }
    document.getElementById('visor').textContent = varVisor;
});

num9.addEventListener('click',()=>{
    varVisor = document.getElementById('visor').textContent;
    if(varVisor == '0') {
        varVisor = '9';
    }else{
        varVisor += '9';
    }
    document.getElementById('visor').textContent = varVisor;
});

punto.addEventListener('click',()=>{
    varVisor = document.getElementById('visor').textContent;
    varVisor += '.';
    document.getElementById('visor').textContent = varVisor;
});

C.addEventListener('click',()=>{
    varVisor = document.getElementById('visor').textContent;
    if(varVisor == '0') {
        varVisor = '0';
    }else{
        varVisor = '0';
    }
    document.getElementById('visor').textContent = varVisor;
});

suma.addEventListener('click',()=>{
    operacion = "+";
    numero1 = document.getElementById('visor').textContent;
    varVisor = 0;
    document.getElementById('visor').textContent = 0;
});

resta.addEventListener('click',()=>{
    operacion = "-";
    numero1 = document.getElementById('visor').textContent;
    varVisor = 0;
    document.getElementById('visor').textContent = 0;
});

multiplicacion.addEventListener('click',()=>{
    operacion = "*";
    numero1 = document.getElementById('visor').textContent;
    varVisor = 0;
    document.getElementById('visor').textContent = 0;
});

divisor.addEventListener('click',()=>{
    operacion = "/";
    numero1 = document.getElementById('visor').textContent;
    varVisor = 0;
    document.getElementById('visor').textContent = 0;
});