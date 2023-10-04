import { getBook } from "./storge/book.js"

const ssl = "https://"
const hotname = "127.0.14.1"
const port = "5414"
const url = `${ssl+hotname}:${port}`

const urlBooks =url+"/book"


const dataObject = {
    "title": "The End",
    "date": "01-15-2023",
    "authorId": 1,
    "categoryId": 1,
    "editionId": 1,
    "isbn": 456,
    "numPaginations": 700,
    "id": 1,
    "imageUrl": "http://"
  }
getBook(dataObject)
