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
