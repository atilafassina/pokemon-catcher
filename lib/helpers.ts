import "server-only"
import chalk from "chalk"
export const TOTAL_POKEMONS = 251

export function getRandomNumber(int: number = TOTAL_POKEMONS) {
  return Math.floor(Math.random() * (int + 1))
}

export function sleep(s: number = 5) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000))
}

export const logger = {
  info: (m: string) => {
    console.log(chalk.bold.bgBlue(`\n\n ${m} \n\n`))
  },
  error: (m: string) => {
    console.log(chalk.bold.bgRed(`\n ${m} \n`))
  },
  success: (m: string) => {
    console.log(chalk.bold.bgGreen(`\n ${m} \n`))
  },
}
