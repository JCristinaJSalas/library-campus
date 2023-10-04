export const isString = (dato) => {
  const mensaje = {
    status: 400,
    message: `El dato no es un string, es un ${dato.constructor.name}`,
  };
  typeof dato === "string" ? console.log("Es un string") : console.log(mensaje);
};

export const isNumber = (dato) => {
  const mensaje = {
    status: 400,
    message: `El dato no es un numero, es un ${dato.constructor.name}`,
  };
  typeof dato === "number" ? console.log("es numero") : console.log(mensaje);
};

export const isDate = (dato) => {
  const mensaje = {
    status: 400,
    message: `El dato no es una fecha, es un ${typeof dato}`,
  };
  dato.constructor.name === "Date"
    ? console.log("Es una fecha")
    : console.log(mensaje);
};

export const isObject = (dato) => {
  const mensaje = {
    status: 400,
    message: `El dato no es una objeto, es un ${typeof dato}`,
  };
  const mensajeVacio = { status: 400, message: `El objeto esta vacio` };

  const resultado =
    typeof dato !== "object"
      ? mensaje
      : Object.keys(dato).length === 0
      ? mensajeVacio
      : dato;
  return resultado;
};
