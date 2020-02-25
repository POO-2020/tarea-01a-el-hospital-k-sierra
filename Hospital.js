import Fecha from "./Fecha.js";
import Tiempo from "./Tiempo.js";
import Nombre from "./Nombre.js";
import Paciente from "./Paciente.js";
import Doctor from "./Doctor.js";
import Cita from "./Cita.js";
export default class Hospital {
    constructor(nombre, direccion){
        this.nombre = nombre;
        this.direccion = direccion;
        this.doctores = new Array;
        this.citas = new Array;
    }
    registrarDoctores(doctor){
        this.doctores.push(doctor);
    }
    listarDoctores(){
        this.doctores.forEach((doctor, i) => {
            console.log(`${i + 1} ${doctor.getPerfil()}`);
        })
    }
    registrarCitas(cita){
        this.citas.push(cita);
    }
    listarCitas(){
        this.citas.forEach((cita, i ) => {
            console.log(`${i + 1} ${cita.getPerfil()}`);
        })
    }
}