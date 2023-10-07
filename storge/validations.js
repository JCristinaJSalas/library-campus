export const isString = (dato) => {
  if (typeof dato === "string") {
    return true;
  } else {
    const mensajeString = {
      status: 400,
      message: ` El dato no es un string. :(. el dato es un ${dato.constructor.name}`,
    };
    console.error(mensajeString.message);
    return false;
  }
};

export const isNumber = (dato) => {
  if (typeof dato === "number") {
    return true;
  } else {
    const mensajeNumber = {
      status: 400,
      message: ` El dato no es un numero. :(. el dato es un ${dato.constructor.name}`,
    };
    console.error(mensajeNumber.message);
    return false;
  }
};

export const isDate = (dato) => {
  const dateFormat1 = /^\d{4}-\d{2}-\d{2}$/;
  const dateFormat2 = /^\d{2}-\d{2}-\d{4}$/;

  return !isString(dato) === true
    ? false
    : dateFormat1.test(dato) || dateFormat2.test(dato)
    ? (function () {
        const newDato = new Date(dato);
        if (isNaN(newDato.getTime())) {
          const mensajeDate2 = {
            status: 400,
            message: `La fecha es inválida.`,
          };
          console.error(mensajeDate2.message);
          return false;
        } else {
          return true;
        }
      })()
    : (function () {
        const mensajeDate3 = {
          status: 400,
          message: `El dato no tiene ninguno de los formatos permitidos. (yyyy-mm-dd) o (dd-mm-yyyy)`,
        };
        console.error(mensajeDate3.message);
        return false;
      })();
};

export const isObject = (dato) => {
  const mensajeObject = {
    status: 400,
    message: `El dato no es un objeto, es de tipo ${typeof dato}`,
  };
  const mensajeVacio = { status: 400, message: `El objeto está vacío` };

  if (typeof dato !== "object") {
    console.error(mensajeObject.message);
    return false;
  }

  if (Object.keys(dato).length === 0) {
    console.error(mensajeVacio.message);
    return false;
  }

  return true;
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
  const keyBook = ["name"];
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
    }
  }

  const keys = Object.keys(objectNew);

  return keyBook.every((key) => keys.includes(key))
    ? objectNew
    : mensajeNoCompleto;
};

export const objectAuthors = (dataObject) => {
  const objectNew = {};
  const keyBook = ["name", "lastname", "nationality"];
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
  const keyBook = ["name", "address", "phoneNumber"];
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
  const keyBook = ["name", "description"];
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
