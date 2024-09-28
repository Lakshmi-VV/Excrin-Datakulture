import React from "react";
import { Icons } from "@/components/Icons";

function Servicefaq() {
  const accordions = [
    {
      question: "How do you use language processing to understand data?",
    },
    {
      question: "What kind of data can you analyze with your tools?",
    },
    {
      question: "How does a centralized data lake make analytics better?",
    },
    {
      question: "What does your ETL accelerator framework do?",
    },
    {
      question:
        "How can your AI systems help make smarter decisions for my business?",
    },
  ];
  return (
    // Services FAQ
    <section className="service-faq__service">
      <div className="container service-faq">
        <div className="service-faq__content">
          <h4 className="service-faq__title">FAQs</h4>
          <h2 className="service-faq__subtitle">
            Clear answers to your complex questions
          </h2>
        </div>
        <div className="service-faq__accordions">
          {accordions.map((accordion) => {
            return (
              <>
                <div className="service-faq__accordion">
                  <div className="service-faq__accordian-question">
                    <div className="accordian__question">
                      {accordion.question}
                    </div>
                    <div className="down__arrow">
                      <Icons icon="down_arrow" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Servicefaq;
