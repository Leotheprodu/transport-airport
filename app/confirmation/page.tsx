import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Booking Confirmed!</h1>
      <p className="text-xl mb-8">Thank you for booking your trip with us. We look forward to seeing you in Costa Rica!</p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}