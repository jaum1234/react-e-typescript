import { Component } from "react";
import Botao from "../Botao";

import style from './Formulario.module.scss';
class Formulario extends Component
{
    render(): JSX.Element {
        return(
            <form className={ style.novaTarefa }>
                <div className={ style.inputContainer }>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="O que voce quer estudar?" 
                        type="text" 
                        required/>
                </div>
                <div className={ style.inputContainer }>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                        step={1} 
                        name="tempo" 
                        id="tempo" 
                        min={"00:00:00"} 
                        max={"01:30:00"} 
                        type="time" 
                        required/>
                </div>
                <Botao>Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;