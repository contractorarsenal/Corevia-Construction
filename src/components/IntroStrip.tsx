const items = ["Family-owned", "Based in Tacoma", "Serving King & Pierce Counties"];

export default function IntroStrip() {
  return (
    <section className="border-b border-line bg-paper-dim">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-stone sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:px-8">
        {items.map((item, index) => (
          <span key={item} className="flex items-center gap-4">
            <span>{item}</span>
            {index < items.length - 1 && (
              <span className="hidden text-line sm:inline" aria-hidden="true">
                &bull;
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
