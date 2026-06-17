import { ASSETS, appNavItems } from "../../constants/content";
import { AppIcon } from "../common/Icons";

export function DashboardSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 bg-brand-800 text-white lg:block">
      <div className="dashboard-sidebar-scroll flex h-full flex-col overflow-y-auto overflow-x-hidden px-4 py-6">
        <div className="flex flex-col items-center">
          <img
            src={`${ASSETS}remote-recruit-mark.svg`}
            alt=""
            decoding="async"
            loading="eager"
            width="82"
            height="68"
            className="h-[68px] w-[82px]"
          />
          <p className="mt-1 text-lg font-bold">RemoteRecruit</p>
        </div>

        <nav className="mt-8 space-y-2">
          {appNavItems.map((item) => (
            <a
              href="#dashboard"
              key={item.label}
              className={`flex min-h-12 items-center gap-3 rounded-xl px-4 text-[15px] font-semibold transition ${
                item.active
                  ? "bg-brand-500 text-white"
                  : "text-white/78 hover:bg-white/10 hover:text-white"
              }`}
            >
              <AppIcon name={item.icon} className="h-5 w-5 shrink-0" />
              <span className="min-w-0 flex-1 whitespace-nowrap">
                {item.label}
              </span>
              {item.badge ? (
                <span className="grid h-6 min-w-6 place-items-center rounded-full bg-brand-400 px-2 text-xs font-extrabold text-white">
                  {item.badge}
                </span>
              ) : null}
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-4 pt-7">
          <div className="sidebar-promo-card relative rounded-xl bg-gradient-to-br from-[#5EA7F2] to-[#2E6FB6] p-5 shadow-lg">
            <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-[#FFC315] text-[8px] font-black leading-none text-red-600 shadow-md">
              100%
            </span>
            <h3 className="pr-12 text-xl font-extrabold leading-tight">
              Why You Should Try Premium
            </h3>
            <button
              type="button"
              className="mt-5 inline-flex w-full items-center gap-3 rounded-full bg-brand-800/70 py-2 pl-2 pr-4 text-base font-semibold"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[#FFC315]">
                ▶
              </span>
              Watch Video
            </button>
          </div>

          <div className="sidebar-basic-card rounded-xl bg-gradient-to-br from-[#5EA7F2] to-[#2F6EB2] p-5">
            <h3 className="text-xl font-extrabold">Basic</h3>
            <UsageMeter label="Free Messages" />
            <UsageMeter label="Free Invites" />
            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-[#FFC315] py-3 text-sm font-extrabold text-black"
            >
              Upgrade
            </button>
            <a
              href="#premium"
              className="mt-3 block text-xs font-bold text-[#FFC315] underline"
            >
              Why you should try premium?
            </a>
          </div>

          <div className="sidebar-user-card flex items-center gap-3 px-4">
            <img
              src={`${ASSETS}bungie-avatar.png`}
              alt="Bungie profile"
              decoding="async"
              loading="lazy"
              width="40"
              height="40"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="font-bold">Bungie</p>
              <p className="text-sm text-white/65">Premium</p>
            </div>
            <span className="text-white/35">⌄</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

function UsageMeter({ label }) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-sm font-bold">
        <span>{label}</span>
        <span>1/5</span>
      </div>
      <div className="mt-3 h-1 rounded-full bg-brand-800/55">
        <div className="h-full w-1/5 rounded-full bg-white" />
      </div>
    </div>
  );
}
