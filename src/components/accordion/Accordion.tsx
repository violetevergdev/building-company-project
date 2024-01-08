import { questions } from "../../data/questions.ts";
import { useState } from "react";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };
  return (
    <div className="accordion">
      {questions?.map((item, index) => (
        <div className="item">
          <div
            className={selected === index ? "title iconOpen" : "title"}
            onClick={() => toggle(index)}
          >
            <h2>{item.question}</h2>
          </div>
          <div className={selected === index ? "content show" : "content"}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
