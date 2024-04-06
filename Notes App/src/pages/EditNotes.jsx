import { Link, useParams, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { useCreateDate } from "../hooks/useCreateDate";

export const EditNotes = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();
  console.log(title)
  const handleForm = (e) => {
    e.preventDefault();
    console.log(title)
    if(title && details) {
      const newNote = {...note, title, details, date}

      const newNotes = notes.map(item => {
        if(item.id == id){
          item = newNote
        }
        return item;
      })
      setNotes(newNotes);
    }

    // redirect to home page
    navigate("/");
  }

  const handleDelete = () => {
    if(window.confirm('¿Estas seguro que quieres eliminar la nota?')){
      const newNotes = notes.filter(item => item.id != id);

      setNotes(newNotes);
      navigate('/')
    }
  }

  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className="btn"><IoIosArrowBack /></Link>
        <button onClick={ handleForm } className="btn lg primary">Guardar</button>
        <button onClick={ handleDelete } className="btn lg danger"><RiDeleteBin6Line /></button>
      </header>
      <form action="" className="create-note__form" onSubmit={ handleForm }>
        <input type="text" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <textarea rows="28" placeholder="detalles de la nota..." value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}
