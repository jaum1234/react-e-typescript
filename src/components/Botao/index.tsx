import { ReactNode } from "react";

import style from './Botao.module.scss';

type BotaoProps = {
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void,
    children?: ReactNode
}

const Botao = ({ type, onClick, children }: BotaoProps) => {
    return(
        <button className={ style.botao } type={ type } onClick={ onClick }>
            { children }
        </button>
    )
}
export default Botao;