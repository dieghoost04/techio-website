import { ArrowUpRight } from "lucide-react";

/** Deterministic 7×7 pattern evoking a QR code. Purely decorative, not scannable. */
const qrPattern = [
  "1110111",
  "1010101",
  "1110111",
  "0001000",
  "1101011",
  "0110100",
  "1011101",
];

function Bar({ className }: { className: string }) {
  return <span className={`block h-2 rounded-full ${className}`} />;
}

/**
 * Abstract, interface-inspired composition of the three solution families
 * (menu, service site, catalog) built from the modular blocks of the brand.
 * Hidden from assistive technology: it carries no information.
 */
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] select-none">
      <div className="grid aspect-square grid-cols-6 grid-rows-6 gap-2.5 sm:gap-3">
        {/* Digital menu */}
        <div className="col-span-4 row-span-3 flex flex-col rounded-[22px] bg-navy p-5 text-on-dark shadow-raised sm:p-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-lime px-3 py-1 font-display text-[0.7rem] font-semibold text-navy">Menú</span>
            <span className="flex gap-1">
              <span className="size-1.5 rounded-full bg-white/40" />
              <span className="size-1.5 rounded-full bg-white/40" />
              <span className="size-1.5 rounded-full bg-white/40" />
            </span>
          </div>
          <div className="mt-5 flex gap-1.5">
            <span className="h-5 w-14 rounded-full bg-white/15" />
            <span className="h-5 w-10 rounded-full bg-white/10" />
            <span className="h-5 w-12 rounded-full bg-white/10" />
          </div>
          <div className="mt-auto space-y-3.5">
            {["w-3/5", "w-2/5", "w-1/2"].map((width) => (
              <div key={width} className="flex items-center gap-3">
                <Bar className={`${width} bg-white/80`} />
                <span className="flex-1 border-b border-dashed border-white/20" />
                <Bar className="w-8 bg-lavender" />
              </div>
            ))}
          </div>
        </div>

        {/* QR access */}
        <div className="col-span-2 row-span-2 grid place-items-center rounded-[22px] bg-lavender p-4">
          <div className="grid w-full max-w-[6.5rem] grid-cols-7 gap-[3px]">
            {qrPattern.flatMap((row, r) =>
              row.split("").map((cell, c) => (
                <span key={`${r}-${c}`} className={`aspect-square rounded-[2px] ${cell === "1" ? "bg-navy" : "bg-transparent"}`} />
              )),
            )}
          </div>
        </div>

        {/* Link block */}
        <div className="col-span-2 row-span-1 flex items-center justify-end rounded-[22px] bg-lime px-4">
          <ArrowUpRight className="size-6 text-navy" strokeWidth={2} />
        </div>

        {/* Service landing page */}
        <div className="col-span-3 row-span-3 flex flex-col rounded-[22px] border border-line bg-card p-5 shadow-card sm:p-6">
          <span className="size-7 rounded-[8px] bg-lavender-tint" />
          <div className="mt-4 space-y-2.5">
            <Bar className="w-11/12 bg-navy" />
            <Bar className="w-2/3 bg-navy" />
          </div>
          <div className="mt-3 space-y-1.5">
            <Bar className="h-1.5 w-full bg-line" />
            <Bar className="h-1.5 w-4/5 bg-line" />
          </div>
          <span className="mt-auto h-7 w-24 rounded-full bg-lavender" />
        </div>

        {/* Product catalog */}
        <div className="col-span-3 row-span-3 rounded-[22px] bg-teal p-4 sm:p-5">
          <div className="grid h-full grid-cols-2 grid-rows-2 gap-2.5">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col justify-end gap-1.5 rounded-[12px] bg-white/90 p-2.5">
                <span className={`mb-auto block aspect-[4/3] w-full rounded-[7px] ${item % 3 === 0 ? "bg-teal-tint" : "bg-lime-tint"}`} />
                <Bar className="h-1.5 w-4/5 bg-navy/70" />
                <Bar className="h-1.5 w-1/2 bg-navy/25" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
