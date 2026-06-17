import { categoryCards } from "../../constants/content";
import { AppIcon } from "../common/Icons";

export function CategoryTabs() {
  return (
    <section className="mt-3">
      <p className="mb-3 text-sm font-bold text-brand-800">Key Categories:</p>
      <div className="hide-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 xl:grid-cols-4 xl:gap-9">
        {categoryCards.map((card) => (
          <CategoryCard key={card.label} {...card} />
        ))}
      </div>
    </section>
  );
}

function CategoryCard({ label, count, active, icon }) {
  return (
    <button
      className={`flex min-h-[88px] min-w-[236px] items-center gap-3 rounded-md border px-4 text-left transition sm:min-h-[100px] sm:min-w-0 lg:gap-3 lg:px-4 ${
        active
          ? "border-[#FFC315] bg-ink text-white shadow-card"
          : "border-slate-300 bg-transparent text-black hover:bg-white"
      }`}
    >
      <AppIcon
        name={icon}
        className={`h-6 w-6 shrink-0 sm:h-7 sm:w-7 ${active ? "text-white" : "text-black/55"}`}
      />
      <span>
        {active ? (
          <span className="block whitespace-nowrap text-base font-extrabold">
            {label}
          </span>
        ) : null}
        <span
          className={`block whitespace-nowrap text-sm font-bold ${
            active ? "text-[#18E046]" : "text-slate-400"
          }`}
        >
          {count}
        </span>
      </span>
    </button>
  );
}
