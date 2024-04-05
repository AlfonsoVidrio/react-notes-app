import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from "react";
import { v4 as uuid } from 'uuid';
import { useCreateDate } from "../hooks/useCreateDate";


export const CreateNotes = ({ setNotes }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate();
  
  const handleSubmit= (e) => {
    e.preventDefault();

    if(title && details){
      const note = {
        id: uuid(),
        title,
        details,
        date
      }
      // add this note to the Notes array
      setNotes(prevNotes => [note, ...prevNotes])
      // redirect to home page
      navigate('/');
    }

  }

  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className="btn"><IoIosArrowBack/></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Guardar</button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus/>
        <textarea rows="28" placeholder="detalles de la nota..." onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}
