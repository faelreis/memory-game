const imagens = [
    'first-img',
    'second-img',
    'third-img',
    'fourth-img'
];

const cartasUnicas = imagens.map((imagem, idDoPar) => ({
    idDoPar,
    imagem,
}));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
    (carta, id) => ({
        ...carta,
        id,
    }))