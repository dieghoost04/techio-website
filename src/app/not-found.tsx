import type { Metadata } from "next";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="container-site flex flex-col items-start py-24 md:py-36">
      <p className="text-eyebrow text-muted">Error 404</p>
      <h1 className="text-h1 mt-5 max-w-2xl text-ink">No encontramos esta página.</h1>
      <p className="text-lead mt-6 max-w-xl text-muted">
        Es posible que la dirección haya cambiado o que no exista. Te ayudamos a encontrar lo que buscas.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <PrimaryButton href="/">Ir al inicio</PrimaryButton>
        <SecondaryButton href="/soluciones" withArrow={false}>
          Ver soluciones
        </SecondaryButton>
      </div>
    </section>
  );
}
