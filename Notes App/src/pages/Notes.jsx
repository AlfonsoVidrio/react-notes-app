import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { NoteItem } from '../components/NoteItem.jsx';

export const Notes = ({notes}) => {
  return (
    <section>
			<header className="notes__header">
				<h2>Mis notas</h2>
				<input type="text" autoFocus placeholder="Palabra clave..." />
				<button className='btn'><CiSearch/></button>
			</header>
			<div className="notes__container">
				{
				notes.map(note => <NoteItem key= {note.id} note={note}/>)
				}
			</div>
			<Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>
		</section>
	)
}
