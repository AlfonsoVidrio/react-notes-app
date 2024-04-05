import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Notes } from './pages/Notes';
import { CreateNotes } from './pages/CreateNotes';
import { EditNotes } from './pages';
// import dummyNotes from './dummy_notes';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  return (
    <main id='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes = {notes} />} />
          <Route path="/create-note" element={<CreateNotes setNotes={setNotes}/>} />
          <Route path="/edit-note/:id" element={<EditNotes notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
