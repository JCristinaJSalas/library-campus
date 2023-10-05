import { getAllBooks, getOneBook } from "./storge/book.js";

const ssl = "http://";
const hotname = "127.0.14.1";
const port = "5414";
export const url = `${ssl + hotname}:${port}`;

// Manejo de DB books
const urlBooks = url + "/books";
const id = 1;
await getAllBooks(urlBooks);
await getOneBook(urlBooks, id);
