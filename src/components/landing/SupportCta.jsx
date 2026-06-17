import { Button } from "../common/Button";
import { Logo } from "../common/Logo";

export function SupportCta() {
  return (
    <section className="below-fold-section relative overflow-hidden bg-[#ECF2FF]">
      <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/35 sm:h-[520px] sm:w-[520px]" />
      <div className="absolute left-1/2 top-8 h-8 w-8 -translate-x-1/2 rounded-full bg-[#FFC928] sm:top-10 sm:h-10 sm:w-10" />
      <div className="container-page grid min-h-[430px] items-center gap-6 py-10 sm:gap-10 sm:py-12 xl:grid-cols-[1.05fr_0.95fr] xl:py-0">
        <div className="relative min-h-[210px] overflow-hidden rounded-none sm:min-h-[270px] md:min-h-[330px] xl:min-h-[410px]">
          <DashboardMockup />
        </div>
        <div className="relative z-10 max-w-xl lg:pl-6">
          <p className="mb-4 text-sm font-extrabold text-brand-700">
            Are you ready?
          </p>
          <h2 className="text-[30px] font-extrabold leading-tight text-ink sm:text-5xl">
            Help is only a few clicks away!
          </h2>
          <p className="body-copy mt-4 max-w-sm sm:mt-6">
            Click below to get set up super quickly and find help now!
          </p>
          <Button className="mt-8 gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20">
              →
            </span>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const jobs = [
    {
      title: "Senior Android Designer needed for ongoing assignment",
      tone: "border-brand-100 bg-white"
    },
    {
      title: "Senior Android Designer needed for emerging request",
      tone: "border-brand-800 bg-brand-800 text-white"
    },
    {
      title: "Senior iOS Designer needed for remote product",
      tone: "border-brand-100 bg-white"
    }
  ];

  return (
    <div className="absolute bottom-0 left-1/2 w-[620px] origin-bottom -translate-x-1/2 scale-[0.52] sm:scale-[0.72] md:scale-[0.86] xl:left-0 xl:translate-x-0 xl:scale-100">
      <div className="flex h-[360px] overflow-hidden rounded-t-[22px] bg-white shadow-card">
        <aside className="w-[104px] bg-brand-800 px-4 py-7 text-white">
          <Logo compact />
          <div className="mt-12 space-y-4 text-[10px] font-bold text-white/70">
            {["Find Work", "Post Jobs", "Settings"].map((item, index) => (
              <div
                className={`rounded-md px-3 py-2 ${
                  index === 0 ? "bg-white/12 text-white" : ""
                }`}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>
        <div className="flex-1 bg-[#F8FAFF] p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold text-muted">Welcome Max</p>
              <h3 className="text-2xl font-extrabold text-ink">
                Let's Find Work
              </h3>
            </div>
            <div className="h-9 w-36 rounded-full bg-white" />
          </div>
          <div className="mt-7 flex gap-3">
            <div className="h-10 w-40 rounded-full bg-white" />
            <div className="h-10 w-52 rounded-full bg-white" />
          </div>
          <div className="mt-5 flex gap-2">
            {["UX/UI", "Front End", "Back End", "Data Science", "Sales"].map(
              (item, index) => (
                <span
                  className={`rounded-md px-4 py-2 text-[10px] font-bold ${
                    index === 0
                      ? "bg-brand-800 text-white"
                      : "bg-white text-brand-800"
                  }`}
                  key={item}
                >
                  {item}
                </span>
              )
            )}
          </div>
          <div className="mt-5 max-w-[410px] space-y-3">
            {jobs.map((job) => (
              <div
                key={job.title}
                className={`rounded-lg border p-4 text-xs font-bold ${job.tone}`}
              >
                {job.title}
              </div>
            ))}
          </div>
        </div>
        <aside className="hidden w-[170px] bg-white p-7 xl:block">
          <p className="text-xs font-extrabold text-ink">Filter</p>
          <div className="mt-5 space-y-4">
            {["Full Time", "Part Time", "Hourly", "Fixed Rate"].map(
              (item, index) => (
                <div className="flex items-center gap-2" key={item}>
                  <span
                    className={`h-4 w-4 rounded-sm border ${
                      index % 2 === 0
                        ? "border-brand-800 bg-brand-800"
                        : "border-slate-200 bg-white"
                    }`}
                  />
                  <span className="text-[10px] font-bold text-muted">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
          <button
            type="button"
            className="mt-7 rounded-md bg-brand-800 px-5 py-3 text-[10px] font-extrabold text-white"
          >
            Apply All
          </button>
        </aside>
      </div>
    </div>
  );
}
