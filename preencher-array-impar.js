// Declare um vetor de 10 posições e o preencha com os 10 primeiros números impares e o escreva.

const vetor = []

function preencheValue() {
    for (let i = 0; i <= 22; i++) {
        if (i % 2 !== 0) {
            vetor[i] = i;
        }
    }
    console.table(vetor)
}
preencheValue()
