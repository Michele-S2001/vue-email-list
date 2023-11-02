# Generare 10 indirizzi email e stamparli in pagina

- chiamare 10 volte l'api per farci generare 10 email random
  - creo una funzione con un ciclo che effettua le chiamate al server
  
- i valori generati bisogna immagazzinarli in un array
  - all'interno della funzione vengono gradualmente pushate le singole email generate in un array

- dopo aver generato tutte le email stamparle in una lista sul DOM
  - queste email vengono poi stampate sul DOM con una direttiva V-FOR basatasi sull'array