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