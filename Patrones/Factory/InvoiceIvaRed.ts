class InvoiceIvaRed extends InvoiceFactory{
   
constructor(){
    super();
}
   
    public getIva(): number {
        return this.getImporte() * 1.10;
    }


    
}