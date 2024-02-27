export function mergeArrays(array1: number[], array2: number[]) {
  const resultado = []
  const tamanho = Math.max(array1.length, array2.length)

  for (let i = 0; i < tamanho; i++) {
    if (i < array1.length) {
      resultado.push(array1[i])
    }
    if (i < array2.length) {
      resultado.push(array2[i])
    }
  }
  return resultado
}
