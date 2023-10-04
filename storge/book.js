import { isString,isNumber,isDate, isObject } from "./validations.js"


export const getBook = (dataObject) => {
  console.log(isObject(dataObject)); 
  const keyBook = ["title","date","authorId","categoryId","editionId","isbn","numPaginations","id"]

  Object.keys(dataObject).forEach((e) => {
    if (keyBook.includes(e)){
       console.log(`Si incluye ${e} `)
    }
    else{
      const mensaje = "El dato no esta en el objeto"
      return console.log(mensaje)
    }
  })
}

