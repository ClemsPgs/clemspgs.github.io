import { projects } from "./data/projects";
import "./App.css";

function getInstitutionClass(institution) {
  if (institution.toLowerCase().includes("madrid")) {
    return "inst-uam";
  }
  return "inst-tn";
}

function getTechClass(tech) {
  const t = tech.toLowerCase();

  if (t.includes("python") || t === "poo") {
    return "tech-python";
  }
  if (
    t === "c" ||
    t.includes("sdl") ||
    t.includes("ncurses") ||
    t.includes("makefile") ||
    t.includes("bash")
  ) {
    return "tech-c";
  }
  if (
    t.includes("posix") ||
    t.includes("mémoire") ||
    t.includes("files") ||
    t.includes("sémaphores") ||
    t.includes("concurrence") ||
    t.includes("unix")
  ) {
    return "tech-sys";
  }
  if (
    t.includes("pytorch") ||
    t.includes("learning") ||
    t.includes("ia") ||
    t.includes("dijkstra") ||
    t.includes("compilation") ||
    t.includes("ll(1)") ||
    t.includes("ast")
  ) {
    return "tech-ai";
  }
  return "tech-web";
}

function App() {
  return (
    <div className="container">
      <header className="hero">
        <span className="badge-role">Étudiant ingénieur — TELECOM Nancy</span>
        <h1>Clément PIGASSOU</h1>
        <p>
          Actuellement étudiant en troisième année à TELECOM Nancy, je recherche un stage de fin
d’études pour un cursus ingénieur. Spécialisé en Cybersécurité et en Intelligence Artificielle,
je suis disponible de mars à septembre 2027.
        </p>
        <div className="hero-links">
          <a href="mailto:clement.pigassou@telecomnancy.eu">Me contacter</a>
        </div>
      </header>

      <main>
        <h2>Projets</h2>
        <div className="projects-grid">
          {projects.map((project) => {
            const instClass = getInstitutionClass(project.institution);
            return (
              <article
                key={project.id}
                className={`project-card card-${instClass}`}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`Aperçu de ${project.title}`}
                    className="project-image"
                  />
                )}
                <div className="project-content">
                  <div className="project-meta">
                    <span className={`project-institution ${instClass}`}>
                      {project.institution}
                    </span>
                    <span className="project-details">
                      {project.period} • {project.teamSize}
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className={`tech-badge ${getTechClass(item)}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {(project.githubUrl || project.demoUrl) && (
                    <div className="project-links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Code source →
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Démo en ligne →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Clément PIGASSOU</p>
      </footer>
    </div>
  );
}

export default App;