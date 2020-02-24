import Nombre from "./Nombre.js";
class Doctor{
    /**
     * 
     * @param {number} cedula 
     * @param {string} especialidad 
     * @param {Nombre} nombre 
     * @param {number} telefono 
     */
    constructor(cedula, especialidad, nombre, telefono){
        this.cedula = cedula;
        this.especialidad = especialidad;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    getPerfil(){
        return `${this.cedula}, ${this.especialidad}, ${this.nombre.getNombreCompleto()}, ${ this.telefono}`;
    }
}