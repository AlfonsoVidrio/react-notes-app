import { Link } from "react-router-dom"
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from "react-icons/ri";

export const EditNotes = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className="btn"><IoIosArrowBack/></Link>
        <button className="btn lg primary">Guardar</button>
        <button className="btn lg danger"><RiDeleteBin6Line/></button>
      </header>
      <form action="" className="create-note__form">
        <input type="text" placeholder="Titulo" autoFocus/>
        <textarea rows="28" placeholder="detalles de la nota..."></textarea>
      </form>
    </section>
  )
}
