"use client"

import { useTransition } from "react"
import { trainerAction } from "./trainer-action"

export function Trainer({
  id,
  name,
  image,
}: Record<"id" | "name" | "image", string>) {
  const [isPending, startTransition] = useTransition()

  return (
    <form
      action={async (formData) =>
        startTransition(() => {
          trainerAction(
            { id, name, image },
            formData.get("actionButton") as string
          )
        })
      }
    >
      <button type="submit" name="actionButton" value="pass">
        Pass
      </button>
      <button
        name="actionButton"
        type="submit"
        value="catch"
        className={`${
          isPending ? "animate-bounce" : ""
        } -4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm`}
      >
        Catch!
      </button>
    </form>
  )
}
