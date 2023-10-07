import { isObject, objectStates } from "./validations.js";

export const getAllStates = async (urlStates) => {
  const dataStatesJson = await (await fetch(urlStates)).json();
  return dataStatesJson.map((states) => {
    if (isObject(states)) return objectStates(states);
  });
};

export const getOneState = async (urlStates, id) => {
  const statesJson = await (await fetch(`${urlStates}/${id}`)).json();
  if (isObject(statesJson)) return objectStates(statesJson);
};

/// http://127.0.14.1:5414/states?_embed=books
export const getRelationshipsStates = async (urlStates) => {
  const urlFiltro = urlStates + "?_embed=books";
  return await (await fetch(urlFiltro)).json();
};

//----------------**--------------------
//-----------  POST  -------------------

export const postState = async (urlStates, objeto) => {
  if (isObject(objeto) && objectStates(objeto)) {
    config.method = "POST";
    config.body = JSON.stringify(objeto);
    await (await fetch(urlStates, config)).json();
    console.log("Se guardo");
  } else {
    const mensajeNoEnvio = {
      status: 400,
      message: `Problemas al guardar`,
    };
    console.error(mensajeNoEnvio.message);
  }
};

//----------------**--------------------
//-----------  PUT  -------------------
export const putState = async (urlStates, objeto, id) => {
  if (isObject(objeto) && objectStates(objeto)) {
    config.method = "PUT";
    config.body = JSON.stringify(objeto);
    await (await fetch(`${urlStates}/${id}`, config)).json();
    console.log("Se cambio");
  } else {
    const mensajeNoEnvio = {
      status: 400,
      message: `Problemas al Editar`,
    };
    console.error(mensajeNoEnvio.message);
  }
};

//----------------**--------------------
//-----------  DELETE  -------------------
export const deleteState = async (urlStates, id) => {
  try {
    config.method = "DELETE";
    await (await fetch(`${urlStates}/${id}`, config)).json();
    console.log("Se Borro");
  } catch (error) {
    console.error(error);
  }
};
