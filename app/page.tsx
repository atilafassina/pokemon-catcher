import Image from "next/image"
import { Trainer } from "~/components/trainer"
import { TOTAL_POKEMONS, getRandomNumber } from "~/lib/helpers"

type PkmApiList = {
  results: Record<"name" | "url", string>[]
}
type Pokemon = {
  name: string
  id: number
  stats: {}
  sprites: {
    front_default: string
  }
}

export default async function Home() {
  const { results: list }: PkmApiList = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`
  ).then((r) => r.json())
  const index = getRandomNumber(TOTAL_POKEMONS)
  const pkm: Pokemon = await fetch(list[index].url).then((r) => r.json())

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <div>
        <p>{pkm.name}</p>
        <Image
          priority
          src={pkm.sprites.front_default}
          alt={pkm.name}
          width={200}
          height={200}
        />
      </div>
      <Trainer id={String(pkm.id)} name={pkm.name} />
    </main>
  )
}
