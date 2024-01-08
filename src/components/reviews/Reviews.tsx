import { reviews } from "../../data/reviews.ts";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <h2 className="title-2">отзывы о работе с нами</h2>

        <div className="reviews_cards">
          <ul className="reviews_list">
            {reviews?.map((item) => (
              <li className="reviews_list-item" key={item.id}>
                <div className="reviews_item-block">
                  <p className="reviews_item-description">{item.description}</p>
                </div>

                <h3 className="reviews_item-title">
                  {item.author},<span className="accent"> {item.company}</span>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
