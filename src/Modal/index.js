function Modal({
    titulo = "Confirmação",
    texto,
    textobotao1 = "Salvar",
    textobotao2 = "Cancelar",
    onClickBotao1,
    onClickBotao2,
    onClickBotaoClose
}) {
    return (
        <div className="modal modal-dialog-centered" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{titulo}</h5>
                        {onClickBotaoClose &&(
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={onClickBotaoClose}></button>
                        )}
                    </div>
                    <div className="modal-body">
                        <p>{texto}.</p>
                    </div>
                    <div className="modal-footer">
                        {onClickBotao1 && textobotao1 && (
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                onClick={onClickBotao1}>{textobotao1}</button>
                        )}

                        {onClickBotao2 && textobotao2 &&(<button type="button" className="btn btn-primary"
                            onClick={onClickBotao2}>{textobotao2}</button>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Modal;
