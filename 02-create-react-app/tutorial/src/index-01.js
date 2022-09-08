import ReactDom from 'react-dom';
import React from 'react';
//* CSS
import './index.css';

// const Greeting = () => {
// //* ça ressemble à du HTML mais c'est du JSX. On y reviendra plus tard
// return <h4>C'est Thomas et voici mon premier composant</h4>;
// // ! il faut toujours retourner du JSX sinon erreur
// };

//* on utilise la méthode render de ReactDom et lui dit ce qu'on doit rendre et dans quoi
//! il est important de fermer les balises auto-fermantes avec React sinon on aura une erreur
// ReactDom.render(<Greeting />, document.getElementById('root'));

// TODO: Installer extension ES7 React/Redux/GraphQL/React-Native snippets
// permet d'utiliser le snipet avec rafce et d'autres... (voir la doc dans l'extension)

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

// const Greeting = () => {
//   return (
//     <React.Fragment>
//       <div>
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href='#'>hello world</a>
//           </li>
//         </ul>
//       </div>
//       {/* <div></div> */}
//     </React.Fragment>
//   );
// };

//* Composants imbriqués, Outils React
// const Greeting = () => {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// };

//? les composants sont comme des blocs de Lego qu'on utilisera pour construire nos interface utilisateur
// const Person = () => <h2>john doe</h2>;

// const Message = () => {
//   return <p>c'est mon message</p>;
// };

// TODO: Regarder dans le React devtools la structure de notre composant

// ReactDom.render(<Greeting />, document.getElementById('root'));

//* Mini projet liste de livres
const BookList = () => {
  return (
    <section className='booklist'>
      {/* <Book2v job='développeur' />
      <Book2v title='titre random' number={22} /> */}
      <Book2v
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}>
        <p>
          Himejima, le pilier du Rocher, et Shinazugawa, le pilier du Vent,
          affrontent Kokushibo, la 1e lune supérieure, dans un combat sans
          merci. Mais malgré l'apparition de la marque des pourfendeurs, les
          deux piliers ne font que reculer face à la puissance écrasante de
          Kokushibo. Voyant son frère en difficulté, Genya avale un morceau de
          chair de la 1e lune supérieure. Son geste désespéré suffira-t-il à
          leur assurer la victoire ?
        </p>
      </Book2v>
      <Book2v
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

// const Book = () => {
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src='https://images-eu.ssl-images-amazon.com/images/I/81b-wASp5+L._AC_UL604_SR604,400_.jpg'
//     alt=''
//   />
// );

// const Title = () => <h1>Demon Slayer T20</h1>;

//* CSS inline dans le JSX
// const Author = () => (
//   <h4 style={{ color: '#617d98', fontSize: '0.7rem', marginTop: '0.25rem' }}>
//     Koyoharu Gotouge
//   </h4>
// );

//* Nettoyage de printemps
//? on peut ajouter du JS dans le JSX
const author = 'Koyoharu Gotouge';
const image =
  'https://images-eu.ssl-images-amazon.com/images/I/81b-wASp5+L._AC_UL604_SR604,400_.jpg';
const title = 'Demon Slayer T20';

const Book1v = () => {
  const title = 'Demon Slayer T20';

  return (
    <article className='book'>
      <img src={image} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* Quand on  passe dans le "monde du JS" (en ajoutant les {}), il faut toujours retourner quelque chose sinon on a une erreur comme suit : */}
      {/* <p>{let x = 6}</p> */}
      {/* <p>{6 + 6}</p> */}
    </article>
  );
};

//? on peut passer des arguments dans notre composant qu'on appelle props par convention (raccourcis de propriétés)
// const Book2v = (props) => {
//   console.log(props);
//   return (
//     <article className='book'>
//       <img src={image} alt='' />
//       <h1>{title}</h1>
//       <h4>{author.toUpperCase()}</h4>
//       {/* si la prop n'existe pas, elle ne sera pas affichée */}
//       {/* On peut maintenant faire des composants dynamiques */}
//       <p>{props.job}</p>
//       <p>{props.title}</p>
//       <p>{props.number}</p>
//     </article>
//   );
// };

// const Book2v = (props) => {
const Book2v = ({ img, title, author, children }) => {
  //? on peut déstrcturer nos props
  // const { img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* la prop children est particulière car elle permet de rendre ce qui se trouve entre les tags d'un composant */}
      {children}
    </article>
  );
};

const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/61Q2a6OPMRL._AC_UL302_SR302,200_.jpg',
  title: 'Le pouvoir du moment présent',
  author: 'Eckhart Tolle'
};

const secondBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/9161teLdxwL._AC_UL302_SR302,200_.jpg',
  title: 'One Piece T05',
  author: 'Eiichiro Oda'
};

ReactDom.render(<BookList />, document.getElementById('root'));
