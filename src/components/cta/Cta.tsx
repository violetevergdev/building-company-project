const Cta = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta_wrapper">
          <div className="cta_text">
            <h2 className="cta-title">{title}</h2>
            <p className="cta-subtitle">{subtitle}</p>
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
