import Image from "next/image";
import Link from "next/link";

export default function Nao() {
	return (
		<div className="gap-2 bg-zinc-900 h-screen items-center justify-center px-10">
			<h1 className="text-4xl mb-4 flex justify-center text-white pt-12">
				Parabéns! Você aceitou, mas apertou no botão alternativo!
			</h1>
			<p className="text-2xl mb-10 flex justify-center text-white underline">
				Abaixo algumas fotos que eu gosto
			</p>
			<div className="flex h-60 w-full gap-3 pr-12">
				<Image
					src={"/Dona Bianchi 9.jpeg"}
					alt="Sim"
					className="rounded-full"
					width={200}
					height={200}
				/>

				<Image
					src={"/Dona Bianchi 10.jpeg"}
					alt="Sim"
					className="rounded-full"
					width={200}
					height={200}
				/>
				<Image
					src={"/Dona Bianchi 11.jpeg"}
					alt=""
					className="rounded-full"
					width={200}
					height={200}
				/>
				<Image
					src={"/Dona Bianchi 12.jpeg"}
					alt=""
					className="rounded-full"
					width={200}
					height={200}
				/>
				<Image
					src={"/Dona Bianchi 13.jpeg"}
					alt=""
					className="rounded-full"
					width={200}
					height={200}
				/>
				<Image
					src={"/Dona Bianchi 14.jpeg"}
					alt=""
					className="rounded-full"
					width={200}
					height={200}
				/>
				<Image
					src={"/Dona Bianchi 2.jpeg"}
					alt=""
					width={200}
					height={200}
					className="rounded-full"
				/>
			</div>
			<div className="flex h-5 w-5 gap-5 justify-center absolute top-64">
				<Link
					href="/sim"
					className="absolute top-64 left-[600px] text-white text-2xl"
				>
					Sim
				</Link>
				<Link
					href="/"
					className="absolute top-64 left-[750px] text-white text-2xl"
				>
					Home
				</Link>
			</div>
		</div>
	);
}
