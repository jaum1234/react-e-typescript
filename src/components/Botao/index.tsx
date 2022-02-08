import { Component } from "react";

import style from './Botao.module.scss';

type BotaoProps = {
    type?: 'button' | 'submit' | 'reset' | undefined
}

class Botao extends Component<BotaoProps>
{
    render(): JSX.Element {
        const { type = 'button'} = this.props;

        return(
            <button className={ style.botao } type={ type }>
                { this.props.children }
            </button>
        )
    }
}

export default Botao;