function TodoCounter( { total, completed } ) {
    return (
        <h1>
            Completaste {completed} de {total} TAREAS
        </h1>
    )
}

export { TodoCounter }