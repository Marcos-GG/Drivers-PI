/* eslint-disable react/prop-types */
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
    <div>
      <button onClick={handlePrev}>Prev</button>
      <h3>
        {pagina}/{paginasTotales}
      </h3>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Paginado;
