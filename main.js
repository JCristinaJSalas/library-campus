import {
  getAllAuthors,
  getOneAuthor,
  getRelationshipsAuthor,
} from "./storge/author.js";
import {
  getAllBooks,
  getOneBook,
  getRelationshipsBook,
} from "./storge/book.js";
import {
  getAllCategories,
  getOneCategory,
  getRelationshipsCategories,
} from "./storge/category.js";
import {
  getAllEditorials,
  getOneEditorial,
  getRelationshipsEditorials,
} from "./storge/editorials.js";
import {
  getAllStates,
  getOneState,
  getRelationshipsStates,
} from "./storge/states.js";

const ssl = "http://";
const hotname = "127.0.14.1";
const port = "5414";
export const url = `${ssl + hotname}:${port}`;
/// http://127.0.14.1:5414/categories?_embed=books

// Manejo de DB books
const urlBooks = url + "/books";
const id = 1;
const filtro = "category";
let x = await getAllBooks(urlBooks);
let y = await getOneBook(urlBooks, id);
let z = await getRelationshipsBook(urlBooks, filtro);

// Manejo de Categories
const urlCategories = url + "/categories";
let a = await getAllCategories(urlCategories);
let b = await getOneCategory(urlCategories, id);
let c = await getRelationshipsCategories(urlCategories);

// Manejo de Autores
const urlAuthors = url + "/authors";
let f = await getAllAuthors(urlAuthors);
let g = await getOneAuthor(urlAuthors, id);
let h = await getRelationshipsAuthor(urlAuthors);

// Manejo de Editoriales
const urlEditorials = url + "/editorials";
let e = await getAllEditorials(urlEditorials);
let p = await getOneEditorial(urlEditorials, id);
let i = await getRelationshipsEditorials(urlEditorials);

// Manejo de Estados
const urlStates = url + "/states";
let q = await getAllStates(urlStates);
let l = await getOneState(urlStates, id);
let m = await getRelationshipsStates(urlStates);

console.log("Categorias---------------");
console.log("todo", a, "one", b, "rela", c);

/* console.log("Libros---------------");
console.log("todo",x,"one",y,"rela",z);

console.log("Autores--------------");
console.log("todo",f,"one",g,"rela",h);
console.log("Editoriales--------------");
console.log("todo",e,"one",p,"rela",i);
console.log("Estados--------------");
console.log("todo",q,"one",l,"rela",m); */
