import { useState } from 'react';
import PropTypes from 'prop-types';

const ShowMoreText = ({ text, maxLength = 200 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const shouldTruncate = text.length > maxLength;
  const displayText = isExpanded || !shouldTruncate ? text : text.slice(0, maxLength) + '...';

  return (
    <div className="text-[18px] text-gray-700 leading-relaxed text-justify">
      <p>{displayText}</p>
      {shouldTruncate && (
        <button
          className="text-gray-600 mt-2 font-medium hover:underline"
          onClick={() => setIsExpanded(prev => !prev)}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ShowMoreText;

ShowMoreText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};