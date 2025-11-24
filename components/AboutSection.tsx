const aboutHighlights = [
  "Portfolio-first learning",
  "On-site edit lab",
  "Placement desk",
  "Client partnerships",
];

export function AboutSection() {
  return (
    <section id="about" className="grid gap-10 rounded-[32px] border border-slate-200 bg-white p-10 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">About us</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Education meets agency-grade delivery.</h2>
        <p className="mt-4 text-base text-slate-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem expedita facere ad sapiente culpa aliquam minus qui officia ratione. Aut autem suscipit voluptatum? Inventore labore quae nisi sit, architecto ipsum at facere odio animi rerum officia totam recusandae iste, molestiae repellat quis in error, suscipit doloribus! Velit maxime eveniet earum architecto commodi, recusandae pariatur amet reiciendis odio doloribus nisi reprehenderit voluptas! Repellat qui molestiae provident, recusandae distinctio delectus inventore eveniet consectetur modi unde nemo, omnis rem culpa facere deleniti non ad maxime. Rerum beatae ullam quos repellat ut at, odit eos esse fuga facilis commodi architecto reiciendis, deserunt, dolorem molestias.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {aboutHighlights.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
