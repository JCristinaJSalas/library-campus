import { getBook } from "./storge/book.js"

const ssl = "https://"
const hotname = "127.0.14.1"
const port = "5414"
const url = `${ssl+hotname}:${port}`

const urlBooks =url+"/book"

getBook(urlBooks)
