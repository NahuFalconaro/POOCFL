var Televisor = /** @class */ (function () {
    function Televisor(reciboCanal) {
        this.canalActual = 0;
        this.otroEstado = false;
        this.canalActual = reciboCanal;
    }
    Televisor.prototype.cambiarCanal = function () {
        this.canalActual = 10;
    };
    Televisor.prototype.getCanalActual = function () {
        return this.canalActual;
    };
    return Televisor;
}());
var tele = new Televisor(40);
console.log(tele.getCanalActual());
tele.cambiarCanal();
console.log(tele.getCanalActual());
