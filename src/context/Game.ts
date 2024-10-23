import { ICartela, IStatus } from '@/types'
import { generateCartela } from '@/utilities'
import { create } from 'zustand'

type State = {
  cartela: ICartela
  status: IStatus
  nivel: number
    maxLevel: number
  currentRound: number
  maxRounds: number
  possibleNumbers: number[]
  sorteados: number[]
}

type Action = {
  setCartela: (cartela: State['cartela']) => void
  setStatus: (status: State['status']) => void
  setNivel: (nivel: State['nivel']) => void
  setMaxRounds: (maxRounds: State['maxRounds']) => void
  setCurrentRound: (currentRound: State['currentRound']) => void
  setSorteados: (sorteados: State['sorteados']) => void
  resetCurrentRound: () => void
  resetSorteados: () => void
}

const initialState: State = {
  cartela: generateCartela(),
  status: 'waiting',
  nivel: 1,
  maxLevel: 10,
  maxRounds: 10,
  currentRound: 1,
  possibleNumbers: Array.from({ length: 75 }, (_, i) => i + 1),
  sorteados: [],
}

const gameStore = create<State & Action>((set) => ({
  ...initialState,
  setCartela: (cartela) => set(() => ({ cartela })),
  setStatus: (status) => set(() => ({ status })),
  setNivel: (nivel) => set(() => ({ nivel })),
  setMaxRounds: (maxRounds) => set(() => ({ maxRounds })),
  setCurrentRound: (currentRound) => set(() => ({ currentRound })),
  setSorteados: (sorteados) => set(() => ({ sorteados })),
  resetCurrentRound: () => set(() => ({ currentRound: 1 })),
  resetSorteados: () => set(() => ({ sorteados: [] })),
}))

export default gameStore
