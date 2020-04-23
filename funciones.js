//Se crearon las funciones correspondientes a cada botón y se les dió la funcionalidad deseada
function add()
{
 var a = document.getElementById("a").value;
 var b = document.getElementById("b").value;
 a = parseInt(a);
 b = parseInt(b);
 var c;
 c = parseInt(c);
 c = a + b;
document.getElementById("c").value = c;
}

function rest()
{
 var a = document.getElementById("a").value;
 var b = document.getElementById("b").value;
 a = parseInt(a);
 b = parseInt(b);
 var c;
 c = parseInt(c);
 c = a - b;
document.getElementById("c").value = c;
}

function mul()
{
 var a = document.getElementById("a").value;
 var b = document.getElementById("b").value;
 a = parseInt(a);
 b = parseInt(b);
 var c;
 c = parseInt(c);
 c = a * b;
document.getElementById("c").value = c;
}

function div()
{
 var a = document.getElementById("a").value;
 var b = document.getElementById("b").value;
 a = parseInt(a);
 b = parseInt(b);
 var c;
 c = parseInt(c);
 c = a / b;
document.getElementById("c").value = c;
}

function clean()
{
 document.getElementById("a").value= "";
 document.getElementById("b").value= "";
 document.getElementById("c").value= "";
}
//Se establecio un "if" para que el valor predeterminado de los dos primeros inputs sea "0"
if(document.getElementById("a").value=="")
{
    document.getElementById("a").value = 0;
}

if(document.getElementById("b").value=="")
{
    document.getElementById("b").value = 0;
}