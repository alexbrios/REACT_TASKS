import "./index.css"

function TodoCounter( { total, completed } ) {
    return (
        <h1 className="TodoCounter">
            Completaste <span>{completed}</span> de <span>{total}</span> TAREAS
        </h1>
    )
}

export { TodoCounter }