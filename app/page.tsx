import Hero from "@/components/hero";
import SearchInput from "@/components/search";
export default function Home() {
  return (
    <main>
      <Hero/>
      <div className="flex justify-center ">
          <SearchInput/>
      </div>
    </main>
  )
}
