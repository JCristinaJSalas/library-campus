import { getAllAuthors } from "./author.js";
import { getAllCategories } from "./category.js";
import { getAllEditorials } from "./editorials.js";
import { isObject, objectBooks } from "./validations.js";
const config = {
  method: undefined,
  headers: { "Content-Type": "application/json" },
};

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

//----------------**--------------------
//-----------  POST  -------------------

export const postBook = async (urlBooks, objeto) => {
  if (isObject(objeto) && objectBooks(objeto)) {
    config.method = "POST";
    config.body = JSON.stringify(objeto);
    await (await fetch(urlBooks, config)).json();
    console.log("Se guardo");
  } else {
    const mensajeNoEnvio = {
      status: 400,
      message: `Problemas al guardar`,
    };
    console.error(mensajeNoEnvio.message);
  }
};

//----------------**--------------------
//-----------  PUT  -------------------
export const putBook = async (urlBooks, objeto, id) => {
  if (isObject(objeto) && objectBooks(objeto)) {
    config.method = "PUT";
    config.body = JSON.stringify(objeto);
    await (await fetch(`${urlBooks}/${id}`, config)).json();
    console.log("Se cambio");
  } else {
    const mensajeNoEnvio = {
      status: 400,
      message: `Problemas al Editar`,
    };
    console.error(mensajeNoEnvio.message);
  }
};

//----------------**--------------------
//-----------  DELETE  -------------------
export const deleteBook = async (urlBooks, id) => {
  try {
    config.method = "DELETE";
    await (await fetch(`${urlBooks}/${id}`, config)).json();
    console.log("Se Borro");
  } catch (error) {
    console.error(error);
  }
};

//----------------**--------------------
//-----------Mostrar Libros   HOME PAGE-------------

const contenedorLibros = document.querySelector(".contenedorLibros");

export const mostrarLibros = async (urlBooks) => {
  const libros = await getAllBooks(urlBooks);
  libros.map((libro) => {
    contenedorLibros.insertAdjacentHTML(
      "beforeend",
      `
      <div class="contenedorLibro">
      <img
        class="img-card"
        src="${libro.urlImg}"
        alt="${libro.title}"
      />
      <div class="bio">
        <h3>${libro.title}</h3>
        <h5>${libro.stateId}</h5>
      </div>
    </div>
    `
    );
  });
};
const modalCat = document.querySelector(".selectCat");
const modalAu = document.querySelector(".selectAutor");
const modalEdi = document.querySelector(".selectEditorial");

export const addLibro = async (urlCategories,urlAuthor,urlEditorial) => {

  const cat = await getAllCategories(urlCategories);
  cat.map((c) => {
    modalCat.insertAdjacentHTML("beforeend",`
    <option value="${c.id}">${c.name}</option>
    `)})

  const autores = await getAllAuthors(urlAuthor)
  autores.map((a) => {
    modalAu.insertAdjacentHTML("beforeend",`
    <option value="${a.id}">${a.name} ${a.lastname}</option>
    `)})

    const editorial = await getAllEditorials(urlEditorial)
    editorial.map((e) => {
      modalEdi.insertAdjacentHTML("beforeend",`
      <option value="${e.id}">${e.name}</option>
      `)})
  };

  
 