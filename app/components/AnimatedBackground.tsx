export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="bg-orb absolute -top-32 -left-20 h-72 w-72 rounded-full bg-fuchsia-500 blur-3xl opacity-70" />
      <div className="bg-orb-delay absolute -bottom-40 -right-24 h-80 w-80 rounded-full bg-blue-500 blur-3xl opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
    </div>
  );
}
