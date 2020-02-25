import Nombre from "./Nombre.js";
import Tiempo from "./Tiempo.js";
import Fecha from "./Fecha.js";
import Doctor from "./Doctor.js";
import Paciente from "./Paciente.js";
import Cita from "./Cita.js";
import Hospital from "./Hospital.js";
class Main {
    constructor() {
        this.doctor1 = new Doctor(20184983, "Dentista", new Nombre("Karla", "Sierra", "Rodriguez" ), 3123095440);
        this.doctor2 = new Doctor(20179802, "Pediatra", new Nombre("Mariana" , "Valle", "Fuentes"), 3124590879);
        this.paciente1 = new Paciente(new Nombre ("Victor", "Lopez", "Lopez" ), new Fecha(2001, 5, 5), 3121003056);
        this.hospital = new Hospital ("Hospital Loki de la Sierra", "Avenida Pablo Silva #589");
    }
    probarNombre() {
        let nombre1 = new Nombre("David", "Velasco", "Loredo");
        console.log(nombre1.getNombreCompleto());
        console.log(nombre1.getApellidoNombre());
        console.log(nombre1.getIniciales());
    }
    probarTiempo() {
        let tiempo = new Tiempo(3, 50, "PM");
        console.log(tiempo.getFormato12());
        console.log(tiempo.getFormato24());
    }
    probarFecha(){
        let fecha1 = new Fecha(5, 5, 2001);
        console.log(fecha1.getMeses());
        console.log(fecha1.getAños());
        console.log(fecha1.getSemanas());
        console.log(fecha1.getDias());
        console.log(fecha1.getFecha());
        console.log(fecha1.getDiaFecha());
    }
    probarDoctor(){
        let doctor2 = new Doctor(20174987, "Ginecologo", new Nombre("Alejandro", "Ursua", "Sierra" ), 3123090870);
        console.log(this.doctor2.getPerfil());
    }
   probarPaciente() {
        let paciente2 = new Paciente(new Nombre ("Armando", "Silva", "Perez" ), new Fecha(1998, 11, 25), 567432);
        console.log(this.paciente2.getPerfil());
    } 
    probarCita(){
        let cita1 = new Cita(new Fecha(2020, 2, 1), new Tiempo(11, 1, "PM"), this.doctor1.nombre, this.paciente1.nombre);
        console.log(cita1.getPerfil());
    }
    probarHospital() {
        console.log(this.hospital.nombre);
        console.log(this.hospital.direccion);
        this.hospital.registrarDoctores(this.doctor1);
        this.hospital.registrarDoctores(this.doctor2);
        this.hospital.listarDoctores();
    }
}
let app = new Main();
app.probarNombre();
app.probarTiempo();
app.probarFecha();
app.probarDoctor();
app.probarPaciente();
app.probarCita();
app.probarHospital();