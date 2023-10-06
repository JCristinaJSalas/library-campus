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

