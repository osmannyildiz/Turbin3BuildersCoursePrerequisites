import { Keypair } from "@solana/web3.js";

let kp = Keypair.generate();
console.log("You've generated a new Solana wallet!");
console.log(`- Public key: ${kp.publicKey.toBase58()}`);
console.log(`- Secret key: [${kp.secretKey}]`);
