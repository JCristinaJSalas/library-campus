import { isObject, objectAuthors } from "./validations.js";

export const getAllAuthors = async (urlAuthors) => {
  const dataAuthorJson = await (await fetch(urlAuthors)).json();
  return dataAuthorJson.map((author) => {
      if (isObject(author)) return objectAuthors(author);
});
};

export const getOneAuthor = async (urlAuthors, id) => {
  const bookJson = await (await fetch(`${urlAuthors}/${id}`)).json();
  if (isObject(bookJson)) return objectAuthors(bookJson); 
};

// request 
//http://127.0.14.1:5414/authors?_expand=books
export const getRelationshipsAuthor =  async (urlAuthors) =>{
  const urlFiltro = urlAuthors + "?_embed=books"
  console.log(urlFiltro)
  const bookJson = await (await fetch(urlFiltro)).json();
  return bookJson
}