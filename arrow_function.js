// sem arrow functions o this pega o escopo da funcion e não da classe
class Usuario {
    nome = 'Thiago';
    empresa = 'brd';
    
    // define o metodo como variavel, sendo possivel usar this para a classe
    mostrarNome = () => {
        console.log(this.nome);
        console.log(this.empresa);
    }
}

// multiplicando array inteira por 2
let array = [1, 2, 3, 4, 5, 6];

// quando returno for de apenas uma linha, pode indicar o que vai retornar logo depois da arrow
array = array
    .map(item => item * 2)
    .filter(item => item < 5)

// exemplo com API retorno apenas uma linha
api.get('/users/thiagobruning').then(response => tratarResposta(response));

// retornando um jsx(html) no react
// exemplo com retorno de mais de uma linha
const retornaJSX = () => (
    <div class="container">
        <h1> Hello World </h1>
    </div>
);
// exemplo de retorno de uma linha com objeto
const retornaObjeto = () => ({ a: 2, b: 3 });