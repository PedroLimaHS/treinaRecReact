import miniatura from '../../assets/treina_recife_miniatura.png';

function Rodape() {
    return (
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">Treina Recife &copy; { new Date().getFullYear() }</p>

          <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src={miniatura} alt='Treina Recife' width="50px" />
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Cursos</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Professores</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Institucional</a></li>
          </ul>
        </footer>
      </div>
    );
}

export default Rodape;