import { partners } from "../../data/partners.ts";

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="partners_wrapper">
          <h2 className="title-2 partners-title">наши партнеры</h2>

          <div className="partners_cards">
            <ul className="partners_list">
              {partners?.map((item) => (
                <li className="partners_list-item" key={item.id}>
                  <img src={item.img} alt={item.alt} className="partners-img" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
