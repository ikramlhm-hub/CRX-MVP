import Hero from "../components/Hero";
import Spotlight from "../components/Spotlight";
import ValueProposition from "../components/ValueProposition";
import Articles from "../components/Articles";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Spotlight />
      <Articles />
      <ValueProposition />
      <Newsletter />
    </main>
  );
}
