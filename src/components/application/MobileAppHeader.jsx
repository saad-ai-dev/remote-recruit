import { DashboardLogo } from "../common/Logo";

export function MobileAppHeader() {
  return (
    <header className="bg-brand-800 px-3 pb-3 pt-2 text-white lg:hidden">
      <div className="mb-2 flex items-center justify-between text-xs font-bold">
        <span>12:30</span>
        <div className="flex items-end gap-1">
          <span className="h-2.5 w-1 rounded-full bg-white/80" />
          <span className="h-3 w-1 rounded-full bg-white/80" />
          <span className="h-3.5 w-1 rounded-full bg-white/80" />
          <span className="h-3 w-5 rounded-sm border border-white/80" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <DashboardLogo compact />
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="h-7 whitespace-nowrap rounded-md bg-[#FFC315] px-2 text-[10px] font-extrabold text-brand-800"
          >
            Get Premium
          </button>
          <button
            type="button"
            className="grid h-7 w-7 place-items-center"
            aria-label="Open menu"
          >
            <span className="flex flex-col items-end gap-1.5">
              <span className="h-0.5 w-5 rounded bg-white" />
              <span className="h-0.5 w-4 rounded bg-white" />
              <span className="h-0.5 w-5 rounded bg-white" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
