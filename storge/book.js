import { isObject, objectBooks } from "./validations.js";

export const getAllBooks = async (urlBooks) => {
  const dataBooksJson = await (await fetch(urlBooks)).json();
  return dataBooksJson.map((book) => {
    if (isObject(book)) return objectBooks(book);
  });
};

export const getOneBook = async (urlBooks, id) => {
  const bookJson = await (await fetch(`${urlBooks}/${id}`)).json();
  if (isObject(bookJson)) return objectBooks(bookJson);
};

// request
// http://127.0.14.1:5414/books?_expand=author
// http://127.0.14.1:5414/books?_expand=category
export const getRelationshipsBook = async (urlBooks, filtro) => {
  const urlFiltro = urlBooks + "?_expand=" + filtro;
  return await (await fetch(urlFiltro)).json();
};
