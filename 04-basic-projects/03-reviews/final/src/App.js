import React from 'react';
import Review from './Review';

//? on peut utiliser le lien CDN de fontAwesome pour les icônes mais on utilisera la librairie react icons dans ce projet
//? https://react-icons.github.io/react-icons/
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
