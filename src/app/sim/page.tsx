import Image from "next/image";
import Link from "next/link";

export default function Sim() {
	return (
		<div className="gap-2 bg-zinc-900 h-screen items-center justify-center px-5">
			<h1 className="text-4xl mb-4 flex justify-center text-white pt-12">
				Parabéns! Você fez a escolha correta!
			</h1>
			<p className="text-2xl mb-4 flex justify-center text-white underline">
				Abaixo algumas fotos que eu gosto
			</p>
			<div className="flex h-60 w-full gap-3">
				<Image
					src={"/Dona_Bianchi.jpeg"}
					alt="Sim"
					className="rounded-full"
					width={200}
					height={200}
				/>

				<Image
					src={"/Dona Bianchi 2.jpeg"}
					alt="Sim"
					className="rounded-full"
					width={200}
					height={200}
				/>
				<Image
					src={"/Dona Bianchi 3.jpeg"}
					alt=""
					className="rounded-full"
					width={200}
					height={200}
				/>
				<Image
					src="/Dona Bianchi 4.jpeg"
					alt=""
					className="rounded-full"
					width={200}
					height={200}
				/>
				<Image
					src="/Dona Bianchi 5.jpeg"
					alt=""
					className="rounded-full"
					width={200}
					height={200}
				/>
				<Image
					src={"/Dona Bianchi 6.jpeg"}
					alt=""
					className="rounded-full"
					width={200}
					height={200}
				/>
				<Image
					src={"/Dona Bianchi 7.jpeg"}
					alt=""
					className="rounded-full"
					width={200}
					height={200}
				/>
				<Image
					src={"/Dona Bianchi 8.jpeg"}
					alt=""
					className="rounded-full"
					width={200}
					height={200}
				/>
			</div>
			<div className="flex h-5 w-5 gap-5 justify-center absolute top-64">
				<Link
					href="/"
					className="absolute top-64 left-[600px] text-white text-2xl"
				>
					Home
				</Link>
				<Link
					href="/nao"
					className="absolute top-64 left-[900px] text-white text-2xl"
				>
					Não
				</Link>
			</div>
		</div>
	);
}
