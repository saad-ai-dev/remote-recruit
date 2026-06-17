import { ASSETS, features } from "../../constants/content";

export function FeatureStack() {
  return (
    <section className="below-fold-section container-page -mt-2 space-y-14 pb-16 pt-10 sm:space-y-20 sm:pt-16 lg:space-y-28 lg:pb-28">
      {features.map((feature) => (
        <FeatureRow key={feature.title} {...feature} />
      ))}
    </section>
  );
}

function FeatureRow({ eyebrow, title, body, image, imageAlt, align }) {
  const imageFirst = align === "left";

  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div className={imageFirst ? "lg:order-2" : ""}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-5 max-w-xl text-[28px] font-extrabold leading-tight text-ink sm:mt-7 sm:text-4xl">
          {title}
        </h2>
        <p className="body-copy mt-5 max-w-md sm:mt-7">{body}</p>
      </div>
      <div
        className={`relative mx-auto w-full max-w-[300px] sm:max-w-[520px] ${
          imageFirst ? "lg:order-1" : ""
        }`}
      >
        <div className="absolute left-4 top-8 h-5 w-5 rounded-full bg-brand-400 shadow-glow" />
        <img
          src={`${ASSETS}${image}`}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="relative mx-auto w-full drop-shadow-[0_28px_55px_rgba(30,62,133,0.16)]"
        />
      </div>
    </article>
  );
}
