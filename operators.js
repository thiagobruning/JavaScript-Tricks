// REST OPERATOR
const array = [1, 2, 3, 4, 5];

//rest opetador pega o resto
const [a, b, ...c] = array;

console.log(a); //1
console.log(b); //1
console.log(c); // [3, 4, 5]


// SPREAD OPERATOR
const css = { fontSize: 12, color: '#FFF' };

// copiou tudo de css e jogou no tituloCss
const tituloCss = { 
    fontweight: 'bold', 
    ...css,
    fontSize: 20, // atualizou o valor que veio para 20
};

//SPREAD WITH FUNCTIONS
function soma(...params)
{
    return Math.sum(params)
}
soma(1, 2, 3, 4, 5, 6);

// arrow functon with spread operators
soma = (...params) => Math.sum(params) 
soma(1, 2, 3, 4, 5, 6);
