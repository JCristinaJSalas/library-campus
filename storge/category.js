import { isObject, objectCategories } from "./validations.js";

export const getAllCategories = async (urlCategories) => {
  const dataCategoriesJson = await (await fetch(urlCategories)).json();
  const dataCategories = dataCategoriesJson.forEach((category) => {
    if (!isObject(category)) return false; //validamos si no esta vacio y es objeto
    const res = objectCategories(category); // Validamos la estructura
    return res;
  });
  return dataCategories;
};

export const getOneCategory = async (urlCategories, id) => {
    const urlId = urlCategories + "/" + id;
    const categoryJson = await (await fetch(urlId)).json();
    if (!isObject(categoryJson)) return false; //validamos si no esta vacio y es objeto
    const res = objectCategories(categoryJson); // Validamos la estructura
    return res;
  };

  /// http://127.0.14.1:5414/categories?_embed=books
  export const getRelationshipsCategories =  async (urlCategories) =>{
    const urlFiltro = urlCategories + "?_embed=books"
    console.log(urlFiltro)
    const bookJson = await (await fetch(urlFiltro)).json();
    return bookJson
  }