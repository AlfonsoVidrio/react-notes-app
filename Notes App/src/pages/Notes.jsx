import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from "react-icons/bs";
import dummyNotes from '../dummy_notes.js';
import { Link } from 'react-router-dom';

export const Notes = () => {
  return (
    <section>
			<header className="notes__header">
				<h2>Mis notas</h2>
				<input type="text" autoFocus placeholder="Palabra clave..." />
				<button className='btn'><CiSearch/></button>
			</header>
			<div className="notes__container">
				{/* {
					dummyNotes.map(note => <NoteItem key= {note.id} />)
				} */}
			</div>
			<Link className='btn add__btn'><BsPlusLg/></Link>
		</section>
	)
}
