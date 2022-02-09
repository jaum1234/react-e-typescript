import Botao from "../../components/Botao";
import Relogio from "./Relogio";

import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/date";

const Cronometro = () => {
    console.log('conversao: ', tempoParaSegundos('01:01:01'));
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