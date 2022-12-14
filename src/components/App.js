import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'; 

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Dummy.scss';
import '../styles/Header.scss';

import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import Instructions from './Instructions';
import Options from './Options';
import Loading from './Loading';


function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');
  const [ loading, setLoading]= useState ( false);
  const [ isLoading, setIsLoading]=  useState ( true ) 

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const handleWord = value => {
    setWord(value);
    setUserLetters([]);
    setLastLetter('');
  };


  const handleChange = (ev) => {
    let re = /[a-zA-Z]/; //add regular pattern - lesson 3.3 exercise 2
    if (re.test(ev.target.value)) {
      handleLastLetter(ev.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className='letter'>
          {exists ? letter : ''}
        </li>
      );
    });
  };

  const renderErrorLetters = () => {
    const errorLetters = userLetters.filter(
      (letter) =>
        word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
    );
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className='letter'>
          {letter}
        </li>
      );
    });
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className='page'>
      <Header />
      <main className='main'>
            <section>
     <Routes>
        <Route path="/" element={
          <>
              <SolutionLetters   userLetters = {renderSolutionLetters()} />
              <ErrorLetters userErrorLetters = {renderErrorLetters()}/>
              <Form handleSubmit = {handleSubmit} handleKeyDown={handleKeyDown} handleChange = {handleChange} lastLetter={lastLetter} />
          </>
        } />

          <Route path="/instructions" element={<Instructions />} />
          <Route path="/options" element={<Options  handleWord= { handleWord}  word ={ word} />} />
      </Routes>
      </section>
            < Dummy  numberOfErrors= {getNumberOfErrors()}/>
            </main>
      <Footer/>
    </div>
  );
}

export default App;
