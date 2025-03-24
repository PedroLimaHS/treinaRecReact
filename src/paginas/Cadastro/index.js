import { useState } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { UF } from "../../constantes/ufs";

function Cadastro() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [dataNascimento, setDataNascimento] = useState();
    const [status, setStatus] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [complemento, setComplemento] = useState("");

    return (
        <>
            <Cabecalho />
            <section className='container mt-3' id="formulario">
                <h1 className='text-dark'>Cadastro de Aluno</h1>
                <form className="row g-3">
                    <div className="col-md-4 col-12">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cpf"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dataNascimento"
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select
                            className="form-select"
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option disabled value="">Escolha uma opcao...</option>
                            <option value={0}>Inativo</option>
                            <option value={1}>Ativo</option>
                        </select>
                    </div>

                    <div className="col-md-4 col-12">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cep"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-6 col-12">
                        <label htmlFor="logradouro" className="form-label">Logradouro</label>
                        <input
                            type="text"
                            className="form-control"
                            id="logradouro"
                            value={logradouro}
                            onChange={(e) => setLogradouro(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-2 col-12">
                        <label htmlFor="numero" className="form-label">Numero</label>
                        <input
                            type="text"
                            className="form-control"
                            id="numero"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-3 col-12">
                        <label htmlFor="bairro" className="form-label">Bairro</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bairro"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-3 col-12">
                        <label htmlFor="uf" className="form-label">Cidade</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-2 col-12">
                        <label htmlFor="cidade" className="form-label">UF</label>
                        <select
                            className="form-select"
                            id="uf"
                            value={uf}
                            onChange={(e) => setUf(e.target.value)}
                            required
                        >
                            <option disabled value="">Escolha uma opcao...</option>
                            {UF.map((estado, indice) => (
                                <option value={estado} key={indice}>{estado}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4 col-12">
                        <label htmlFor="complemento" className="form-label">Complemento</label>
                        <input
                            type="text"
                            className="form-control"
                            id="complemento"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Salvar</button>
                    </div>
                </form>
            </section>

            <Rodape />
        </>
    );
}

export default Cadastro;