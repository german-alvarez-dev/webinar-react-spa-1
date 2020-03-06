# Webinar React: from 0 to SPA (parte 1)

Materiales de la primera partde del webinar sobre  **React: from 0 to SPA** impartido desde Ironhack Madrid | 45 min - mar. 2020

Vídeo completo del webinar [en este enlace](https://www.youtube.com/watch?v=JNTix3tbfLY).

## Instalación

`npm i` o `npm install` sobre el directorio del proyecto permite la instalación de las dependencias.

## Ejecución 

`npm start` sobre el directorio del proyecto lo ejecuta en modo de desarrollo.

## Challenge
- Al renderizar en el navegador la vista con la tabla de alimentos, la consola muestra un error en relación a la `key` que cada elemento resultante de una iteración debe incluir. Investígalo y resuelve el error.
- Crea un componente de clase de nombre `FoodCards.js` dotado de un estado donde almacenar la información de los alimentos.
- En su método `render()`, itera cada alimento del array presente en el estado mediante `.map()`.
- Haz uso de [React Bootstrap](https://react-bootstrap.github.io/) para mostrar [un componente de tipo Card](https://react-bootstrap.github.io/components/cards/) por cada alimento con su imagen, título y descripción.
- Enruta el componente en `App.js` para que sea renderizado bajo la URL http://localhost:3000/fichas
