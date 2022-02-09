import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelectionada: ITarefa) => void
}

const Lista = ({ tarefas, selecionaTarefa }: Props): JSX.Element => {
    
    return(
        <aside className={ style.listaTarefas }>
            <h2 > Estudos do dia </h2>
            <ul >
                { tarefas.map((item, index) => (
                    <Item 
                        {...item} 
                        key={ index } 
                        selecionaTarefa={ selecionaTarefa }/>
                )) }
            </ul>
        </aside>
    )
}

export default Lista