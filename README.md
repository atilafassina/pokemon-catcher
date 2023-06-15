# Pokemon Catcher

This is a proof-of-concept example to showcase Next.js' Server Actions into play with the `useTransition` hook.

## How Does It Work

- App will fetch a random pokemon from a list of 1000 existing in the [PokéAPI]().
- The user has 2 actions to perform: Catch or Pass.
  - **Pass** revalidates the url with a new pokémon.
  - **Catch** will attempt to catch, if a random integer is divisible by 3, it will succeed.
- A 6 seconds artificial delay will hold the response pending.
- If succeeds, the pokémon will be pushed into a Xata database and as the URL revalidates, it will show in a list at the bottom of the page.

## Setup

It's important to have a [Xata](https://xata.io) account. Once that is done, the repository can be linked to your own workspace and creates a new database with the following command:

```sh
pnpx @xata.io/cli@latest init --schema=schema.template.json --output=lib/xata.codegen.ts
```

This will start a prompt. If you follow and accept the codegen, it will create a new SDK instance in your `lib/xata.codegen.ts`.

> ℹ️ In case you rather do it manually, create a `.env.local` with your information following the `.env.template` and replace the `.xatarc` file with your own `dataBaseURL`.

## Getting Started

With setup done, you can now run the app:

```sh
pnpm dev
```

By default, it will serve on [http://localhost:3000](http://localhost:3000).
