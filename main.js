import { getAllAuthors, getOneAuthor, getRelationshipsAuthor } from "./storge/author.js";
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
const filtro = "author"
let x = await getAllBooks(urlBooks);
let y = await getOneBook(urlBooks, id);
let z =  await getRelationshipsBook(urlBooks, filtro);


// Manejo de Categories
const urlCategories = url + "/categories";
//await getAllCategories(urlCategories)
//await getOneCategory(urlCategories, id);
//await getRelationshipsCategories(urlCategories)


// Manejo de Autores
//const urlAuthors = url + "/authors";
//await getAllAuthors(urlAuthors);
//await getOneAuthor(urlAuthors, id);
//await getRelationshipsAuthor(urlAuthors)


console.log("todo",x,"one",y,"rela",z);