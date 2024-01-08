const Cta = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta_wrapper">
          <div className="cta_text">
            <h2 className="cta-title">САМЫЕ УМНЫЕ ПРОЕКТЫ</h2>
            <p className="cta-subtitle">
              РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!
            </p>
          </div>

          <div className="cta_action">
            <button className="btn">
              <span className="cta-icon">
                <img src="./img/mail.svg" alt="mail icon" />
              </span>
              ВАШ ЗАПРОС
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
