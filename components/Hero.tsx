import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
      <Image
        src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Costa Rica landscape"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Discover Costa Rica</h1>
        <p className="text-xl md:text-2xl mb-8 text-center">Book your transportation from Juan Santamaría International Airport</p>
        <Button asChild size="lg">
          <a href="#destinations">Explore Destinations</a>
        </Button>
      </div>
    </div>
  )
}