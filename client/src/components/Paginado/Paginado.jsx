/* eslint-disable react/prop-types */
import style from "./paginado.module.css";

const Paginado = ({ setPagina, pagina, paginasTotales }) => {
  const handleNext = (event) => {
    event.preventDefault();
    if (pagina !== paginasTotales) setPagina(pagina + 1);
  };

  const handlePrev = (event) => {
    event.preventDefault();
    if (pagina !== 1) setPagina(pagina - 1);
  };

  return (
    <div className={style.paginado}>
      {pagina != 1 && <button onClick={handlePrev}>Prev</button>}
      {pagina > 3 && (
        <>
          {" "}
          <button onClick={() => setPagina(1)}>1</button>
        </>
      )}
      {pagina > 3 && (
        <button onClick={() => setPagina(pagina - 2)}>{pagina - 2}</button>
      )}
      {pagina >= 2 && (
        <button onClick={() => setPagina(pagina - 1)}>{pagina - 1}</button>
      )}
      <h3>
        {pagina}
        {/* // /{paginasTotales} */}
      </h3>
      {pagina < paginasTotales - 1 && (
        <button onClick={() => setPagina(pagina + 1)}>{pagina + 1}</button>
      )}
      {pagina < paginasTotales - 2 && (
        <button onClick={() => setPagina(pagina + 2)}>{pagina + 2}</button>
      )}
      {pagina != paginasTotales && (
        <>
          {pagina < paginasTotales - 2 && <h3>...</h3>}

          <button onClick={() => setPagina(paginasTotales)}>
            {paginasTotales}
          </button>
        </>
      )}
      {pagina != paginasTotales && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

export default Paginado;
