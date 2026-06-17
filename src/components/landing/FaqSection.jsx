import { faqs } from "../../constants/content";
import { Button } from "../common/Button";

export function FaqSection() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
          Common Questions
        </h2>
        <div className="mt-10 space-y-9">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
        <Button variant="secondary" className="mt-12 rounded-xl">
          More Questions
        </Button>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }) {
  return (
    <div>
      <h3 className="text-base font-extrabold text-ink">{question}</h3>
      <p className="body-copy mt-3">{answer}</p>
    </div>
  );
}
