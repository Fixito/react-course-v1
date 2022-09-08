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
