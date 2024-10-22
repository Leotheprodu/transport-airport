import Hero from '@/components/Hero'
import DestinationList from '@/components/DestinationList'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <DestinationList />
    </div>
  )
}