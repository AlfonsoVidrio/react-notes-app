import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Notes } from './pages/Notes';
import { CreateNotes } from './pages/CreateNotes';
import { EditNotes } from './pages';

export const App = () => {
  return (
    <main id='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create-note" element={<CreateNotes />} />
          <Route path="/edit-note/:id" element={<EditNotes />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
