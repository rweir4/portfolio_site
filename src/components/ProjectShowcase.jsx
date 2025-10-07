const ProjectCard = ({ category }) => {
  return (
    <div className='showcase-card'>
      <img src={`images/${category.icon}`} />
      <div>
        <h3 className="project-title">{category.title}</h3>
        <div>
          {category.tooltipContent?.map(info => {
            return (
              <p>{info}</p>
            );
          })}
        </div>
      </div>
    </div>
  )
}

const ProjectShowcase = ({ projectInfo, title }) => {
  return (
    <div className='project-showcase'>
      <h2 className="section-title">{title}</h2>
      <div className="project-highlight">
        {projectInfo.map(category => {
          return (
            <ProjectCard category={category} />
          );
        })}
      </div>
    </div>
  )
}

export default ProjectShowcase;