function ejercicioNum1(valor1, valor2) {
  if (typeof valor1 === "number" && typeof valor2 === "number") {
    return valor1 * valor2;
  } else if (typeof valor1 === "string" && typeof valor2 === "string") {
    return valor1 + " " + valor2;
  } else if (typeof valor1 === "boolean" && typeof valor2 === "boolean")
    return false;
}

let resultado = ejercicioNum1(true, false);
console.log(resultado);





let persona = {
  nombre: "Aylin",
  apellido: "Triana",
  edad: 26,
  esArgentino: true,
};

function ejercicioNum2(persona) {
  if (persona.edad >= 18 && persona.esArgentino === true) {
    return (
      persona.nombre +
      " " +
      persona.apellido +
      " vive en Argentina y es mayor de edad."
    );
  } else if (persona.edad >= 18 && persona.esArgentino === false) {
    return (
      persona.nombre +
      " " +
      persona.apellido +
      " NO vive en Argentina y es mayor de edad."
    );
  } else if (persona.edad < 18 && persona.esArgentino === true) {
    return (
      persona.nombre +
      " " +
      persona.apellido +
      " vive en Argentina y NO es mayor de edad."
    );
  } else if (persona.edad < 18 && persona.esArgentino === false) {
    return (
      persona.nombre +
      " " +
      persona.apellido +
      " NO vive en Argentina y NO es mayor de edad."
    );
  }
}

let resPersona = ejercicioNum2(persona);
console.log(resPersona);

persona.edad = 15;
persona.esArgentino = false;

resPersona = ejercicioNum2(persona);
console.log(resPersona);





function verificacionDeTiposDeDatos(tipo1, tipo2) {
  if (
    (String(tipo1) === tipo1 && String(tipo2) === tipo2) ||
    (Boolean(tipo1) === tipo1 && Boolean(tipo2) === tipo2)
  ) {
    return "Son del mismo tipo";
  } else {
    return "No son del mismo tipo";
  }
}
let res = verificacionDeTiposDeDatos("false", false);
console.log(res);





let destinos = []


destinos.push(
  
  {
    nombrePais: "brasil",
    cantidadDeVisitas : 3,
    clima: "soleado",
    habitantes: "212 millones"
  },

  {
    nombrePais: "rusia",
    cantidadDeVisitas : 4,
    clima: "frío",
    habitantes: "144 millones"
  },

  {
    nombrePais: "estados unidos",
    cantidadDeVisitas : 1,
    clima: "nublado",
    habitantes: "329 millones"
  }

); 

console.log(destinos);

function siguienteViaje (destinos) {

  for (let i = 0; i < destinos.length; i++) {
        destinos[i].cantidadDeVisitas ++
  }
};

siguienteViaje(destinos);
console.log(destinos);








