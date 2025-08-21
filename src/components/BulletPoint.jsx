import React, { useState } from 'react';

const BulletPoint = ({ bulletPoint, index, isExpanded, setExpandedBullet }) => {
  const { title, expandedBody } = bulletPoint;
  const iconName = isExpanded ? 'open_circle' : 'closed_circle';

  return (
    <div className={`flex items-start transition-all duration-300 my-3 ${isExpanded ? 'h-auto' : 'h-12'}`}>
      {/* Company circle - much smaller when closed */}
      <div
        className={`relative flex-shrink-0 text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out hover:shadow-lg ${
          isExpanded 
            ? 'w-16 h-16' 
            : 'w-full h-12 hover:scale-110 px-5'
        }`}
        onClick={() => isExpanded ? setExpandedBullet(null) : setExpandedBullet(title)}
      >
        <div className={`flex absolute ${isExpanded ? 'left-15' : 'left-6'}`}>
          <img 
            src={`../../${iconName}.png`}
            className={`transition-all duration-300 ${
              isExpanded ? 'w-8 h-8' : 'w-6 h-6 mr-3'
            }`}
            alt="Company logo"
            />
          {!isExpanded && <div className="text-white text-wrap">{title}</div>}
        </div>
      </div>
      {/* Expanded Text - only takes space when expanded */}
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded 
            ? 'ml-4 max-w-2xl opacity-100 max-h-screen' 
            : 'ml-0 max-w-0 opacity-0 max-h-0'
        }`}
      >
        <div className="experience-item rounded-lg shadow-lg p-6 min-w-96">
          <div 
            key={index}
            className={`flex items-start transition-all duration-300`}
            style={{
              transitionDelay: isExpanded ? `${index * 100}ms` : '0ms',
              opacity: isExpanded ? 1 : 0,
              transform: isExpanded ? 'translateY(0)' : 'translateY(10px)'
            }}
          >
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
  );
};

export default BulletPoint;