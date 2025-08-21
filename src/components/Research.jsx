import { useState } from 'react';
import BulletPoint from "./BulletPoint"

const PAPERS = [
  {
    title: "The quinic acid derivative KZ-41",
    expandedBody: "The quinic acid derivative KZ-41 prevents glucose-induced caspase-3 activation in retinal endothelial cells through an IGF-1 receptor dependent mechanism",
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0180808"
  }
]

const ResearchPapers = () => {
  const [expandedBullet, setExpandedBullet] = useState(null);
  
  return (
    <div>
      {PAPERS.map((paper, index) => {
        const isExpanded = expandedBullet === paper.title;
        return (
          <BulletPoint
          bulletPoint={paper}
          index={1}
          isExpanded={isExpanded}
          setExpandedBullet={setExpandedBullet}
          // children={paper.link}
          />
        )
      })}
    </div>
  )
}

export default ResearchPapers;