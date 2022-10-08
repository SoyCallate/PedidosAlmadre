
let boton = document.getElementById('sumar');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacerSuma);

function hacerSuma(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3=parseFloat(document.getElementById('n3').value);
    let n4=parseFloat(document.getElementById('n4').value);
    let n5=parseFloat(document.getElementById('n5').value);
    let n6=parseFloat(document.getElementById('n6').value);
    let n7=parseFloat(document.getElementById('n7').value);
    let n8=parseFloat(document.getElementById('n8').value);
    let n9=parseFloat(document.getElementById('n9').value);
    let n10=parseFloat(document.getElementById('n10').value);
    let n11=parseFloat(document.getElementById('n11').value);
    let n12=parseFloat(document.getElementById('n12').value);
    let n13=parseFloat(document.getElementById('n13').value);

    let s=((n1+n2+n3+n11)*2292)+((n4+n5+n6+n12)*1644)+((n7+n8+n9+n10+n13)*2616);
    respuesta.innerHTML=`Total: $ ${s}`;
}