import { applicants } from "../../constants/content";

export function ApplicantPanel() {
  return (
    <section className="min-w-0 rounded-2xl bg-white px-2 py-5 shadow-[0_20px_55px_rgba(30,62,133,0.04)] sm:px-8 sm:py-6 lg:px-8">
      <div className="mb-7 flex items-center justify-between gap-4 sm:mb-8">
        <div className="flex items-center gap-2 text-xs text-muted sm:gap-3 sm:text-base">
          <span>View</span>
          <SelectPill label="25" />
        </div>
        <div className="flex items-center gap-2 text-xs text-muted sm:gap-3 sm:text-base">
          <span>Sort by</span>
          <SelectPill label="All" wide />
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-2 gap-x-3 gap-y-5 sm:gap-6 lg:gap-x-6 lg:gap-y-7">
        {applicants.slice(0, 6).map((applicant) => (
          <ApplicantCard key={applicant.id} applicant={applicant} />
        ))}
      </div>

      <Pagination />
    </section>
  );
}

function SelectPill({ label, wide = false }) {
  return (
    <button
      type="button"
      aria-label={`Select ${label}`}
      className={`inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-[#F7F7FA] px-3 text-xs font-medium text-brand-800 sm:h-10 sm:gap-3 sm:px-4 sm:text-sm ${
        wide ? "min-w-[76px] sm:min-w-[110px]" : "min-w-[68px] sm:min-w-[72px]"
      }`}
    >
      {label}
      <span className="text-slate-300">⌄</span>
    </button>
  );
}

function ApplicantCard({ applicant }) {
  return (
    <article className="min-w-0 rounded-lg bg-[#F7F8FC] p-2 sm:p-4">
      <a
        href="#cover-letter"
        className="text-[7px] font-extrabold text-brand-800 underline sm:text-sm"
      >
        Cover Letter Video
      </a>
      <div className="relative mt-1.5 aspect-[1.75/1] overflow-hidden rounded bg-black sm:mt-2">
        <div className="absolute inset-y-0 left-[28%] right-[28%] bg-[linear-gradient(180deg,rgba(64,89,115,0.75),rgba(25,39,58,0.9)),radial-gradient(circle_at_50%_20%,#c89186_0_12%,transparent_13%),linear-gradient(90deg,#264462,#456887)]" />
        <div className="absolute inset-0 bg-black/25" />
        <button
          type="button"
          className="absolute left-1/2 top-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-lg bg-white/40 text-xs text-white backdrop-blur-sm sm:h-12 sm:w-12 sm:rounded-xl sm:text-base"
          aria-label="Play cover letter video"
        >
          ▶
        </button>
      </div>
      <div className="mt-2 flex min-w-0 items-start justify-between gap-1.5 sm:mt-3 sm:gap-2">
        <div className="min-w-0">
          <p className="truncate text-[7px] font-extrabold text-brand-800 sm:text-sm">
            {applicant.name}
          </p>
          <h3 className="mt-0.5 text-[10px] font-extrabold leading-tight text-ink sm:mt-1 sm:text-base">
            {applicant.title}
          </h3>
          <p className="mt-0.5 truncate text-[7px] text-muted sm:text-[10px]">
            {applicant.subtitle}
          </p>
        </div>
        <div className="w-[48px] shrink-0 rounded-md border border-[#DCE3F5] bg-white px-1 py-1 text-right sm:w-24 sm:px-2 sm:py-1.5">
          <p className="whitespace-nowrap text-[7px] font-extrabold text-brand-400 sm:text-[11px]">
            {applicant.hourly}
          </p>
          <p className="text-[6px] text-muted sm:text-[10px]">per hour</p>
        </div>
      </div>
      <div className="mt-3 hidden gap-2 sm:flex">
        {applicant.skills.map((skill) => (
          <span
            className="rounded bg-brand-800 px-3 py-2 text-xs font-extrabold text-white"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-2 grid min-w-0 grid-cols-2 gap-1.5 sm:mt-3 sm:gap-4">
        <button
          type="button"
          className="min-w-0 rounded bg-[#31C737] py-1.5 text-[8px] font-extrabold text-white sm:rounded-md sm:py-2 sm:text-sm"
        >
          ✓ Shortlist
        </button>
        <button
          type="button"
          className="min-w-0 rounded bg-[#D43D3D] py-1.5 text-[8px] font-extrabold text-white sm:rounded-md sm:py-2 sm:text-sm"
        >
          × Reject
        </button>
      </div>
    </article>
  );
}

function Pagination() {
  const pages = ["‹", "1", "2", "3", "...", "7", "›"];

  return (
    <nav className="mt-9 flex justify-center gap-2" aria-label="Pagination">
      {pages.map((page) => (
        <button
          type="button"
          aria-label={getPageLabel(page)}
          className={`grid h-9 min-w-9 place-items-center rounded-lg border border-[#DAE2F4] px-3 text-sm font-extrabold ${
            page === "2" ? "bg-brand-400 text-white" : "bg-white text-ink"
          }`}
          key={page}
        >
          {page}
        </button>
      ))}
    </nav>
  );
}

function getPageLabel(page) {
  if (page === "‹") return "Go to previous page";
  if (page === "›") return "Go to next page";
  if (page === "...") return "More pages";

  return `Go to page ${page}`;
}
