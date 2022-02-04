import { Component } from "react";

import style from './Botao.module.scss';

class Botao extends Component
{
    render(): JSX.Element {
        return(
            <button className={ style.botao }>
                { this.props.children }
            </button>
        )
    }
}

export default Botao;