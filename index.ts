// 1

// TypeScript è un linguaggio di programmazione sviluppato da Microsoft che si basa su JavaScript.

// TypeScript è un "superset" di JavaScript: qualsiasi codice JavaScript è anche un codice valido in TypeScript, ma TypeScript aggiunge alcune caratteristiche extra che JavaScript non ha.

// TypeScript è fortemente tipizzato ciò permette di definire i tipi di variabili, funzioni e oggetti.

// Il problema principale che TypeScript risolve è la mancanza di controllo sui tipi di dati in JavaScript. 

// In TypeScript puoi specificare il tipo delle variabili, mentre in JavaScript i tipi sono dinamici.
// TypeScript non può essere eseguito direttamente nel browser; deve prima essere compilato in JavaScript. 

// 2

// Il compilatore TypeScript (tsc) è necessario perché TypeScript non può essere eseguito direttamente dai browser. I browser eseguono solo codice JavaScript puro.

// comando installazione npm install -g typescript
// comando compilazione tsc index.ts
// comando compilazione continua tsc app.ts --watch
// comando configurazione tsc --init

// 3

// La Type Inference è una caratteristica di TypeScript che consente al compilatore di dedurre automaticamente il tipo di una variabile o funzione.
// let valore: string = "Mario";  
// let nome = "Luigi";        TypeScript autodeduce che nome è una stringa


// 4

// Il tipo any in TypeScript è un tipo che può contenere qualsiasi valore e di conseguenza il meno sicuro. 
// let valore: any = "Mario";
// valore = 30;           Valido
// valore = true;         Valido


// 5

// Il tipo Union in TypeScript consente di definire una variabile, un parametro o un valore che può appartenere a più di un tipo.
// let valore: string | number;
// valore = "Mario";   Valido
// valore = 30;       Valido
// valore = true;      Errore

// 6

// Le Interfaces in TypeScript servono per definire la struttura di un oggetto.
// interface Person {
   
//     firstName: string 
//     lastName?: string 
//     features: string[] 
  
//   }

// 7

// I Generics in TypeScript  consentono di creare componenti riutilizzabili che funzionano con diversi tipi di dati mantenendo comunque il controllo del tipo. 