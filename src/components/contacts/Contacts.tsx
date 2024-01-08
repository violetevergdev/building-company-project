const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="title-2">КОНТАКТЫ</h2>

        <div className="contacts_cards">
          <ul className="contacts_list">
            <li className="contacts_list-item">
              <img
                src="/img/contacts/map.svg"
                alt="map icon"
                className="contacts_item-icon"
              />

              <h3 className="contacts_item-title">АДРЕС:</h3>
              <p className="contacts_item-subtitle">
                НЕВСКИЙ ПРОСПЕКТ 140, ОФИС 140-142
              </p>
            </li>
            <li className="contacts_list-item">
              <img
                src="./img/contacts/phone.svg"
                alt="phone icon"
                className="contacts_item-icon"
              />

              <h3 className="contacts_item-title">АДРЕС:</h3>
              <p className="contacts_item-subtitle">
                НЕВСКИЙ ПРОСПЕКТ 140, ОФИС 140-142
              </p>
            </li>
            <li className="contacts_list-item">
              <img
                src="./img/contacts/watch.svg"
                alt="watch icon"
                className="contacts_item-icon"
              />

              <h3 className="contacts_item-title">АДРЕС:</h3>
              <p className="contacts_item-subtitle">
                НЕВСКИЙ ПРОСПЕКТ 140, ОФИС 140-142
              </p>
            </li>
            <li className="contacts_list-item">
              <img
                src="./img/contacts/mail.svg"
                alt="mail icon"
                className="contacts_item-icon mail"
              />

              <h3 className="contacts_item-title">АДРЕС:</h3>
              <p className="contacts_item-subtitle">
                НЕВСКИЙ ПРОСПЕКТ 140, ОФИС 140-142
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
