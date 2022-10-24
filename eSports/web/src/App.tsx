import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'

import { GameBanner } from './components/GameBanner'
import CreateAdBanner from './components/CreateAdBanner'
import CreateAdModal from './components/Form/CreateAdModal'

import './styles/main.css'

import logoImg from './assets/logo-nlw.svg'
import { Slider, SliderProps, Slide } from './components/commons/Slider'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const settings: SliderProps = {
    spaceBetween: 20,
    slidesPerView: 6,
    navigation: true,
    draggable: true,
    loop: true
  }

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className="max-w-[1344px]  mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className=" text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <Slider settings={settings}>
          {games.map(game => (
            <Slide>
              <GameBanner
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
              />
            </Slide>
          ))}
        </Slider>
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
