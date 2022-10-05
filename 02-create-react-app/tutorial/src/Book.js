// const Greeting = () => {
// //* ça ressemble à du HTML mais c'est du JSX
// return <h4>C'est Thomas et voici mon premier composant</h4>;
// // ! il faut toujours retourner du JSX sinon erreur
// };

//* on utilise la méthode render de ReactDom et lui dit ce qu'on doit rendre et dans quoi
//! il est important de fermer les balises auto-fermantes avec React sinon on aura une erreur
// ReactDom.render(<Greeting />, document.getElementById('root'));

// TODO: Installer extension ES7 React/Redux/GraphQL/React-Native snippets
// permet d'utiliser le snipet avec 'rafce' et d'autres... (voir la doc dans l'extension)

// const Greeting = () => {
//   //? Ce que fait implicitement le JSX
//   // 1er arg: tag, 2ème arg: props, 3ème arg: enfant
//   return React.createElement('h1', {}, 'hello world');
// };

// ReactDom.render(<Greeting />, document.getElementById('root'));

//* Règles du JSX
//* retourne UN élément
//? div / section / article ou Fragment
//* utilise le camelCase pour les attributs html
//? className au lieu de class
//* fermer tous les éléments
//* formatage () avec le return

//* Event
const Book = ({ img, title, author }) => {
  //* attribute, eventHandler
  //* onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Exemple par référence
      </button>
      {/* si on veut passer un argument dans notre fonction, on doit passer par une arrow fonction */}
      <button type='button' onClick={() => complexExample(author)}>
        Exemple plus complexe
      </button>
    </article>
  );
};

export default Book;
