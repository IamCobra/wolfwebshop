import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center"
    >
      <Image src={"/assets/wolfbackground.jpg"} alt="hej" fill={true} className="absolute top-0 left-0 -z-10 blur-sm opacity-50" />
      <h1 className="text-5xl font-bold text-white">Welcome to My Webshop</h1>
      <p className="mt-4 text-xl text-white">
        Your one-stop from Berzloy clothing. 🐺
      </p>
    </main>
  );
}
