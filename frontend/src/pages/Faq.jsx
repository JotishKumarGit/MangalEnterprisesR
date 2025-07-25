import React, { useState } from 'react';

const faqData = [
  {
    question: "What is an On-Grid Solar System and how does it work?",
    answer: "An On-Grid Solar System is connected to the utility grid. It generates solar power during the day and supplies excess energy back to the grid, reducing your electricity bill. It does not work during power outages unless paired with a battery backup.",
  },
  {
    question: "What is the difference between On-Grid, Off-Grid, and Hybrid Solar Systems?",
    answer: "On-Grid systems are connected to the electricity grid, Off-Grid systems work independently using batteries, and Hybrid systems combine both—using solar, grid power, and batteries for maximum flexibility.",
  },
  {
    question: "What are the benefits of using a Solar Pump?",
    answer: "Solar Pumps use solar energy to draw water for irrigation or household use, reducing electricity costs and providing a sustainable solution in remote or rural areas without grid access.",
  },
  {
    question: "How does a Solar Chakki (Flour Mill) operate?",
    answer: "A Solar Chakki uses solar power to run the flour mill motor. It's a cost-effective solution for rural areas, offering reliable milling with zero electricity bills.",
  },
  {
    question: "Are Solar Street Lights suitable for all weather conditions?",
    answer: "Yes, modern solar street lights are designed to be weatherproof and can operate efficiently in rain, dust, and varying temperatures. They automatically charge during the day and light up at night.",
  },
  {
    question: "Can I run my entire home or business on a Hybrid Solar System?",
    answer: "Yes, a properly designed Hybrid Solar System can power your entire home or business using a combination of solar energy, battery backup, and grid power, ensuring uninterrupted supply even during outages.",
  },
  {
    question: "What is the typical lifespan of a solar system?",
    answer: "Solar panels generally last 25–30 years, while batteries and inverters may need replacement every 5–10 years depending on usage and maintenance.",
  },
  {
    question: "Is there any government subsidy available for installing solar systems?",
    answer: "Yes, the Indian government offers subsidies for residential rooftop solar systems under various state and national schemes. Eligibility and subsidy rates vary by location and system size.",
  },
];




const Faq = () => {
    const [activeIndexCol1, setActiveIndexCol1] = useState(null);
    const [activeIndexCol2, setActiveIndexCol2] = useState(null);

    const half = Math.ceil(faqData.length / 2);
    const firstHalf = faqData.slice(0, half);
    const secondHalf = faqData.slice(half);

    const renderAccordion = (items, activeIndex, setActiveIndex, columnId) => (
        items.map((item, index) => {
            const uniqueId = `${columnId}-${index}`;
            return (
                <div className="accordion-item" key={uniqueId}>
                    <h2 className="accordion-header" id={`heading-${uniqueId}`}>
                        <button
                            className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`collapse-${uniqueId}`}
                        >
                            {item.question}
                        </button>
                    </h2>
                    <div
                        id={`collapse-${uniqueId}`}
                        className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                        aria-labelledby={`heading-${uniqueId}`}
                        data-bs-parent={`#faqAccordion-${columnId}`}
                    >
                        <div className="accordion-body">{item.answer}</div>
                    </div>
                </div>
            );
        })
    );

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">❓ Frequently Asked Questions</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="accordion" id="faqAccordion-col1">
                        {renderAccordion(firstHalf, activeIndexCol1, setActiveIndexCol1, 'col1')}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="accordion" id="faqAccordion-col2">
                        {renderAccordion(secondHalf, activeIndexCol2, setActiveIndexCol2, 'col2')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
