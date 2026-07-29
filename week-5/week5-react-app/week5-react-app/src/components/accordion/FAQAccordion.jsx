import { useState } from 'react'
import faqData from './faqData'

// Day 2: useState tracks which single item is expanded.
// Storing just the *id* of the open item (not a boolean per item) is what
// guarantees only one item can be open at a time.
function FAQAccordion() {
  const [openId, setOpenId] = useState(null)

  function handleToggle(id) {
    setOpenId((prevId) => (prevId === id ? null : id))
  }

  return (
    <div className="faq-accordion">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item) => {
        const isOpen = item.id === openId
        return (
          <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.id}>
            <button
              className="faq-question"
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
            >
              {item.question}
              <span className="faq-icon">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="faq-answer">{item.answer}</div>}
          </div>
        )
      })}
    </div>
  )
}

export default FAQAccordion
