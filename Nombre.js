export default class Nombre{
    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidoP 
     * @param {string} apellidoM 
     */
    constructor(nombre, apellidoP, apellidoM){
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
    }

    getNombreCompleto(){
        return(`${this.nombre} ${this.apellidoP} ${this.apellidoM}`);
    }
    getApellidoNombre(){
        return(`${this.apellidoP} ${this.apellidoM} ${this.nombre}`);
    }
    getIniciales(){
        return(`${this.nombre.charAt(0)}.${this.apellidoP.charAt(0)}.${this.apellidoM.charAt(0)}`);
    }
}
let nombre1 = new Nombre("Karla", "Sierra", "Rodriguez");
console.log(nombre1.getNombreCompleto());
console.log(nombre1.getApellidoNombre());
console.log(nombre1.getIniciales());