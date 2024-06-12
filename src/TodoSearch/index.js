import React from "react"
import "./index.css"

function TodoSearch({
    searchValue,
    setSearchValue
}) {

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

