import ReactDom from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/61Q2a6OPMRL._AC_UL302_SR302,200_.jpg',
    title: 'Le pouvoir du moment présent',
    author: 'Eckhart Tolle'
  },

  {
    id: 2,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/9161teLdxwL._AC_UL302_SR302,200_.jpg',
    title: 'One Piece T05',
    author: 'Eiichiro Oda'
  },
  {
    id: 3,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/91cTr93aQ6L._AC_UL302_SR302,200_.jpg',
    title: 'Naruto T01 + T02 + T03',
    author: 'Masashi Kishimoto'
  }
];

//? exemple de mapping à travers un array
const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  // console.log(name);
  return <h1>{name}</h1>;
});
// console.log(newNames);

//* On refactorise l'app
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
