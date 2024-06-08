import React from "react"
import "./index.css"

function TodoSearch( props ) {
    const [searchValue, setsearchValue] = React.useState("")

    console.log(searchValue)

    return (
            <input className="TodoSearch" placeholder="Buscar tareas"
            value = {searchValue}
            onChange={(event) => {
                setsearchValue(event.target.value)
            }}
            />
    )
}

export { TodoSearch }

