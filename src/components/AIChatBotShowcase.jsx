const ProjectCard = ({ category }) => (
  <div className='showcase-card flex flex-1 flex-col sm:flex-row gap-4'>
    <img src={`images/${category.icon}`} className="h-24 w-24 object-contain sm:mx-0 sm:h-20 sm:w-auto" />
    <div>
      <h3 className="project-title">{category.title}</h3>
      <div>
        {category.tooltipContent?.map(info => (
          <p key={info}>{info}</p>
        ))}
      </div>
    </div>
  </div>
);

const AIChatBotShowcase = ({ projectInfo, title }) => (
  <div className='project-showcase'>
    <div className="section-head">
      <span className="eyebrow">Under the hood</span>
      <h2 className="section-title">{title}</h2>
    </div>
    <div className="project-highlight flex flex-col sm:flex-row gap-8">
      {projectInfo.map(category => (
        <ProjectCard key={category.title} category={category} />
      ))}
    </div>
  </div>
);

export default AIChatBotShowcase;