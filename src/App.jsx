import { projects } from './data/projects';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Clément — Développeur Web</h1>
        <p>
          Bienvenue sur mon portfolio. Voici une sélection de mes projets
          personnels et techniques.
        </p>
        <div className="hero-links">
          <a href="https://github.com/clemspgs" target="_blank" rel="noreferrer">
            Mon GitHub
          </a>
          <a href="mailto:ton-email@exemple.com">Me contacter</a>
        </div>
      </header>

      <main>
        <h2>Mes projets</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {project.image && (
                <img
                  src={project.image}
                  alt={`Aperçu de ${project.title}`}
                  className="project-image"
                />
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((item) => (
                    <span key={item} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      Code source
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      Voir le site
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
