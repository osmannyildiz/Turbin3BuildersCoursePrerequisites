# Turbin3 Builders Course Prerequisites (TypeScript)

> Here is my proof of work: https://explorer.solana.com/tx/3SC4n2Fw5FggcgrAF5qZor2W3u9MNHNuDAwDcHqt2XRZ4Xotv68qerEWvEivLkGdJC9Uf23vNJ91Bao3dfd217mh?cluster=devnet

This repo demonstrates some basic operations performed using Solana's JS libraries.

## Installation

```sh
npm i
```

## Usage

### Generate Keypair

This will create a new keypair, and print its public and secret keys.

```sh
npm run keygen
```

Create the file `wallets/dev-wallet.json` and paste the secret key (starting with `[`, ending with `]`, both included) inside the file.

### Get Devnet SOL

This will request 2 devnet SOLs into your wallet.

```sh
npm run airdrop
```

### Transfer Funds

First, generate a new keypair for this demo by running `npm run keygen`. Copy the public key and replace it with the one in `transfer.ts` line 15.

This will send 0.1 SOL from the previous account to the new account.

```sh
npm run transfer
```

In Solana, fund transfers are done via the System Program. The sender needs to sign the transaction, which requires their secret key. This way, we can ensure that nobody can transfer someone else's funds (as long as they keep their secret key "secret").

### Interact with the `wba_prereq` Program

In order to be eligible for the Turbin3 Builders Course, we are required to interact with a program that's already deployed on the devnet. For this, we need the program's IDL (Interface Definition Language), which contains all the necessary information to use the program.

This will call the `complete` method of the on-chain program, giving my GitHub username as an argument.

```sh
npm run enroll
```

## My Transactions

- Getting devnet SOL: https://explorer.solana.com/tx/3BKRUTYPAGSLbS7ELdabVQyFf52Y1FTiEkVwZuKWSaJjgEA4bXE8tk7Y6tgEEzeeRXHUW3f93xqDKAivq6Lhyr4R?cluster=devnet
- Transferring funds: https://explorer.solana.com/tx/zRBfvKBGNazD31FoTR9FGKV7GW36LDr2YB4dVXZCZTqzZy4vkWRRHdHVNSonS3LqeLbvW9NZXNtz4rHw7r1SuMa?cluster=devnet
- Interacting with the program: https://explorer.solana.com/tx/3SC4n2Fw5FggcgrAF5qZor2W3u9MNHNuDAwDcHqt2XRZ4Xotv68qerEWvEivLkGdJC9Uf23vNJ91Bao3dfd217mh?cluster=devnet
