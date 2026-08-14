export type Stat = { num: string; label: string };

export default function StatBand({
  stats,
  footnote,
  bare = false,
}: {
  stats: Stat[];
  footnote?: string;
  bare?: boolean;
}) {
  return (
    <div className={`stat-band${bare ? " stat-band--bare" : ""}`}>
      <div className="stat-band__grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-card__label">{s.label}</div>
            <div className="stat-card__num">{s.num}</div>
          </div>
        ))}
      </div>
      {footnote && <div className="stat-band__foot">{footnote}</div>}
    </div>
  );
}
