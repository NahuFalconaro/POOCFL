

/* 

Si pasa esto() -> retorno el iva correspondiente

*/




let invoiceRed = new InvoiceIvaRed(); 
let invoiceMax = new InvoiceIvaMax();


//factory
function ivaFactory(mensaje:string){
    if(mensaje === 'reducido'){
        invoiceRed.getImporte();
    }else if(mensaje === 'max'){
        invoiceMax.getImporte();
    }
}
ivaFactory('reducido');
ivaFactory('max');

//Polimorfismo
function ivaPolimorfismo(invoice: InvoiceFactory){
    invoice.getImporte()
}
ivaPolimorfismo(invoiceRed);
ivaPolimorfismo(invoiceMax);


//Se pregunta por el tipo, y no se estaria utilizando polimorfismo, pero asi lo declara el patron.

