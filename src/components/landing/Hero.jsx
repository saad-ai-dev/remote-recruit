import { ASSETS } from "../../constants/content";
import { Logo } from "../common/Logo";

export function Hero() {
  return (
    <section className="relative isolate min-h-[500px] overflow-hidden bg-brand-800 pb-20 text-white sm:min-h-[620px] sm:pb-28 lg:min-h-[700px]">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${ASSETS}background.svg)` }}
      />
      <div className="absolute left-[-10%] top-[-34%] -z-10 h-[420px] w-[420px] rounded-full bg-white opacity-[0.03] sm:h-[650px] sm:w-[650px]" />
      <div className="absolute bottom-[-1px] left-0 right-0 -z-10 h-[24vw] min-h-[150px] max-h-[310px] bg-white [clip-path:ellipse(72%_62%_at_72%_100%)]" />
      <div className="absolute bottom-[3vw] right-[-5vw] -z-10 h-[36vw] max-h-[440px] min-h-[220px] w-[46vw] min-w-[320px] rounded-full bg-white opacity-[0.04]" />

      <header className="container-page flex items-center justify-between gap-3 py-6 sm:py-9">
        <Logo />
        <nav className="flex items-center gap-3 text-[11px] font-extrabold sm:gap-8 sm:text-xs">
          <a href="/application" className="text-white/90 transition hover:text-white">
            Sign In
          </a>
          <a
            href="#signup"
            className="rounded-full bg-brand-400 px-3 py-2 text-white shadow-sm transition hover:bg-brand-300 sm:px-5 sm:py-3"
          >
            Sign Up
          </a>
        </nav>
      </header>

      <div className="container-page flex justify-center pt-14 text-center sm:pt-24 lg:pt-28">
        <div className="max-w-3xl">
          <h1 className="mx-auto max-w-[280px] text-balance text-[30px] font-extrabold leading-tight sm:max-w-3xl sm:text-5xl lg:text-6xl">
            RemoteRecruit's Difference
          </h1>
          <p className="mx-auto mt-5 max-w-[280px] text-xs font-semibold leading-6 text-white/82 sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-7">
            RemoteRecruit is connecting the world with an easy-to-use platform
            that lets full-time, part-time, and freelance workers showcase their
            talents to businesses that need them. With no paywalls, no fees, and
            no barriers, there's nothing but you, your talents, and the next step
            in your career.
          </p>
        </div>
      </div>
    </section>
  );
}
