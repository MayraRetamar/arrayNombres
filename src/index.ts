let dimensionArreglo: number = Number(prompt("Dimension del arreglo"));

let nombresPersonas: string[] = new Array(dimensionArreglo);
let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  nombresPersonas[indice] = prompt("Ingrese el nombre en el lugar " + indice);
}
for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    "El nombre en la posición " + indice + " es " + nombresPersonas[indice]
  );
}
