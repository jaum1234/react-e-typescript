import { Component, Dispatch, FormEvent, SetStateAction } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";

import style from './Formulario.module.scss';

type FormularioProps = {
    setTarefas: Dispatch<SetStateAction<ITarefa[]>>
}
class Formulario extends Component<FormularioProps>
{
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(event: FormEvent<HTMLFormElement>)
    {
        event.preventDefault();

        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render(): JSX.Element {
        return(
            <form className={ style.novaTarefa } onSubmit={ this.adicionarTarefa.bind(this) }>
                <div className={ style.inputContainer }>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        name="tarefa" 
                        id="tarefa" 
                        value={ this.state.tarefa }
                        onChange={ event => this.setState({...this.state, tarefa: event.target.value}) }
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
                        value={ this.state.tempo } 
                        onChange={ event => this.setState({...this.state, tempo: event.target.value}) }
                        min={"00:00:00"} 
                        max={"01:30:00"} 
                        type="time" 
                        required/>
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;