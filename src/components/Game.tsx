'use client'

import gameStore from '@/context/Game'
import { ICartela } from '@/types'
import { checkWinner, sorteaNumero } from '@/utilities'
import toast from 'react-hot-toast'

export default function Game() {
  const {
    status,
    cartela,
    nivel,
    currentRound,
    maxRounds,
    maxLevel,
    sorteados,
    setCurrentRound,
    setSorteados,
    resetSorteados,
    setNivel,
    setStatus,
  } = gameStore()

  const sortearNumeros = () => {
    resetSorteados()
    setStatus('playing')
    setTimeout(() => {
      let novosSorteados: number[] = []

      while (currentRound <= maxRounds) {
        const num = sorteaNumero([...novosSorteados])

        novosSorteados = [...novosSorteados, num]

        setSorteados(novosSorteados)

        if (checkWinner(cartela, novosSorteados)) {
          toast.success('BINGO')
          setStatus('win')
          break
        }

        setCurrentRound(currentRound + 1)
      }

      if (currentRound > maxRounds) {
        toast(() => (
          <div className="p-4 rounded flex flex-col items-center">
            <p className="text-red-500">Você perdeu!</p>
            <p>
              Aqui está seu{' '}
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="animate-pulse text-blue-500"
              >
                prêmio
              </a>
            </p>
          </div>
        ))
        setStatus('lose')
        return
      }

      setCurrentRound(1)
      setNivel(nivel + 1)
    }, 0)
  }

  if (nivel >= maxLevel) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 h-screen">
        <h1 className="text-2xl text-blue-800">Parabéns, você venceu!</h1>
        <p>
          Aqui está seu{' '}
          <a
            href="https://youtu.be/mzzNVYbIQTQ?list=PLLtRhmjWx29DF1jxyfp-3a6Oy3q4qE2bI"
            className="animate-bounce text-blue-500"
          >
            prêmio
          </a>
        </p>
      </section>
    )
  }
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 className="text-2xl text-blue-800">Essa é a sua Cartela</h1>
      <table className="table-auto">
        <thead className="bg-blue-500 text-white">
          <tr className="text-center">
            <th className="w-8">B</th>
            <th className="w-8">I</th>
            <th className="w-8">N</th>
            <th className="w-8">G</th>
            <th className="w-8">O</th>
          </tr>
        </thead>
        <tbody className="bg-blue-100">
          {Object.keys(cartela).map((letra) => (
            <tr key={letra} className="text-center">
              {cartela[letra as keyof ICartela].map((num, index) => (
                <td
                  key={index}
                  className={`p-2 ${sorteados.includes(num as number) || num === 'X' ? 'bg-green-500 text-white' : ''}`}
                >
                  {num === 'X' ? 'X' : num}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {status === 'win' && (
        <>
          <div className="bg-green-100 p-4 rounded max-w-sm">
            <p className="text-green-500">Numeros Sorteados</p>
            <ul className="flex flex-wrap gap-2">
              {sorteados.map((num, index) => (
                <li key={index}>{num}</li>
              ))}
            </ul>
          </div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            onClick={sortearNumeros}
          >
            Próximo nível
          </button>
        </>
      )}
      {nivel === 1 && (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          onClick={sortearNumeros}
        >
          Sortear
        </button>
      )}
    </section>
  )
}
