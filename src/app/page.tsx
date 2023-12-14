import Actors from "@/components/Actors";
import Hero from "@/components/Hero";
import Movies from "@/components/Movies";
import TV from "@/components/TV";

export default function Home() {
  return (
    <main>
      <Hero />
      <Movies />
      <TV />
      <Actors />
    </main>
  )
}
