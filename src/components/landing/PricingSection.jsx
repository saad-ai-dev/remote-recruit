import { freeFeatures, premiumFeatures } from "../../constants/content";
import { Button } from "../common/Button";
import { CheckIcon } from "../common/Icons";

export function PricingSection() {
  return (
    <section className="below-fold-section relative overflow-hidden bg-white pt-10">
      <div className="absolute bottom-0 left-0 right-0 h-[46%] bg-brand-800" />
      <div className="absolute bottom-[33%] left-0 right-0 h-32 bg-white [clip-path:ellipse(76%_52%_at_52%_0%)]" />
      <div className="container-page relative z-10 pb-20">
        <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
          Help Is One Click Away
        </h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-7 md:grid-cols-2">
          <PriceCard
            label="Free"
            sublabel="Basic"
            button="Get Started"
            features={freeFeatures}
          />
          <PriceCard
            highlighted
            label="$79.99"
            sublabel="Per Month"
            badge="Premium"
            button="Get Started"
            features={premiumFeatures}
          />
        </div>
      </div>
    </section>
  );
}

function PriceCard({ label, sublabel, badge, button, features, highlighted }) {
  return (
    <article className="grid gap-6 rounded-[18px] bg-white p-6 shadow-card sm:grid-cols-[140px_1fr]">
      <div className="flex min-h-[130px] flex-col items-center justify-center rounded-xl bg-brand-50 p-5 text-center">
        {badge ? (
          <span className="mb-3 inline-flex rounded-full bg-brand-100 px-4 py-2 text-xs font-extrabold text-brand-700">
            {badge}
          </span>
        ) : null}
        <p className="text-3xl font-extrabold text-brand-400">{label}</p>
        <p className="mt-2 text-sm font-bold text-muted">{sublabel}</p>
      </div>
      <div>
        <ul className="space-y-4">
          {features.map((feature) => (
            <li
              className="flex items-start gap-3 text-sm font-bold text-ink"
              key={feature}
            >
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant={highlighted ? "primary" : "secondary"}
          className="mt-7 w-full rounded-xl"
        >
          {button}
        </Button>
      </div>
    </article>
  );
}
