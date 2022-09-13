# Projet Onglets

[API](https://course-api.com/react-tabs-project)

## Structure du Projet

- App.jsx
- main.jsx

## Structure JSX

- App.jsx
  - section.section
    - div.title
      - h2
      - div.underline
    - div.jobs-center
      - div.btn-container
        - jobs.map() et retourner button.job-btn
      - article.job-info
        - h3
        - h4
        - p.job-date
        - duties.map() et retourner :
          - div.job-desc
            - p

## Logique

- créer une state loading pour le chargement
- créer une state jobs pour le tableau de métiers
- créer un state value pour l'index
- créer une fonction fetchJobs qui récupère les données
- Afficher le premier élément du tableau
- sur le clic du bouton de la compagnie afficher l'index du tableau correspondant
