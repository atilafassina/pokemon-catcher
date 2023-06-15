"use client"

import { useTransition } from "react"
import { trainerAction } from "./trainer-action"
import { CatchButton, PassButton } from "./styled-button"

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
      className="flex gap-x-5"
    >
      <PassButton
        type="submit"
        name="actionButton"
        value="pass"
        disabled={isPending}
      >
        Pass
      </PassButton>
      <CatchButton
        name="actionButton"
        type="submit"
        value="catch"
        isPending={isPending}
        disabled={isPending}
      >
        Catch!
      </CatchButton>
    </form>
  )
}
