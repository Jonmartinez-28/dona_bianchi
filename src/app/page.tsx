import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-zinc-900 h-screen flex items-center justify-center">
			<h1 className="text-3xl text-white absolute top-44">
				Quer namorar comigo?
			</h1>
			<div className="flex h-5 w-5 gap-5 justify-center absolute top-64">
				<Link
					href="/sim"
					className="text-white text-2xl"
				>
					Sim
				</Link>
				<Link
					href="/nao"
					className="text-white text-2xl"
				>
					Não
				</Link>
			</div>
		</div>
	);
}
