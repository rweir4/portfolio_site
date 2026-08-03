import BulletPoint from './BulletPoint';

// Controlled list of expandable bullets. State lives in the parent so callers
// can decide the scope of "one open at a time" (e.g. Experience keeps a single
// expanded bullet across all companies).
const BulletList = ({ bullets, expandedBullet, setExpandedBullet }) =>
  bullets.map((bullet) => (
    <BulletPoint
      key={bullet.title}
      bulletPoint={bullet}
      isExpanded={expandedBullet === bullet.title}
      setExpandedBullet={setExpandedBullet}
    />
  ));

export default BulletList;
