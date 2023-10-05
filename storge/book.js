import { isObject, objectBooks } from "./validations.js";

export const getAllBooks = async (urlBooks) => {
  const dataBooksJson = await (await fetch(urlBooks)).json();
  const dataBooks = dataBooksJson.forEach((book) => {
    if (!isObject(book)) return false; //validamos si no esta vacio y es objeto
    const res = objectBooks(book); // Validamos la estructura
    return res;
  });
  return dataBooks;
};

export const getOneBook = async (urlBooks, id) => {
  const urlId = urlBooks + "/" + id;
  const bookJson = await (await fetch(urlId)).json();
  if (!isObject(bookJson)) return false; //validamos si no esta vacio y es objeto
  const res = objectBooks(bookJson); // Validamos la estructura
  //console.log(res)
  return res;
};
