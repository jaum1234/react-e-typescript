import { Component } from "react";
import Botao from "../Botao";

import './style.scss';

class Formulario extends Component
{
    render(): JSX.Element {
        return(
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="O que voce quer estudar?" 
                        type="text" 
                        required/>
                </div>
                <div className="inputContainer">
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
                <Botao/>
            </form>
        )
    }
}

export default Formulario;