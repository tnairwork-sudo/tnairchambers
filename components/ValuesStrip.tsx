import { showValuesStrip } from "@/lib/site";

const lines = [
  {
    title: "Trust",
    body: "It runs both ways, and begins with complete honesty.",
  },
  {
    title: "Courtesy",
    body: "Old-fashioned courtesy, and respect for other people's time.",
  },
  {
    title: "Discipline",
    body: "Preparation, punctuality and follow-through.",
  },
  {
    title: "Growth for all",
    body: "The aim is that clients prosper beyond the matter, and that the people who work with them are paid on time and grow.",
  },
];

export default function ValuesStrip() {
  if (!showValuesStrip) return null;

  return (
    <section className="border-t border-border bg-ink">
      <div className="container-site grid gap-s5 py-s7 md:grid-cols-2 md:py-s8 lg:grid-cols-4">
        {lines.map((line) => (
          <div key={line.title} className="border-t border-antique pt-s3">
            <h2 className="font-serif text-[24px] font-light text-parchment">{line.title}</h2>
            <p className="body-copy mt-s3 text-parchment-dim">{line.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
