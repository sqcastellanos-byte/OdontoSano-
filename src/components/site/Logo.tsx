/* eslint-disable @next/next/no-img-element */
// Logo oficial OdontoSano (vector, extraído del PDF de marca).
// logo-mark.svg  = solo el símbolo (diente de dos cintas)
// logo-word.svg  = solo el texto "OdontoSano"
// logo-odontosano.svg = lockup completo vertical

export function LogoMark({ className = "" }: { className?: string }) {
  return <img src="/logo-mark.svg" alt="" aria-hidden className={className} />;
}

export function Logo({
  className = "",
  markClass = "h-9 w-auto",
  wordClass = "h-[1.15rem] w-auto",
}: {
  className?: string;
  markClass?: string;
  wordClass?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src="/logo-mark.svg" alt="" aria-hidden className={markClass} />
      <img src="/logo-word.svg" alt="OdontoSano" className={wordClass} />
    </span>
  );
}
