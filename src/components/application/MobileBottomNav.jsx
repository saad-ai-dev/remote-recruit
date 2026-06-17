import { AppIcon } from "../common/Icons";

export function MobileBottomNav() {
  const items = ["search", "briefcase", "settings", "message", "user"];

  return (
    <nav className="fixed bottom-5 left-4 right-4 z-30 rounded-[22px] bg-white px-6 py-4 shadow-[0_18px_60px_rgba(30,62,133,0.18)] lg:hidden">
      <div className="flex items-center justify-between text-brand-800">
        {items.map((item, index) => (
          <a
            href="#mobile-nav"
            className={index === 1 ? "text-brand-400" : ""}
            key={item}
            aria-label={item}
          >
            <AppIcon name={item} className="h-7 w-7" />
          </a>
        ))}
      </div>
    </nav>
  );
}
