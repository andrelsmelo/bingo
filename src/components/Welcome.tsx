'use client'
import gameStore from '@/context/Game'

export default function Welcome() {
  const { setStatus } = gameStore()

  const startGame = () => setStatus('playing')

  const showRegras = () => {
    const dialog = document.querySelector('dialog')
    if (dialog) {
      dialog.showModal()
      dialog.querySelector('button')?.addEventListener('click', () => {
        dialog.close()
      })
    }
  }
  return (
    <section className="flex flex-col justify-around items-center gap-4 h-screen">
      <h1 className="text-2xl text-blue-800">Seja bem-vindo ao Bingolike</h1>
      <h2>
        Espero que se divirta, caso tenha duvidas, as regras estão disponíveis
        no icone no Canto superior direito
      </h2>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
        onClick={startGame}
      >
        Começar
      </button>

      <div className="fixed top-0 right-0 p-1">
        <button
          className="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-2 rounded-full"
          onClick={showRegras}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#FFF"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
          </svg>
        </button>
      </div>

      <dialog>
        <h1>Regras</h1>
        <p>
          Para jogar, basta clicar no botão &quot;Começar&quot; e uma cartela
          será sorteada para você.
        </p>
        <p>
          Os numeros são preenchidos automaticamente conforme são sorteados.
        </p>
        <p>Quando completar a cartela, você ganha!</p>
        <p>Se ganhar, você poderá escolher um buff, boa sorte!</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {}}
        >
          Fechar
        </button>
      </dialog>
    </section>
  )
}
