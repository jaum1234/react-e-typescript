import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelectionada: ITarefa) => void
}

const Item = ({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) => {
    
    return(
        <li className={ style.item } onClick={ () => selecionaTarefa({
            tarefa,
            tempo,selecionado,
            completado,
            id
        })}>
            <h3>{ tarefa }</h3>
            <span>{ tempo }</span>
        </li>
    )
}

export default Item;