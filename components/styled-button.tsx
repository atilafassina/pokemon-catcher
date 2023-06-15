import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type ButtonProps = {
  children: React.ReactNode
  isPending?: boolean
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const BASE_STYLES =
  "p-4 py-2 font-semibold text-3xl border rounded-2xl transform transition-transform hover:scale-110"

export const CatchButton = ({
  children,
  isPending,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className={`${BASE_STYLES} ${
        isPending ? "animate-bounce" : "border-emerald-300 text-emerald-300"
      }`}
    >
      {children}
    </button>
  )
}

export const PassButton = ({ children, ...buttonProps }: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className={`${BASE_STYLES} border-red-300 text-red-300`}
    >
      {children}
    </button>
  )
}
