import { useState } from 'react';
import BulletList from "./BulletList";

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
      <BulletList
        bullets={PAPERS}
        expandedBullet={expandedBullet}
        setExpandedBullet={setExpandedBullet}
      />
    </div>
  )
}

export default ResearchPapers;