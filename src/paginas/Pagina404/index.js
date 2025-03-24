import Alerta from "../../componentes/Alerta";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import robot from "../../assets/robo_404.png";

function Pagina404() {
    return (
        <>
            <Cabecalho />

            <section className="container mt-3" id="pagina-nao-encontrada">
                <div className="text-center">
                    <Alerta texto="ERRO-404 a pagina não existe" />
                    <img src={robot} alt="Erro 404" width={"30%"}></img>
                </div>
               
            </section>
            <Rodape />
        </>

    );
}

export default Pagina404;
