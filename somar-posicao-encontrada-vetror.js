// Leia um vetor de 12 posições e em seguida ler também dois valores X e Y 
// quaisquer correspondentes a duas posições no vetor. Ao final seu programa 
// deverá escrever a soma dos valores encontrados nas respectivas posições X e Y.

const vetor = [1, 2, 3, 45, 67, 7, 78, 8, 9, 12, 3, 23, 46];

const positionX = 12;
const positionY = 10;

function verifyPositionArray() {

    for (let i = 0; i <= vetor.length; i++) {
        if (i == positionY && i == positionY) {
            console.log("Already Position Exist and your sum it is: ", vetor[positionX] + vetor[positionY])
        }
    }
}
verifyPositionArray()





