import GameSetup from './GameSetup';
import GamePlay from './GamePlay';
import GameScore from './GameScore';
import Timer from './Timer'
import Header from './Header'
import Footer from './Footer'
import anagrams from "../../../../../src/assets/anagramsArray.js"
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'



function App() {
  const [wordLength, setWordLength] = useState('5');
  const wordAnswers = findRandom(anagrams[wordLength]);
  const [score, setScore] = useState(0);
  const [wordsLeft, setWordsLeft] = useState(wordAnswers.length - 1);



  function findRandom(value) {
    if (value) {
      const random = Math.floor(Math.random() * value.length)
      const randomSelected = value[random];
      return randomSelected;
    }
      return 0;
    
  }

 
  
  return (
    <>
      <Header />
      <h1 className='p2lAnagram'>Anagram Hunt</h1>
      <Routes>
        <Route exact path="/" element={
          <GameSetup
          wordLength={wordLength}
          setWordLength={setWordLength} />
          }>
        </Route>
        <Route exact path="/play/*" element={
          <GamePlay 
          score={score}
          setScore={setScore}
          wordAnswers={wordAnswers}
          wordLength={wordLength}
          wordsLeft={wordsLeft}
          findRandom= {findRandom}/>
        }>
        </Route>
        <Route exact path="/score" element={
          <GameScore score={score}/>
        }>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
