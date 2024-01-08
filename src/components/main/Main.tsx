import { projects } from "../../data/projects.ts";

const Main = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="title-2 projects-title">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>

        <div className="projects_cards">
          <ul className="cards_list">
            {projects?.map((item) => (
              <li className="project_item" key={item.id}>
                <img src={item.img} alt="" className="project-image" />
                <h3 className="project-title">{item.title}</h3>
                <p className="project-description">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Main;
