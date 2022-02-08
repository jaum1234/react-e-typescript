import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';



const Lista = ({ tarefas }: { tarefas: ITarefa[] }): JSX.Element => {
    
    return(
        <aside className={ style.listaTarefas }>
            <h2 > Estudos do dia </h2>
            <ul >
                { tarefas.map((item, index) => (
                    <Item {...item} key={ index } />
                )) }
            </ul>
        </aside>
    )
}

export default Lista