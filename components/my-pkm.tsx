import Image from "next/image"
import { getXataClient } from "~/lib/xata.codegen"

const xata = getXataClient()
export default async function MyPkm() {
  const { records: myPkms } = await xata.db.pokemons.getPaginated({
    pagination: {
      size: 100,
    },
  })

  return (
    <ul className="w-full overflow-x-scroll flex flex-row gap-x-10">
      {myPkms.map(({ id, pkmName, pkmImg }) => (
        <li key={id}>
          <span className="whitespace-nowrap">{pkmName}</span>
          <Image
            src={pkmImg ?? ""}
            alt={pkmName ?? ""}
            width={200}
            height={200}
          />
        </li>
      ))}
    </ul>
  )
}
