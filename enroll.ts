import { AnchorProvider, Program, Wallet } from "@coral-xyz/anchor";
import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { WbaPrereq, WbaPrereqIDL } from "./programs/wba_prereq";
import wallet from "./wallets/dev-wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection(clusterApiUrl("devnet"));

const githubUsername = Buffer.from("osmannyildiz", "utf8");

const provider = new AnchorProvider(connection, new Wallet(keypair), {
	commitment: "confirmed",
});

const program: Program<WbaPrereq> = new Program(WbaPrereqIDL, provider);

const enrollmentSeeds = [Buffer.from("prereq"), keypair.publicKey.toBuffer()];
const [enrollmentKey, _bump] = PublicKey.findProgramAddressSync(
	enrollmentSeeds,
	program.programId
);

async function main() {
	try {
		const txHash = await program.methods
			.complete(githubUsername)
			.accounts({
				signer: keypair.publicKey,
			})
			.signers([keypair])
			.rpc();
		console.log(
			`Success! Check out your TX here: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
		);
	} catch (e) {
		console.error(`Oops, something went wrong: ${e}`);
	}
}
main();
