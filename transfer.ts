import {
	Connection,
	Keypair,
	LAMPORTS_PER_SOL,
	PublicKey,
	SystemProgram,
	Transaction,
	clusterApiUrl,
	sendAndConfirmTransaction,
} from "@solana/web3.js";
import wallet from "./dev-wallet.json";

const senderKeypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const receiverPublicKey = new PublicKey(
	"BgUBLamtogA1je1FxVqKcko44zS6wiBfLSgPsFynSdGM"
);

const connection = new Connection(clusterApiUrl("devnet"));

async function main() {
	try {
		const transaction = new Transaction().add(
			SystemProgram.transfer({
				fromPubkey: senderKeypair.publicKey,
				toPubkey: receiverPublicKey,
				lamports: LAMPORTS_PER_SOL / 10, // 0.1 SOL
			})
		);
		transaction.recentBlockhash = (
			await connection.getLatestBlockhash("confirmed")
		).blockhash;
		transaction.feePayer = senderKeypair.publicKey;

		const txHash = await sendAndConfirmTransaction(connection, transaction, [
			senderKeypair,
		]);
		console.log(
			`Success! Check out your TX here: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
		);
	} catch (e) {
		console.error(`Oops, something went wrong: ${e}`);
	}
}
main();
