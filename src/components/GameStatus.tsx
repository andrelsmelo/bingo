'use client'

import gameStore from '@/context/Game'

export default function GameStatus() {
  const { status, nivel, maxRounds } = gameStore()
  return (
    <section className="fixed bottom-0 left-0 right-0 bg-white p-4 w-fit">
      <h2 className="text-xl">
        Nível: {nivel} / {maxRounds}
      </h2>
      <h2 className="text-xl">
        Status:{' '}
        <span
          className={
            status === 'win'
              ? 'text-green-500'
              : status === 'lose'
                ? 'text-red-500'
                : 'text-blue-500'
          }
        >
          {status}
        </span>
      </h2>
    </section>
  )
}
