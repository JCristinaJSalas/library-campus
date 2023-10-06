import { isObject, objectCategories } from "./validations.js";

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
