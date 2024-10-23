'use client'
import Game from '@/components/Game'
import GameStatus from '@/components/GameStatus'
import Welcome from '@/components/Welcome'
import gameStore from '@/context/Game'

export default function Home() {
  const { status } = gameStore()
  return (
    <main>
      {status === 'waiting' ? (
        <Welcome />
      ) : (
        <>
          <Game />
          <GameStatus />
        </>
      )}
    </main>
  )
}
