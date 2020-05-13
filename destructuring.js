const endereco = {
    rua: 'Avenida Marcos Konder',
    numero: 842,
    uf_cidade: {
        uf: 'SC',
        cidade: 'Itajaí'
    }
};

// capturando apenas rua e numero do objeto
const { rua, numero } = endereco;

//capturando objeto dentro do objeto
const { uf_cidade: { uf, cidade } } = endereco;


// desctructuting com arrays
const array = [1, 2, 3];

const [a, b, c] = array;

console.log(a); //1
console.log(b); //2
console.log(c); //3 