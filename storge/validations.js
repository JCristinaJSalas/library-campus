export const isString = (dato) => {
  const mensajeString = {
    status: 400,
    message: `El dato no es un string, es un ${dato.constructor.name}`,
  };
  const resString =
    typeof dato === "string" ? true : console.log(mensajeString);
  return resString;
};

export const isNumber = (dato) => {
  const mensajeNumber = {
    status: 400,
    message: `El dato no es un numero, es un ${typeof dato}`,
  };
  const resNumber =
    typeof dato === "number" ? true : console.log(mensajeNumber);
  return resNumber;
};

export const isDate = (dato) => {
  const mensajeDate = {
    status: 400,
    message: `El dato no es una fecha, es un ${typeof dato}`,
  };
  const resDate =
    dato.constructor.name === "Date" ? true : console.log(mensajeDate);
  return resDate;
};

export const isObject = (dato) => {
  const mensajeObject = {
    status: 400,
    message: `El dato no es una objeto, es un ${typeof dato}`,
  };
  const mensajeVacio = { status: 400, message: `El objeto esta vacio` };

  const resultado =
    typeof dato !== "object"
      ? console.log(mensajeObject)
      : Object.keys(dato).length === 0
      ? console.log(mensajeVacio)
      : true;
  return resultado;
};

export const objectBooks = (dataObject) => {
  const objectNew = {};
  const keyBook = [
    "title",
    "date",
    "authorId",
    "categoryId",
    "editionId",
    "isbn",
    "numPages",
    "id",
  ];
  Object.entries(dataObject).forEach((data) => {
    data[0] === "title"
        ? isString(data[1])
          ? (objectNew[data[0]] = data[1])
          :  false
        : "";
    data[0] === "date"
        ? isDate(new Date(data[1]))
          ? (objectNew[data[0]] = data[1])
          :  false
        : "";
    data[0] === "authorId"
        ? isNumber(data[1])
          ? (objectNew[data[0]] = data[1])
          :  false
        : "";
    data[0] === "categoryId"
        ? isNumber(data[1])
          ? (objectNew[data[0]] = data[1])
          :  false
        : "";
    data[0] === "editionId"
        ? isNumber(data[1])
          ? (objectNew[data[0]] = data[1])
          :  false
        : "";
    data[0] === "isbn"
        ? isNumber(data[1])
          ? (objectNew[data[0]] = data[1])
          :  false
        : "";
    data[0] === "numPages"
        ? isNumber(data[1])
          ? (objectNew[data[0]] = data[1])
          :  false
        : "";
    data[0] === "id"
        ? isNumber(data[1])
          ? (objectNew[data[0]] = data[1])
          :  false
        : "";
  });
  const keys = Object.keys(objectNew);
  const mensajeNoCompleto = { status: 400, message: `El objeto no esta completo` };
  const respuesta = keyBook.every((key) => keys.includes(key)) ? objectNew : mensajeNoCompleto;
  return respuesta;
};
export const objectCategories =(dataObject) => {
  const objectNew = {};
  const keyBook = [
    "name",
    "id"
  ];
  Object.entries(dataObject).forEach((data) => {
    data[0] === "name"
        ? isString(data[1])
          ? (objectNew[data[0]] = data[1])
          :  false
        : "";
    data[0] === "id"
        ? isNumber(data[1])
          ? (objectNew[data[0]] = data[1])
          :  false
        : "";
  });
  const keys = Object.keys(objectNew);
  const mensajeNoCompleto = { status: 400, message: `El objeto no esta completo` };
  const respuesta = keyBook.every((key) => keys.includes(key)) ? objectNew : mensajeNoCompleto;
  return respuesta;
}