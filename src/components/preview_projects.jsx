import { useState } from 'react';

export default function PreviewProjects({ projects }) {
  const [projectSet, setProjectSet] = useState(0);
  const [projectsShown, setProjectsShown] = useState([
    projects[0],
    projects[1],
  ]);

  const handleArrowButton = (direction) => {
    const totalProjectSets = Math.ceil(projects.length / 2);
    const lastProjectSetIndex = totalProjectSets - 1;

    let newSet = projectSet;

    if (direction === 'left') {
      newSet = projectSet === 0 ? lastProjectSetIndex : projectSet - 1;
    } else {
      newSet = projectSet === lastProjectSetIndex ? 0 : projectSet + 1;
    }

    setProjectSet(newSet);

    const startIndex = newSet * 2;
    const newProjectsArray = projects.slice(startIndex, startIndex + 2);
    setProjectsShown(newProjectsArray);
  };

  return (
    <div className="preview_projects_content">
      <h2>Projects</h2>
      <div className="preview_projects_cards">
        {projectsShown.map((projectObject, index) => (
          <div
            key={index}
            className="preview_project"
            style={{ backgroundImage: `url(${projectObject.image})` }}
          >
            {projectObject.title}
          </div>
        ))}
      </div>
      <div className="preview_projects_buttons">
        <button onClick={() => handleArrowButton('left')}>{'<<'}</button>
        <button onClick={() => handleArrowButton('right')}>{'>>'}</button>
      </div>
    </div>
  );
}
