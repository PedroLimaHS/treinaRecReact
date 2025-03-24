import { useState } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";

function Cadastro() {

    const [Nome , setNome] = useState("");
    const [cpf , setCpf] = useState("");
    const [Email , setEmail] = useState("");
    const [Senha , setSenha] = useState("");
    const [dataNascimento , setdataNascimento] = useState("");
    const [Status , setStatus] = useState(0);
    const [Cep , setCep] = useState("");
    const [Logradouro , setLogradouro] = useState("");
    const [Numero , setNumero] = useState("");
    const [complemento , setComplemento] = useState("");
    const [bairro , setBairro] = useState("");
    const [cidade , setCidade] = useState("");
    const [UF , setUF] = useState("");
    
   

    return (
        <>
            <Cabecalho />

            <section className='container' id="formulario">
                <h1 className='text-primary'>Cadastro de Aluno</h1>

                <form className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="validationCustom01" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"                                                                                                                                     
                            value={Nome}
                            onChange={(e) => setNome(e.target.value)} 
                            required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <label htmlFor="validationCustomUsername" className="form-label">CPF</label>
                        <div className="input-group has-validation">                            
                            <input 
                                type="text" 
                                className="form-control" 
                                aria-describedby="inputGroupPrepend" 
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)} required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="validationCustomUsername" className="form-label">E-mail</label>
                        <div className="input-group has-validation">                            
                            <input 
                                type="text" 
                                className="form-control" 
                                aria-describedby="inputGroupPrepend" 
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)} required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom03" className="form-label">Cidade</label>
                        <input type="text" className="form-control" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom04" className="form-label">State</label>
                        <select className="form-select" id="validationCustom04" required>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom05" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="validationCustom05" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </section>

            <Rodape />
        </>
    );
}
export default Cadastro;