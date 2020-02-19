class Fecha{
    constructor(dia, mes, año)
    {
        this.fecha = new Date (año, mes + 1, dia);
        this.diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        this.fechaAct = new Date;
    }
    getAños(){
        let años = this.fechaAct.getUTCFullYear() - this.fecha.getFullYear();
        console.log(`${años} años`);
    }
    getMeses(){
        let año = this.fechaAct.getUTCFullYear() - this.fecha.getFullYear();
        let meses = año * 12;
        console.log(`${meses} meses`);
    }
    getSemanas(){
        let año = this.fechaAct.getUTCFullYear() - this.fecha.getFullYear();
        let meses = año * 12;
        let semanas = meses * 4;
        console.log(`${semanas} semanas`);
    }
    getDias(){
        let año = this.fechaAct.getUTCFullYear() - this.fecha.getFullYear();
        let meses = año * 12;
        let semanas = meses * 4;
        let dias = semanas * 7;
        console.log(`${dias} semanas`);
    }
    getFecha(){
        console.log(`${this.fecha.getDate()}/${this.fecha.getMonth()}/${this.fecha.getFullYear()}`);
    }
    getDiaFecha(){
        let dia = this.diaSemana[this.fecha.getDay()];
        console.log(`${dia}`);
    }
}