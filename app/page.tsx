import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Topics } from "@/components/topics"
import { Concept } from "@/components/concept"
import { Greeting } from "@/components/greeting"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Topics />
      <Concept />
      <Greeting />
      <Services />
      <Footer />
    </main>
  )
}
