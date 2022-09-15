import React, { useState } from 'react';
// https://www.npmjs.com/package/react-markdown
import ReactMarkdown from 'react-markdown';

//? penser à faire le CSS pour le rendu
function App() {
  const [markdown, setMarkdown] = useState('## Markdown preview');

  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
