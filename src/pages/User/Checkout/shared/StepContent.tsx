import BookingLocationStep from "./BookingLocationStep";
import DateTimeStep from "./DateTimeStep";
import PaymentStep from "./PaymentStep";

interface StepContentProps {
  activeStep: number;
  onNavigateToServices?: () => void;
  bookingType: "immediate" | "scheduled";
  onBookingTypeChange: (type: "immediate" | "scheduled") => void;
  paymentType: "cash" | "card" | null;
  onPaymentTypeChange: (type: "cash" | "card" | null) => void;
}

function StepContent({ 
  activeStep, 
  bookingType,
  onBookingTypeChange,
  paymentType,
  onPaymentTypeChange
}: StepContentProps) {
  switch (activeStep) {
    case 1:
      return <DateTimeStep bookingType={bookingType} onBookingTypeChange={onBookingTypeChange} />;
    case 2:
      return <PaymentStep paymentType={paymentType} onPaymentTypeChange={onPaymentTypeChange} />;
    default:
      return <BookingLocationStep />;
  }
}

export default StepContent;