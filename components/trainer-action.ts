"use server"

import { revalidatePath } from "next/cache"
import { getRandomNumber, logger, sleep } from "~/lib/helpers"
import { getXataClient } from "~/lib/xata.codegen"

const xata = getXataClient()

export const trainerAction = async (
  { id, name }: Record<"name" | "id", string>,
  action: string
) => {
  switch (action) {
    case "pass": {
      console.log("passing")
      revalidatePath("/")

      break
    }
    case "catch": {
      logger.success("trying to catch")
      //   await sleep()

      if (getRandomNumber() % 2 === 0) {
        logger.success("caught!")

        await xata.db.pokemons.create({
          pkmName: name,
          pkmId: id,
        })

        revalidatePath("/")
      } else {
        logger.error("fail!")
      }

      break
    }
  }
}
