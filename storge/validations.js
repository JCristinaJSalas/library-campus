const mensajeString = {
  status: 400,
  message: "El dato no es un string. :(",
};

const mensajeNumber = {
  status: 400,
  message: `El dato no es un numero. :(`,
};

const mensajeDate = {
    status: 400,
    message: `El dato no es una fecha. :(`,
  };

export const isString = (dato) => {
  if (typeof dato === "string") {
    return true;
  } else {
    console.error(mensajeString.message);
    return false;
  }
};

export const isNumber = (dato) => {
  if (typeof dato === "number") {
    return true;
  } else {
    console.error(mensajeNumber.message);
    return false;
  }
};

export const isDate = (dato) => {

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
    "editorialId",
    "isbn",
    "numPages",
    "stateId",
    "id",
  ];
  Object.entries(dataObject).map((data) => {
    data[0] === "title"
      ? isString(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "date"
      ? isDate(new Date(data[1]))
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "authorId"
      ? isNumber(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "categoryId"
      ? isNumber(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "editorialId"
      ? isNumber(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "isbn"
      ? isNumber(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "numPages"
      ? isNumber(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "stateId"
      ? isNumber(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "id"
      ? isNumber(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
  });
  const keys = Object.keys(objectNew);
  const mensajeNoCompleto = {
    status: 400,
    message: `El objeto no esta completo`,
  };
  const respuesta = keyBook.every((key) => keys.includes(key))
    ? objectNew
    : mensajeNoCompleto;
  return respuesta;
};

export const objectCategories = (dataObject) => {
  const objectNew = {};
  const keyBook = ["name", "id"];
  const mensajeVacio = {
    status: 400,
    message: `El nombre está vacío`,
  };
  const mensajeNoCompleto = {
    status: 400,
    message: `El objeto no está completo`,
  };

  for (const [key, value] of Object.entries(dataObject)) {
    if (key === "name") {
      if (isString(value) && value.length > 0) {
        objectNew[key] = value;
      } else {
        console.error(mensajeVacio.message);
        return false;
      }
    } else if (key === "id") {
      if (isNumber(value)) {
        objectNew[key] = value;
      } else {
        console.error(mensajeNoCompleto.message);
        return false;
      }
    }
  }

  const keys = Object.keys(objectNew);

  return keyBook.every((key) => keys.includes(key))
    ? objectNew
    : mensajeNoCompleto;
};

export const objectAuthors = (dataObject) => {
  const objectNew = {};
  const keyBook = ["name", "lastname", "nationality", "id"];
  Object.entries(dataObject).map((data) => {
    data[0] === "name"
      ? isString(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "lastname"
      ? isString(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "nationality"
      ? isString(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "id"
      ? isNumber(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
  });
  const keys = Object.keys(objectNew);
  const mensajeNoCompleto = {
    status: 400,
    message: `El objeto no esta completo`,
  };
  const respuesta = keyBook.every((key) => keys.includes(key))
    ? objectNew
    : mensajeNoCompleto;
  return respuesta;
};

export const objectEditorials = (dataObject) => {
  const objectNew = {};
  const keyBook = ["name", "address", "phoneNumber", "id"];
  Object.entries(dataObject).map((data) => {
    data[0] === "name"
      ? isString(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "address"
      ? isString(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "phoneNumber"
      ? isString(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "id"
      ? isNumber(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
  });
  const keys = Object.keys(objectNew);
  const mensajeNoCompleto = {
    status: 400,
    message: `El objeto no esta completo`,
  };
  const respuesta = keyBook.every((key) => keys.includes(key))
    ? objectNew
    : mensajeNoCompleto;
  return respuesta;
};

export const objectStates = (dataObject) => {
  const objectNew = {};
  const keyBook = ["name", "description", "id"];
  Object.entries(dataObject).map((data) => {
    data[0] === "name"
      ? isString(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "description"
      ? isString(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
    data[0] === "id"
      ? isNumber(data[1])
        ? (objectNew[data[0]] = data[1])
        : false
      : "";
  });
  const keys = Object.keys(objectNew);
  const mensajeNoCompleto = {
    status: 400,
    message: `El objeto no esta completo`,
  };
  const respuesta = keyBook.every((key) => keys.includes(key))
    ? objectNew
    : mensajeNoCompleto;
  return respuesta;
};
