import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questionID, setQuestionID] = useState(0);

  const handleClick = (id) => {
    setQuestionID((prevState) => {
      if (prevState === id) {
        return;
      }

      return id;
    });
  };

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {data.map((question) => (
            <SingleQuestion
              key={question.id}
              {...question}
              handleClick={handleClick}
              showInfo={question.id === questionID}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
