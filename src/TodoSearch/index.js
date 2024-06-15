import React from "react"
import "./index.css"
import { TodoContext } from "../TodoContext/Index"

function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext)

    return (
            <input className="TodoSearch" placeholder="Buscar tareas..."
            value = {searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
            />
    )
}

export { TodoSearch }

