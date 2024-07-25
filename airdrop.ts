import {
	Connection,
	Keypair,
	LAMPORTS_PER_SOL,
	clusterApiUrl,
} from "@solana/web3.js";
import wallet from "./wallets/dev-wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection(clusterApiUrl("devnet"));

async function main() {
	try {
		const txHash = await connection.requestAirdrop(
			keypair.publicKey,
			2 * LAMPORTS_PER_SOL
		);
		console.log(
			`Success! Check out your TX here: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
		);
	} catch (e) {
		console.error(`Oops, something went wrong: ${e}`);
	}
}
main();
