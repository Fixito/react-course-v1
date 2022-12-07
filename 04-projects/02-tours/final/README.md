# Projet Voyages

## Architecture du projet

- App.jsx
- Main.jsx
- Loading.jsx
- Tour.jsx
- Tours.jsx

## Structure JSX

- **App.jsx**

  - main
  - `<Tours />`

- **Tours.jsx**

  - section
    - div.title
      - h2 (Our Tours)
      - div.underline
    - div
      { pour chaque voyages retourner `<Tour />` }

- **Tour.jsx**

  - article.single-tour
    - img
    - footer
    - div.tour-info
      - h4
      - h4
    - p
    - button.delete-btn

- **Loading.jsx**

  - div.loading
    - h1 (Loading...)

## Logique

- **Dans `App`**,
  - Récupérer les données
  - Créer une fonction pour supprimer un voyage
  - Les passer dans `Tours` puis dans `Tour`.

Pour le chargement, créer un state `isLoading` (booléen). Changer le state à false une fois les données récupérées.

Si le state est true, retourner :

```js
<main>
  <Loading />
</main>
```

sinon retourner la liste des voyages.

- Si le tableau de voyages est vide retourner

```JS
<main>
  <div className='title'>
    <h2>no tours left</h2>
    <button className='btn' onClick={fetchTours}>
    refresh
    </button>
  </div>
</main>
```

- Sur le clique du bouton `refresh`, appeler la fonction pour récupèrer les données

- Dans `Tour`, créer un state (booléen) pour savoir si on veut voir plus d'info ou non
