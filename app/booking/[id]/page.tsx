'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { destinations } from '@/lib/data';
import BookingForm from '@/components/BookingForm';
import PayPalButton from '@/components/PayPalButton';

export default function BookingPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [bookingComplete, setBookingComplete] = useState(false);
  const destination = destinations.find((d) => d.id === params.id);
  console.log(params);
  if (!destination) {
    return <div>Destination not found</div>;
  }

  const handleBookingSubmit = (date: string) => {
    // Simulate API call to create booking
    console.log(`Booking created for ${destination.name} on ${date}`);
    setBookingComplete(true);
  };

  const handlePaymentSuccess = () => {
    // Simulate API call to confirm payment
    console.log('Payment successful');
    router.push('/confirmation');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Book Your Trip to {destination.name}
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-xl mb-4">Price: ${destination.price}</p>
        {!bookingComplete ? (
          <BookingForm onSubmit={handleBookingSubmit} />
        ) : (
          <div>
            <p className="mb-4">Great! Now let's proceed with the payment.</p>
            <PayPalButton
              amount={destination.price}
              onSuccess={handlePaymentSuccess}
            />
          </div>
        )}
      </div>
    </div>
  );
}
