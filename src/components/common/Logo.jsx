import { ASSETS } from "../../constants/content";

export function Logo({ compact = false, loading = "eager" }) {
  return (
    <a href="#" className="inline-flex items-center gap-2 text-white">
      <img
        src={`${ASSETS}remote-recruit-mark.svg`}
        alt=""
        decoding="async"
        loading={loading}
        width={compact ? 36 : 48}
        height={compact ? 32 : 44}
        className={compact ? "h-8 w-9" : "h-7 w-8 sm:h-11 sm:w-12"}
      />
      <span className="leading-none">
        <span className="block text-xs font-extrabold tracking-normal sm:text-xl">
          Remote
        </span>
        <span className="-mt-0.5 block text-sm font-extrabold tracking-normal sm:-mt-1 sm:text-2xl">
          Recruit
        </span>
      </span>
    </a>
  );
}

export function DashboardLogo({ compact = false, loading = "eager" }) {
  return (
    <a href="/" className="inline-flex items-center gap-2 text-white">
      <img
        src={`${ASSETS}remote-recruit-mark.svg`}
        alt=""
        decoding="async"
        loading={loading}
        width={compact ? 36 : 94}
        height={compact ? 32 : 78}
        className={compact ? "h-8 w-9" : "h-[78px] w-[94px]"}
      />
      {compact ? (
        <span className="leading-[0.9]">
          <span className="block text-base font-extrabold text-brand-400">
            Remote
          </span>
          <span className="block text-lg font-extrabold">Recruit</span>
        </span>
      ) : null}
    </a>
  );
}
