class Fecha{
    constructor(dia, mes, año)
    {
        this.fecha = new Date (año, mes + 1, dia);
        this.diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        this.mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        this.fechaAct = new Date;
        var totalMeses = 12;
    }

    getAños(){
        let años = this.fechaAct.getUTCFullYear() - this.fecha.getFullYear();
        console.log(`Han pasado ${años} años`);
    }
    getMeses(){
        let meses = this.fechaAct.getUTCMonth() - this.fecha.getFullMonth();
        console.log(`Han pasado ${meses} meses`);
    }
    getSemanas(){
        var anos = this.fechaAct.getUTCFullYear() - this.fecha.getFullYear();
        var mesesTotales = anos* Number.parseInt(totalMeses);
        console.log("Han pasado " + mesesTotales + " meses");
    }
    getDias(){

    }
    getFecha(){
        console.log(`${this.fecha.getDate()}/${this.fecha.getMonth()}/${this.fecha.getFullYear()}`);
    }
    getDiaFecha(){
        let dia = this.diaSemana[this.fecha.getDay()];
        console.log(`${dia}`);
    }
}

let fecha1 = new Fecha(7,2,2000);
fecha1.getAños();
fecha1.getMeses();
fecha1.getFecha();
fecha1.getDiaFecha();