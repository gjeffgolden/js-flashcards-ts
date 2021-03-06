import React, { useState } from 'react';
import CardContainer from './containers/CardContainer'
import './App.css';
import keyTerms from './assets/KeyTerms';
import { KeyTerm } from './assets/KeyTerms';

function App() {

  const [allCards, setAllCards] = useState<KeyTerm[]>(keyTerms)


  return (

    <div className="flex flex-row justify-center items-center h-screen w-screen">
      <CardContainer allCards={allCards} />
    </div>
  );
}

export default App;
