import ServicesStep from "./Services";
import LocationStep from "./Location";
import DocumentsStep from "./Documents";
import AvailabilityStep from "./Availability";


function StepContent(props: { activeStep: number; onNavigateToServices?: () => void }) {
  const { activeStep, onNavigateToServices, ...rest } = props;

  switch (activeStep) {
    case 1:
      return <LocationStep onNavigateToServices={onNavigateToServices} />;
    case 2:
      return <DocumentsStep />;
    case 3:
      return <AvailabilityStep />;
    default:
      return <ServicesStep {...rest} />;
  }
}

export default StepContent