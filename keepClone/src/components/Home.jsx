import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import '../components/Home.css'
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const Home = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [label, setLabel] = useState('');

    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(createNote({title, content, label}));
      setTitle('');
      setContent('');
      setLabel('');
    }

  return (
    <div className='note-container'>
      <form>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder='Content' />
        <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder='Label' />
        <button type='submit'><AddRoundedIcon /></button>
      </form>
    </div>
  )
}

export default Home
