export function AppIcon({ name, className = "h-5 w-5" }) {
  const icons = {
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="3" />
        <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
        <path d="M3 12h18" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    message: <rect x="3" y="5" width="18" height="14" rx="4" />,
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a7 7 0 0 0-1.7-1L14.5 3h-5l-.3 3.1a7 7 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.3 3.1h5l.3-3.1a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.5c.1-.3.1-.6.1-1Z" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.7 9a2.5 2.5 0 0 1 4.7 1.3c0 1.7-1.6 2.2-2.1 3.3" />
        <path d="M12 17h.01" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="9" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M12 20a5 5 0 0 1 9 0" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="3" />
        <path d="m4 8 8 6 8-6" />
      </>
    ),
    clipboard: (
      <>
        <rect x="6" y="5" width="12" height="16" rx="2" />
        <path d="M9 5V3h6v2" />
        <path d="m9 13 2 2 4-5" />
      </>
    ),
    reject: (
      <>
        <rect x="6" y="4" width="12" height="17" rx="2" />
        <path d="M9 8h6" />
        <path d="M9 12h6" />
        <path d="m10 17 4-4" />
        <path d="m14 17-4-4" />
      </>
    ),
    edit: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z" />
      </>
    )
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}

export function CheckIcon() {
  return (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-400 text-[11px] font-extrabold text-white">
      ✓
    </span>
  );
}

export function SocialIcon({ icon }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 fill-current"
      viewBox={icon.viewBox}
    >
      {icon.paths ? (
        icon.paths.map((path) => <path d={path} key={path} />)
      ) : (
        <path d={icon.path} />
      )}
    </svg>
  );
}
