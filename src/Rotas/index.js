import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../paginas/Login";
import Cadastro from "../paginas/Cadastro";
import Pagina404 from "../paginas/Pagina404";

function Rotas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="*" element={<Pagina404/>}/>
            </Routes>
        </BrowserRouter>

    );
}
export default Rotas;