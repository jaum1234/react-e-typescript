import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";

import style from './Formulario.module.scss';

type FormularioProps = {
    setTarefas: Dispatch<SetStateAction<ITarefa[]>>
}

const Formulario = ({ setTarefas }: FormularioProps) => {

    const [tarefa, setTarefa] = useState<string>("");
    const [tempo, setTempo] = useState<string>("00:00");

    const adicionarTarefa = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        setTarefa("");
        setTempo("00:00");
    }

    return(
        <form className={ style.novaTarefa } onSubmit={ adicionarTarefa }>
            <div className={ style.inputContainer }>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    name="tarefa" 
                    id="tarefa" 
                    value={ tarefa }
                    onChange={ event => setTarefa(event.target.value) }
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
                    value={ tempo } 
                    onChange={ event => setTempo(event.target.value) }
                    min={"00:00:00"} 
                    max={"01:30:00"} 
                    type="time" 
                    required/>
            </div>
            <Botao type="submit">Adicionar</Botao>
        </form>
    )
}

export default Formulario;