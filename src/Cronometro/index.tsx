import Botao from "../components/Botao";
import Relogio from "./Relogio";

import style from './Cronometro.module.scss'

const Cronometro = () => {
    return(
        <div className={ style.cronometro }>
            <p className={ style.titulo }>Escolha um card e inicie o cronometro</p>
            <div className={ style.relogioWrapper }>
                <Relogio/>
            </div>
            <Botao type="button">
                Começar
            </Botao>
        </div>
    )
}

export default Cronometro;