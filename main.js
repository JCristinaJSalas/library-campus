import { getAllBooks, getOneBook, getRelationshipsBook } from "./storge/book.js";
import { getAllCategories,getOneCategory,getRelationshipsCategories } from "./storge/category.js";

const ssl = "http://";
const hotname = "127.0.14.1";
const port = "5414";
export const url = `${ssl + hotname}:${port}`;
/// http://127.0.14.1:5414/categories?_embed=books



// Manejo de DB books
const urlBooks = url + "/books";
const id = 1;
const filtro = "atuhor"
await getAllBooks(urlBooks);
await getOneBook(urlBooks, id);
awaitgetRelationshipsBook(urlBooks, filtro);



//Manejo de Categories
const urlCategories = url + "/categories";
await getAllCategories(urlCategories)
await getOneCategory(urlCategories, id);
console.log(await getRelationshipsCategories(urlCategories))