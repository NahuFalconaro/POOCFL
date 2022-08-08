class InvoiceIvaMax extends InvoiceFactory{
   
   constructor(){
    super();
   }
   
    public getIva(): number {
        return this.getImporte() * 1.50;
    }


    
}