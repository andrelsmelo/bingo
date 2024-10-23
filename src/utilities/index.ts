import { ICartela, IRanges, MaxLengthColumn } from '@/types'

function generateCartela(): ICartela {
  const ranges: IRanges = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75],
  }

  const generateNumbers = (min: number, max: number) => {
    const numbers = new Set<number>()
    while (numbers.size < 5) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min
      numbers.add(num)
    }
    return Array.from(numbers)
  }

  const shuffle = (array: number[]) => array.sort(() => Math.random() - 0.5)

  return {
    B: shuffle(
      generateNumbers(ranges.B[0], ranges.B[1]),
    ) as MaxLengthColumn<number>,
    I: shuffle(
      generateNumbers(ranges.I[0], ranges.I[1]),
    ) as MaxLengthColumn<number>,
    N: [
      ...shuffle(generateNumbers(ranges.N[0], ranges.N[1])).slice(0, 2),
      'X',
      ...shuffle(generateNumbers(ranges.N[0], ranges.N[1])).slice(2, 4),
    ] as MaxLengthColumn<number | 'X'>,
    G: shuffle(
      generateNumbers(ranges.G[0], ranges.G[1]),
    ) as MaxLengthColumn<number>,
    O: shuffle(
      generateNumbers(ranges.O[0], ranges.O[1]),
    ) as MaxLengthColumn<number>,
  }
}

function isSubset(array: (number | 'X')[], sorteados: number[]): boolean {
  return array.every((num) => num === 'X' || sorteados.includes(num as number))
}

function checkWinner(
  cartela: ICartela,
  sorteados: number[],
):
  | {
      status: boolean
      type: 'linha' | 'coluna' | 'canto'
    }
  | false {
  const { B, I, N, G, O } = cartela

  const linhas = [B, I, N, G, O]
  for (const linha of linhas) {
    if (isSubset(linha, sorteados)) {
      return {
        status: true,
        type: 'linha',
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    const coluna = [B[i], I[i], N[i], G[i], O[i]]
    if (isSubset(coluna, sorteados)) {
      return {
        status: true,
        type: 'coluna',
      }
    }
  }

  const cantos = [B[0], B[4], O[0], O[4]]
  if (isSubset(cantos, sorteados)) {
    return {
      status: true,
      type: 'canto',
    }
  }

  return false
}

function sorteaNumero(sorteados: number[]): number {
  let num
  do {
    num = Math.floor(Math.random() * 75) + 1
  } while (sorteados.includes(num))
  sorteados.push(num)
  return num
}

export { generateCartela, checkWinner, sorteaNumero }
