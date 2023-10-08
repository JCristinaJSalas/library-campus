import { isObject, objectAuthors } from "./validations.js";
const config = {
  method: undefined,
  headers: { "Content-Type": "application/json" },
};

export const getAllAuthors = async (urlAuthors) => {
  const dataAuthorJson = await (await fetch(urlAuthors)).json();
  return dataAuthorJson.map((author) => {
    if (isObject(author)) return objectAuthors(author);
  });
};

export const getOneAuthor = async (urlAuthors, id) => {
  const bookJson = await (await fetch(`${urlAuthors}/${id}`)).json();
  if (isObject(bookJson)) return objectAuthors(bookJson);
};

// request
//http://127.0.14.1:5414/authors?_embed=books
export const getRelationshipsAuthor = async (urlAuthors) => {
  const urlFiltro = urlAuthors + "?_embed=books";
  return await (await fetch(urlFiltro)).json();
};
//----------------**--------------------
//-----------  POST  -------------------

export const postAuthor = async (urlAuthors, objeto) => {
  if (isObject(objeto) && objectAuthors(objeto)) {
    config.method = "POST";
    config.body = JSON.stringify(objeto);
    await (await fetch(urlAuthors, config)).json();
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
export const putAuthor = async (urlAuthors, objeto, id) => {
  if (isObject(objeto) && objectAuthors(objeto)) {
    config.method = "PUT";
    config.body = JSON.stringify(objeto);
    await (await fetch(`${urlAuthors}/${id}`, config)).json();
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
export const deleteAuthor = async (urlAuthors, id) => {
  try {
    config.method = "DELETE";
    await (await fetch(`${urlAuthors}/${id}`, config)).json();
    console.log("Se Borro");
  } catch (error) {
    console.error(error);
  }
};


const contenedorAutoresInfo = document.querySelector(".contenedorAutoresInfo")
export const mostrarAutores = async(urlAuthor) => {
  const autores = await getAllAuthors(urlAuthor)
  autores.map((categoria) => {
    contenedorAutoresInfo.insertAdjacentHTML("beforeend",`
    <div class="contenedorAutor">
      <div class="contenedorImg">
       <img src="${categoria.urlImg}" alt="${categoria.name}"/>
      </div>
      <div class="contenedorInfoAutor">
        <h2>${categoria.name} ${categoria.lastname}</h2>
        <h5>${categoria.nationality}</h5>
       </div>
    </div>
    `
    )
  })
}