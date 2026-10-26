import { ProcessStep } from "@/components/sections/ProcessStep";
import { processStages } from "@/content/process";

/** Five-stage process: horizontal on desktop, vertical sequence on mobile. */
export function ProcessOverview() {
  return (
    <ol className="grid lg:grid-cols-5" aria-label="Etapas del proceso">
      {processStages.map((stage, index) => (
        <ProcessStep key={stage.number} stage={stage} isLast={index === processStages.length - 1} />
      ))}
    </ol>
  );
}
