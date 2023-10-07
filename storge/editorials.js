import { isObject, objectEditorials } from "./validations.js";

export const getAllEditorials = async (urlEditorials) => {
  const dataEditorialsJson = await (await fetch(urlEditorials)).json();
  return dataEditorialsJson.map((editorial) => {
    if (isObject(editorial)) return objectEditorials(editorial);
  });
};

export const getOneEditorial = async (urlEditorials, id) => {
  const editorialJson = await (await fetch(`${urlEditorials}/${id}`)).json();
  if (isObject(editorialJson)) return objectEditorials(editorialJson);
};

/// http://127.0.14.1:5414/editorials?_embed=books
export const getRelationshipsEditorials = async (urlEditorials) => {
  const urlFiltro = urlEditorials + "?_embed=books";
  return await (await fetch(urlFiltro)).json();
};

//----------------**--------------------
//-----------  POST  -------------------

export const postEdiorial = async (urlEditorials, objeto) => {
  if (isObject(objeto) && objectEditorials(objeto)) {
    config.method = "POST";
    config.body = JSON.stringify(objeto);
    await (await fetch(urlEditorials, config)).json();
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

export const putEdiorial = async (urlEditorials, objeto, id) => {
  if (isObject(objeto) && objectEditorials(objeto)) {
    config.method = "PUT";
    config.body = JSON.stringify(objeto);
    await (await fetch(`${urlEditorials}/${id}`, config)).json();
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

export const deleteEdiorial = async (urlEditorials, id) => {
  try {
    config.method = "DELETE";
    await (await fetch(`${urlEditorials}/${id}`, config)).json();
    console.log("Se Borro");
  } catch (error) {
    console.error(error);
  }
};
