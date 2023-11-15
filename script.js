// Lista de compras
const compras = {
    Frutas: [],
    Laticinios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

let adicionar = true;

while (adicionar) {
    let adicionarItem = window.prompt("Deseja adicionar um item na lista de compras? Responda com 'sim' ou 'não'.");

    if (adicionarItem.toLowerCase() === 'sim') {
        let comida = window.prompt("Qual comida deseja adicionar?");
        let categoria = window.prompt("Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros)");

        switch (categoria.toLowerCase()) {
            case 'frutas':
                compras.Frutas.push(comida);
                break;
            case 'laticínios':
                compras.Laticinios.push(comida);
                break;
            case 'congelados':
                compras.Congelados.push(comida);
                break;
            case 'doces':
                compras.Doces.push(comida);
                break;
            default:
                compras.Outros.push(comida);
                break;
        }
    } else if (adicionarItem.toLowerCase() === 'não') {
        adicionar = false;
    } else {
        alert("Resposta inválida. Responda com 'sim' ou 'não'.");
    }
}

// Exibir lista de compras
alert("Lista de compras:");
for (const categoria in compras) {
    alert(`    ${categoria}: ${compras[categoria].join(', ')}`);
}
