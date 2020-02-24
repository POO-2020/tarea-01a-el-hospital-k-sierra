import Fecha from "./Fecha.js";
import Tiempo from "./Tiempo.js";
import Doctor from "./Doctor.js";
import Paciente from "./Paciente.js";
export default class cita{
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Doctor} doctor 
     * @param {Paciente} paciente 
     */
    constructor(fecha, hora, doctor, paciente){
    this.fecha = fecha;
    this.hora = hora;
    this.doctor = doctor;
    this.paciente = paciente;
    }
    getCita(){
        return `${this.fecha.getFecha()}, ${this.hora.getFormato24()}, ${this.doctor.nombre}, ${this.paciente.nombre}`;
    }
}