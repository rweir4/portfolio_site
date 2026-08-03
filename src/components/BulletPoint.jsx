import React from 'react';

const BulletPoint = ({ bulletPoint, isExpanded, setExpandedBullet }) => {
  const { title, expandedBody } = bulletPoint;
  const iconName = isExpanded ? 'open_circle' : 'closed_circle';

  const toggle = () => setExpandedBullet(isExpanded ? null : title);

  return (
    <div className="mb-3">
      {/* Header row - stays full width in both states (no width morph) */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isExpanded}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-white cursor-pointer transition-colors duration-200 hover:bg-white/10 focus:outline-none"
      >
        <img
          src={`images/${iconName}.png`}
          className="w-6 h-6 flex-shrink-0"
          alt=""
          aria-hidden="true"
        />
        <span className="flex-1 leading-snug">{title}</span>
      </button>

      {/* Collapsible body - grid-rows 0fr->1fr animates height:auto smoothly */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="experience-item rounded-lg shadow-lg p-6 mt-2 ml-9">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white leading-relaxed">{expandedBody}</span>
            </div>
            <button
              onClick={() => setExpandedBullet(null)}
              className="mt-6 px-4 py-2 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulletPoint;
