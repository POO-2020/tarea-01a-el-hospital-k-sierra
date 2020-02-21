export default class Fecha {
  /**
   *
   * @param {number} dia
   * @param {number} mes
   * @param {number} año
   */
  constructor(dia, mes, año) {
    this.fecha = new Date(año, mes - 1, dia);
    this.diaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    this.fechaAct = new Date();
    this.mes = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  }
  getAños() {
    let años = this.fechaAct.getUTCFullYear() - this.fecha.getFullYear();
    return años;
  }
  getMeses() {
    let año = this.fechaAct.getUTCFullYear() - this.fecha.getFullYear();
    let meses = año * 12;
    return meses;
  }
  getSemanas() {
    let año = this.fechaAct.getUTCFullYear() - this.fecha.getFullYear();
    let meses = año * 12;
    let semanas = meses * 4;
    return semanas;
  }
  getDias() {
    let año = this.fechaAct.getUTCFullYear() - this.fecha.getFullYear();
    let meses = año * 12;
    let semanas = meses * 4;
    let dias = semanas * 7;
    return dias;
  }
  getFecha() {
    return `${this.fecha.getDate()}/${this.mes[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`;
  }
  getDiaFecha() {
    let dia = this.diaSemana[this.fecha.getDay()];
    return dia;
  }
}
let fecha1 = new Fecha(5, 5, 2001);
console.log(fecha1.getMeses());
console.log(fecha1.getAños());
console.log(fecha1.getSemanas());
console.log(fecha1.getDias());
console.log(fecha1.getFecha());
console.log(fecha1.getDiaFecha());
