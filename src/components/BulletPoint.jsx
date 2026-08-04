import React from 'react';

const BulletPoint = ({ bulletPoint, isExpanded, setExpandedBullet }) => {
  const { title, expandedBody } = bulletPoint;

  const toggle = () => setExpandedBullet(isExpanded ? null : title);

  return (
    <div className="bl-item">
      {/* Header row - toggles the expandable body below */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isExpanded}
        className="bl-summary"
      >
        <span className="bl-marker" aria-hidden="true">{isExpanded ? '–' : '+'}</span>
        <span className="bl-title">{title}</span>
      </button>

      {/* Collapsible body - grid-rows 0fr->1fr animates height:auto smoothly */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="bl-body">{expandedBody}</p>
        </div>
      </div>
    </div>
  );
};

export default BulletPoint;
