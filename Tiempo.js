class Tiempo{
    constructor(hora, minuto, periodo){
    this.hora = hora;
    this.minuto = minuto;
    this.periodo = periodo;
    }
    getFormato12(){
       var horario = new Date();
       horario.setHours( parseInt( time[3] ? 12 : 0) );
       horario.setMinutes( parseInt( time[2]) || 0 );
       console.log(`${horario}`);
    }
    getFormato24(){
        
    }
}
    let horario = new Tiempo(11,33,"AM");
    horario.getFormato12();
