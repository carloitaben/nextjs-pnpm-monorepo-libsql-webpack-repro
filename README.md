# Weird webpack error

A repro for an error I found with nextjs and libsql when used with pnpm workspaces. Seems like webpack is trying to load the libsql license file 😅

## Steps to reproduce

1. `pnpm i`
2. `pnpm -F db push`
3. `pnpm -F web dev`
4. Open http://localhost:3000/ The nextjs error overlay sould appear

## Expected behavior

[I have a similar setup](https://github.com/carloitaben/artists-together/tree/dev) but with remix w/ vite instead of nextjs. It's an ESM-only environment and works without issues 🤔 Maybe it has something to do with the `tsconfig.json` or `package.json` files of the `db` package? idk

## Actual behavior

webpack fails to compile

```
../../node_modules/.pnpm/@libsql+client@0.4.0-pre.5/node_modules/@libsql/client/LICENSE
Module parse failed: Unexpected token (1:4)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> MIT License
| 
| Copyright (c) 2023 libSQL
```
