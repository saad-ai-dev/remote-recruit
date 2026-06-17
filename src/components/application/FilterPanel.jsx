export function FilterPanel() {
  return (
    <aside className="hidden rounded-2xl bg-white px-8 py-10 xl:block">
      <h2 className="text-xl font-extrabold">Filter</h2>
      <FilterGroup title="Pay:" open>
        <CheckField label="Hourly" />
        <FilterInput label="Max Hourly Rate" />
      </FilterGroup>
      <FilterGroup title="Sort Pay By:">
        <FilterInput />
        <CheckField label="Annual Salary" checked />
        <FilterInput label="Max Annual Salary" />
        <CheckField label="Both Hourly & Salary" checked />
      </FilterGroup>
      <FilterGroup title="Sort Salary By:" open>
        <div className="grid grid-cols-2 gap-5">
          <CheckField label="Ascending" />
          <CheckField label="Descending" />
        </div>
      </FilterGroup>
      <FilterGroup title="Language:">
        <FilterInput />
      </FilterGroup>
      <FilterGroup title="Countries:">
        <div className="rounded-lg bg-[#F8F8F8] p-3">
          <span className="inline-flex items-center gap-2 rounded-md border border-[#DCE3F5] bg-white px-4 py-2 text-sm font-bold">
            United States
            <span>×</span>
          </span>
        </div>
      </FilterGroup>
      <a href="#upgrade" className="block border-b border-[#FFC315] pb-2 text-[#F4AD00]">
        Upgrade to Premium to Access
      </a>
      <div className="mt-6 flex items-center justify-between">
        <span className="font-bold">AI Ranking 👑</span>
        <span className="h-6 w-10 rounded-full bg-[#F1F1F1]" />
      </div>
      <PremiumSlider label="English Proficiency" />
      <PremiumSlider label="Experience Match" />
      <button
        type="button"
        className="mt-5 w-full rounded-lg bg-[#FFC315] px-4 py-3 text-sm font-extrabold"
      >
        Customize Ranking Filter
      </button>
      <a href="#why" className="mt-6 block text-[#F4AD00]">
        Why AI Ranking?
      </a>
      <button type="button" className="mt-9 text-base font-bold text-[#D43D3D]">
        Reset all filters
      </button>
    </aside>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="mt-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-extrabold">{title}</h3>
        <span className="text-xl">⌄</span>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function CheckField({ label, checked = false }) {
  return (
    <label className="flex items-center gap-3 text-sm text-muted">
      <input
        type="checkbox"
        defaultChecked={checked}
        className="sr-only"
        aria-label={label}
      />
      <span
        className={`grid h-5 w-5 place-items-center rounded border ${
          checked
            ? "border-brand-800 bg-brand-800 text-white"
            : "border-slate-300 bg-white"
        }`}
      >
        {checked ? "✓" : ""}
      </span>
      <span className={checked ? "font-medium text-ink" : ""}>{label}</span>
    </label>
  );
}

function FilterInput({ label }) {
  return (
    <div>
      <div className="h-12 rounded-lg bg-[#F7F7F7]" />
      {label ? <p className="mt-3 text-sm text-slate-300">{label}</p> : null}
    </div>
  );
}

function PremiumSlider({ label }) {
  return (
    <div className="mt-6">
      <p className="mb-3 font-bold">{label}</p>
      <div className="h-2 rounded-full bg-slate-100 blur-[1px]">
        <div className="h-full w-2/3 rounded-full bg-brand-800/55" />
      </div>
    </div>
  );
}
