import { isObject, objectCategories } from "./validations.js";
const config = {
  method: undefined,
  headers: { "Content-Type": "application/json" },
};

export const getAllCategories = async (urlCategories) => {
  const dataCategoriesJson = await (await fetch(urlCategories)).json();
  return dataCategoriesJson.map((category) => {
    if (isObject(category)) return objectCategories(category);
  });
};

export const getOneCategory = async (urlCategories, id) => {
  const categoryJson = await (await fetch(`${urlCategories}/${id}`)).json();
  if (isObject(categoryJson)) return objectCategories(categoryJson);
};

/// http://127.0.14.1:5414/categories?_embed=books
export const getRelationshipsCategories = async (urlCategories) => {
  const urlFiltro = urlCategories + "?_embed=books";
  return await (await fetch(urlFiltro)).json();
};

//----------------**--------------------
//-----------  POST  -------------------

export const postCategory = async (urlCategories, objeto) => {
  if (isObject(objeto) && objectCategories(objeto)) {
    config.method = "POST";
    config.body = JSON.stringify(objeto);
    await (await fetch(urlCategories, config)).json();
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
export const putCategory = async (urlCategories, objeto, id) => {
  if (isObject(objeto) && objectCategories(objeto)) {
    config.method = "PUT";
    config.body = JSON.stringify(objeto);
    await (await fetch(`${urlCategories}/${id}`, config)).json();
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
export const deleteCategory = async (urlCategories, id) => {
  try {
    config.method = "DELETE";
    await (await fetch(`${urlCategories}/${id}`, config)).json();
    console.log("Se Borro");
  } catch (error) {
    console.error(error);
  }
};
