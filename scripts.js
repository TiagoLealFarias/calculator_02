function insert(num)  
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = '';

}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resutado = document. getElementById('resultado').innerHTML;
    if(resutado)
    {
        document.getElementById('resultado').innerHTML = eval(resutado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = 'calculator 0.2';
    }
}