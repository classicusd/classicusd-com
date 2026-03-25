interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function FAQAccordionItem({ item }: { item: FAQItem }) {
  return (
    <details className="group rounded-2xl panel overflow-hidden">
      <summary className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-usc-surface/50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h3 className="text-lg font-bold text-usc-text">{item.question}</h3>
        <svg
          className="w-5 h-5 text-usc-green flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="px-6 pb-6">
        <p className="text-usc-text-secondary">{item.answer}</p>
      </div>
    </details>
  );
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <FAQAccordionItem key={index} item={item} />
      ))}
    </div>
  );
}
