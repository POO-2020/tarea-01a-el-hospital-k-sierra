let fecha1 = new Fecha(5, 5, 2001);
console.log(fecha1.getMeses());
console.log(fecha1.getAños());
console.log(fecha1.getSemanas());
console.log(fecha1.getDias());
console.log(fecha1.getFecha());
console.log(fecha1.getDiaFecha());

let horario1 = new Tiempo(11,33,"PM");
console.log(horario1.getFormato12());
console.log(horario1.getFormato24());

let nombre1 = new Nombre("Karla", "Sierra", "Rodriguez");
console.log(nombre1.getNombreCompleto());
console.log(nombre1.getApellidoNombre());
console.log(nombre1.getIniciales());

let paciente1 = new Pacientes(new Nombre("Karla", "Sierra", "Rodriguez"),new Fecha(5, 6, 2020), 3123095330);
console.log(paciente1.getPerfil());

