import { mostrarLibros } from "./storge/book.js";
import { mostrarAutores } from "./storge/author.js";
import { mostrarCategoria } from "./storge/category.js";

const ssl = "http://";
const hotname = "127.0.14.1";
const port = "5414";
export const url = `${ssl + hotname}:${port}`;
/// http://127.0.14.1:5414/categories?_embed=books


const urlBooks = url + "/books";
const urlCategories = url + "/categories";
const urlAuthor = url + "/authors";

document.addEventListener("DOMContentLoaded", async() => {
 await mostrarLibros(urlBooks)
 await mostrarAutores(urlAuthor)
 await mostrarCategoria(urlCategories)
})