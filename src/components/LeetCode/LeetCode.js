import React from 'react';
import './LeetCode.css';

// Update this with your LeetCode username
const LEETCODE_USERNAME = 'Anand930singh';

function LeetCode() {

  return (
    <div className='leetcodeContainer' id='leetcode'>
      <div className='leetcodeHeading'>
        <div>LeetCode Statistics</div>
      </div>

      <div className='leetcodeCardContainer'>
        <div className='leetcodeCard'>
          <img 
            src={`https://leetcode-stats.vercel.app/api?username=${LEETCODE_USERNAME}&theme=dark`}
            alt="LeetCode Stats"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LeetCode;

