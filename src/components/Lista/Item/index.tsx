import style from './Item.module.scss';

type ItemProps = {
    tarefa: string,
    tempo: string
}

const Item = ({ tarefa, tempo }: ItemProps) => {
    return(
        <li className={ style.item }>
            <h3>{ tarefa }</h3>
            <span>{ tempo }</span>
        </li>
    )
}

export default Item;