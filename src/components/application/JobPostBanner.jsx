import { AppIcon } from "../common/Icons";

export function JobPostBanner() {
  return (
    <section className="flex min-h-[102px] items-center gap-3 rounded-xl border border-brand-300 bg-brand-50 px-3 py-3 sm:min-h-[112px] sm:gap-4 sm:px-6 sm:py-4 lg:px-7">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white text-[10px] font-medium tracking-tight text-black sm:h-[54px] sm:w-[54px] sm:text-[11px]">
        BUNGIE
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-ink sm:text-sm">Your Job Post</p>
        <h2 className="mt-1 max-w-xl text-[14px] font-extrabold leading-[1.25] text-ink sm:text-xl sm:leading-tight">
          Senior UI/UX Designer needed for ongoing support
        </h2>
      </div>
      <button
        type="button"
        className="grid h-8 w-8 shrink-0 place-items-center text-brand-400 sm:h-10 sm:w-10"
        aria-label="Edit job post"
      >
        <AppIcon name="edit" className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>
    </section>
  );
}
