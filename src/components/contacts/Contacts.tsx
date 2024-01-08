import { contacts } from "../../data/contacts.ts";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="title-2">КОНТАКТЫ</h2>

        <div className="contacts_cards">
          <ul className="contacts_list">
            {contacts?.map((item) => (
              <li className="contacts_list-item" key={item.id}>
                <img
                  src={item.icon}
                  alt="map icon"
                  className="contacts_item-icon"
                />

                <h3 className="contacts_item-title">{item.title}</h3>

                <p
                  className="contacts_item-subtitle"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
