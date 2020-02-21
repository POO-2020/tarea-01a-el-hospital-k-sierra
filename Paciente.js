import Nombre from "./Nombre.js";
import Fecha from "./Fecha.js";
class Pacientes {
  /**
   *
   * @param {Nombre} nombre
   * @param {Fecha} fecha
   * @param {number} numeroTel
   */
  constructor(nombre, fecha, numeroTel) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.numeroTel = numeroTel;
  }
  getPerfil() {
    return `${this.nombre.getNombreCompleto()}, ${this.fecha.getFecha()}, ${this.numeroTel}`;
  }
}
let paciente1 = new Pacientes(new Nombre("Karla", "Sierra", "Rodriguez"),new Fecha(5, 6, 2020), 3123095330);
console.log(paciente1.getPerfil());