"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface PayPalButtonProps {
  amount: number
  onSuccess: () => void
}

export default function PayPalButton({ amount, onSuccess }: PayPalButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = () => {
    setIsLoading(true)
    // Simulate PayPal payment process
    setTimeout(() => {
      setIsLoading(false)
      onSuccess()
    }, 2000)
  }

  return (
    <Button onClick={handlePayment} disabled={isLoading}>
      {isLoading ? 'Processing...' : `Pay $${amount} with PayPal`}
    </Button>
  )
}