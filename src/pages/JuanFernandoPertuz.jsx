import { useState } from "react"

const JuanFernandoPertuz = () => {
  const [tareas, setTareas] = useState([])
  const [texto, setTexto] = useState("")
  const [editandoId, setEditandoId] = useState(null)
  const [textoEdicion, setTextoEdicion] = useState("")

  const agregar = () => {
    if (!texto.trim()) return
    setTareas([...tareas, { id: Date.now(), texto }])
    setTexto("")
  }

  const eliminar = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  const iniciarEdicion = (tarea) => {
    setEditandoId(tarea.id)
    setTextoEdicion(tarea.texto)
  }

  const guardarEdicion = (id) => {
    if (!textoEdicion.trim()) return
    setTareas(tareas.map((t) => (t.id === id ? { ...t, texto: textoEdicion } : t)))
    setEditandoId(null)
    setTextoEdicion("")
  }

  return (
    <div>
      <h1>To-Do List</h1>

      <div className="ToDoList">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregar()}
          placeholder="Nueva tarea..."
          className="counter"
        />
        <button className="counter" onClick={agregar}>Agregar</button>
      </div>

      {tareas.length === 0 && <p className="texts">No hay tareas.</p>}

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {editandoId === tarea.id ? (
              <>
              <div className="ToDoList">
                <input
                  value={textoEdicion}
                  onChange={(e) => setTextoEdicion(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && guardarEdicion(tarea.id)}
                  className="counter"
                />
                <button className="counter" onClick={() => guardarEdicion(tarea.id)}>Guardar</button>
                <button className="counter" onClick={() => setEditandoId(null)}>Cancelar</button>
              </div>
              </>
            ) : (
              <>
              <div className="ToDoList">
                <span className="texts">{tarea.texto}</span>
                <button className="counter" onClick={() => iniciarEdicion(tarea)}>Editar</button>
                <button className="counter" onClick={() => eliminar(tarea.id)}>Eliminar</button>
              </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JuanFernandoPertuz
