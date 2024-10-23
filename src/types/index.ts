type MaxLengthColumn<T> = [T, T, T, T, T]

interface ICartela {
  B: MaxLengthColumn<number>
  I: MaxLengthColumn<number>
  N: MaxLengthColumn<number | 'X'>
  G: MaxLengthColumn<number>
  O: MaxLengthColumn<number>
}

interface IRanges {
  B: [number, number]
  I: [number, number]
  N: [number, number]
  G: [number, number]
  O: [number, number]
}

type IStatus = 'win' | 'lose' | 'playing' | 'waiting'

export type { MaxLengthColumn, ICartela, IRanges, IStatus }
