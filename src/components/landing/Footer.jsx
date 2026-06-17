import { ASSETS, socialLinks } from "../../constants/content";
import { Logo } from "../common/Logo";
import { SocialIcon } from "../common/Icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-800 pb-12 pt-4 text-white">
      <div className="absolute -right-16 -top-28 h-72 w-72 rounded-full bg-white opacity-[0.04]" />
      <div className="absolute -bottom-44 left-12 h-96 w-96 rounded-full bg-white opacity-[0.03]" />
      <div className="container-page relative z-10 flex flex-col items-center justify-between gap-10 sm:flex-row">
        <Logo loading="lazy" />
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              href="#social"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/12 text-white/75 transition hover:border-white/35 hover:bg-white/20 hover:text-white"
              key={social.label}
              aria-label={`RemoteRecruit ${social.label}`}
            >
              <SocialIcon icon={social} />
            </a>
          ))}
        </div>
      </div>
      <img
        src={`${ASSETS}remote-recruit-mark.svg`}
        alt=""
        loading="lazy"
        decoding="async"
        width="44"
        height="36"
        className="mx-auto mt-12 h-9 w-11 opacity-95"
      />
    </footer>
  );
}
