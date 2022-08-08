class AutoCarrera extends Auto{

    getAceleracion(): number {
        return super.getAceleracion() + 60;
    }
}