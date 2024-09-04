
                                 // es1
// TypeScript (TS) è un linguaggio di programmazione open-source  che estende JavaScript con la possibilità di aggiungere tipi di dati statici alle variabili, funzioni e oggetti.

//erve a migliorare la qualità e la sicurezza del codice JavaScript, riducendo sopratutto gli errori

// risolve il problema della mancanza di tipizzazione statica in JavaScript, che può portare a errori risolve il problema della mancanza di tipizzazione statica in JavaScript, che può portare a errori nel codice

// La principale differenza tra TypeScript e JavaScript è che TypeScript può essere compilato in JavaScript, ma non viceversa:
// TypeScript

let nome: string = 'Mario';
console.log(nome);

// JavaScript
let nome2 = 'Mario';
console.log(nome2);

// 2. Il compilatore TS
// Il compilatore TypeScript (tsc) è un tool che converte il codice TypeScript in JavaScript. È necessario perché il codice TypeScript non può essere eseguito direttamente dai browser o dai motori JavaScript:

// 3. La Type Inference

// La Type Inference è una funzionalità di TypeScript che consente di dedurre i tipi di dati delle variabili e delle funzioni senza la necessità di specificarli esplicitamente:

// Type Inference
let nome1 = 'Mario';
console.log(nome1); // string

// 4. Il tipo ‘any’

// Il tipo ‘any’ è un tipo di dati speciale in TypeScript che  ci permette di cambiare il valore delle variabnile con qualsiasi valore senza problemi, ma non va fatto perche senno l'editor non ci da una mano negli errori
let variabile: any = 'Mario';
variabile = 42;

// 5. Il tipo Union

// Il tipo Union è un tipo di dati che rappresenta una combinazione di due o più tipi di dati.
let test: string | number = 50;
test = "Pietro";
test = 100;
let test2: string | string[] | undefined = "pietro";

// 6. Le Interfaces in TS

// Le Interfaces in TypeScript sono utilizzate per definire la struttura di un oggetto o di una funzione.

interface People {
    firstName: string; // obbligatorio
    lastName: string; // obbligatorio
    modules: string[]; // obbligatorio
    region?: string; // opzionale
  }
  
  let people1: People = {
    firstName: 'Mario',
    lastName: 'Rossi',
    modules: ['TS', 'JS'],
  };

  people1.region = "italia" // con il ? la variabile regione è opzionale e si può aggiungere successivamente

  console.log(people1);

//   inoltre:
interface PeopleCars {
    name: string;
    year: number;
    carPlate: string;
    color: string;
  }
  
  interface PeopleCarsPremium extends PeopleCars {
    model: string;
    km: number; 
    horsepower: number;
  }
  
  const persona1: PeopleCarsPremium = {
    name: 'Mario Rossi',
    year: 1990,
    carPlate: 'AB123CD',
    color: 'black',
    model: "Ferrari 488 GTB",
    km: 5000,
    horsepower: 170
  };
  
  console.log(persona1);
//   8. I generics
// I generics in TypeScript sono utilizzati per creare funzioni e classi che possono lavorare con più tipi di dati. quindi UN GENERIC è un tipo passato come paramentro per un interfaccia, nella
// definizione di interface si può definire un generic per il tipo di dato che si vuole passare

 function identita<T>(arg: T): T {    //argomento di tipo T
    return arg;
  }
  
  console.log(identita<string>('Hello')); 
  console.log(identita<number>(42)); 
  console.log(identita<boolean>(true)); 