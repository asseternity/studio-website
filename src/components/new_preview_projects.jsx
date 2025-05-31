import { useEffect, useState } from 'react';

export default function NewPreviewProjects({ projects }) {
  const [projectSets, setProjectSets] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    let arrayOfProjectSets = [];
    const count = Array.isArray(projects) ? projects.length : 0;
    let totalProjectSets = Math.ceil(count / 2);
    for (let i = 0; i < totalProjectSets; i++) {
      let iterationProjectSet = [];
      if (i === totalProjectSets - 1 && projects.length % 2 !== 0) {
        iterationProjectSet = projects.slice(i * 2, projects.length);
      } else {
        iterationProjectSet = projects.slice(i * 2, i * 2 + 2);
      }
      arrayOfProjectSets.push(iterationProjectSet);
    }
    setProjectSets(arrayOfProjectSets);
  }, [projects]);

  const handleArrow = (direction) => {
    if (direction === 'left') {
      const newIndex =
        currentPageIndex === 0 ? projectSets.length - 1 : currentPageIndex - 1;
      setCurrentPageIndex(newIndex);
    } else if (direction === 'right') {
      const newIndex =
        currentPageIndex === projectSets.length - 1 ? 0 : currentPageIndex + 1;
      setCurrentPageIndex(newIndex);
    }
  };

  return (
    <div className="preview_projects_content">
      <h2>Projects</h2>
      <div
        className="preview_projects_track"
        style={{
          transform: `translateX(-${currentPageIndex * 100}%)`,
        }}
      >
        {projectSets.map((projectSetObject, index1) => (
          <div key={'outer' + index1} className="preview_projects_cards">
            {projectSetObject.map((projectObject, index2) => (
              <div
                key={'inner' + index2}
                className="preview_project"
                style={{ backgroundImage: `url(${projectObject.image})` }}
              >
                {projectObject.title}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="preview_projects_buttons">
        <button onClick={() => handleArrow('left')}>{'<<'}</button>
        <button onClick={() => handleArrow('right')}>{'>>'}</button>
      </div>
    </div>
  );
}
