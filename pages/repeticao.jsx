import Titulo from './components/Titulo';
export default function Repeticao() {

    const listaAprovados = [
        'João',
        'Maria',
        'Carolina',
        'Flavio',
        'Amanda',
        'Lucas',
    ]

    function renderizarLista() {
        return listaAprovados.map((nome, i) =>
            <li key={i}>
                {nome}
            </li>
        )
    }

    return (
        <ol>
            <Titulo titulo="Listagem" />
            {renderizarLista()}
        </ol>
    );
}


// function renderizarLista() {
//     const itens = []

//     for (let i = 0; i < listaAprovados.length; i++) {
//         itens.push(<li key={i}>{listaAprovados[i]}</li>
//         )
//     }
//     return itens
// }