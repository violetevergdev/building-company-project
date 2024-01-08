import { services } from "../../data/services.ts";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="title-2">ЧЕМ МЫ ЗАНИМАЕМСЯ?</h2>

        <div className="services_cards">
          <ul className="services_cards-list">
            {services?.map((item) => (
              <li className="services_list-item" key={item.id}>
                <img src={item.img} alt={item.alt} />
                <h3 className="services_item-title">{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
