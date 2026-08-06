export default function SectionBackground({
  children,
  className = "",
}) {
  return (
    <section className={`relative overflow-hidden bg-white ${className}`}>
      {/* Dot Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-30
          [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)]
          [background-size:26px_26px]
        "
      />

      {/* Soft Glow */}
      <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}