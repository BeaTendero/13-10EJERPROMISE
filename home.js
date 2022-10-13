
// correrCaballo = (caballo) => 

// new Promise((resolve) => setTimeout(() => {resolve(caballo)}, 

// Math.floor(5000 + Math.random())))



// let promise = Promise.race(iterable);

// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
//   ]).then(alert); // 1

//   La primera promesa fue la más rápida, por lo que se vuelve resultado. En cuanto una promesa responde,
//    “gana la carrera”, y todos los resultados o errores posteriores son ignorados.

// Ejercicio de caballos
// Hacer funcion correr(nombreCaballo1, nombreCaballo2)

// let totalCaballos = parseInt(prompt('Introduce el numero de caballos que van a correr'))

// let arrayCaballos = []
// for(let i = 0; i<totalCaballos; i++){
//     let caballo = 'caballo' + i;
//     arrayCaballos.push(caballo);
// }

// const correrCaballo = (caballo) => new Promise((resolve) => setTimeout(() => {resolve(caballo)}, 2000))
// let arrayPromesas = arrayCaballos.map(correrCaballo)
// Promise.race(arrayPromesas)
//     .then(resultado => console.log(resultado))
// Promise.all(arrayPromesas)
// .then(resultado => console.log(resultado))

//////////////////       VERSIÓN DAVID     ///////////////////////////////

// const horses = ['titan', 'analfabeto', 'perdigon','silver'];

// const corredor = (caballo) => new promise((res,rej) => {

//     const tiempo = 5000 + matchMedia.random () * 5000;

//     setTimeout(() => res (horse),time);

// });

// const ridersPromise = horses.map ((horse) => rider (horse));

// Promise.race (ridersPromise).then (winner => console.log ('ha ganado' , winner));
// Promise.all (ridersPromise).then (()=>console.log('la carrera ha terminado'));

/////////////////////////////////////////////////////////////////////////////////////


// const horses = ['titan', 'analfabeto', 'perdigon', 'silver'];
// const rider = (caballo) => new Promise((res, rej) => {
//     const tiempo = 5000 + Math.random() * 5000;
//     setTimeout(() => res(caballo), tiempo);
// });


// const ridersPromise = horses.map((caballo) => rider(caballo));

// Promise.race(ridersPromise).then(winner => console.log('ha ganado', winner));
// Promise.all(ridersPromise).then(() => console.log('la carrera ha terminado'));


 ///////////////////////////   MANERA ABREBIADA  ///////////////////////////


 
//  const horses = ['titan', 'analfabeto', 'perdigon', 'silver', 'albaricoque'];
//  const results = [];
 
//  const rider = horse => new Promise((res, rej) => {
//      const time = 5000 + Math.random() * 5000;
//      setTimeout(() => res({ horse, time}), time);
//  });
 
 
//  const ridersPromise = horses.map(rider);
//  ridersPromise.forEach(riderPromise => 
//      riderPromise.then(({ horse, time}) => {
//          console.log(`${horse} ha terminado en ${time}`);
//          results.push({ horse, time});
//      }
//  ));
 
//  Promise.race(ridersPromise).then(({ horse, time})  => console.log('ha ganado', horse, 'en', time));
//  Promise.all(ridersPromise).then(() => console.log('la carrera ha terminado con estos resultados', results));


 const sumaUno = numero => new Promise((resolve) => resolve(numero + 1));
const sumaUno = async numero => numero + 1;