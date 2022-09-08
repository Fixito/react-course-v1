# Projet Slider

## Structure du Projet

- App.jsx
- data.js
- main.jsx

## Strcuture JSX

- App.jsx

  - section.section
    - div.title
      - h2
        - span
    - div.section-center
      - people.map() et retourner :
        - article
          - img.person-img
          - h4
          - p.title
          - p.text
      - button.prev
      - button.next

## Logique

- créer unstate people qui contient les data
- créer un state index
- créer lesfonctions pour avant ou reculer d'une slide
- créer un useEffect qui contient un setInterval faisant avancer une slide toute les 5 secondes
