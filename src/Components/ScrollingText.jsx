import React from "react";
import '../styles.css'; // Ensure this is correctly pointing to your styles file

const ScrollingText = () => {
  return (
    <div className="overflow-hidden w-full bg-amber-400 py-4 border-b-4">
      <div className="scrolling-text text-4xl font-bold font-[Anton] text-black inline-block">
        {/* Duplicate the text for seamless looping */}
        FIND US AT ⦿ WALMART ⦿ TARGET ⦿ 7-ELEVEN ⦿ KROGER ⦿ SAM'S CLUB ⦿ ALBERTSONS &nbsp;
        FIND US AT ⦿ WALMART ⦿ TARGET ⦿ 7-ELEVEN ⦿ KROGER ⦿ SAM'S CLUB ⦿ ALBERTSONS &nbsp;
        FIND US AT ⦿ WALMART ⦿ TARGET ⦿ 7-ELEVEN ⦿ KROGER ⦿ SAM'S CLUB ⦿ ALBERTSONS &nbsp;
        FIND US AT ⦿ WALMART ⦿ TARGET ⦿ 7-ELEVEN ⦿ KROGER ⦿ SAM'S CLUB ⦿ ALBERTSONS
        {/* Repeat the same text to avoid gap */}
        FIND US AT ⦿ WALMART ⦿ TARGET ⦿ 7-ELEVEN ⦿ KROGER ⦿ SAM'S CLUB ⦿ ALBERTSONS &nbsp;
        FIND US AT ⦿ WALMART ⦿ TARGET ⦿ 7-ELEVEN ⦿ KROGER ⦿ SAM'S CLUB ⦿ ALBERTSONS &nbsp;
        FIND US AT ⦿ WALMART ⦿ TARGET ⦿ 7-ELEVEN ⦿ KROGER ⦿ SAM'S CLUB ⦿ ALBERTSONS &nbsp;
        FIND US AT ⦿ WALMART ⦿ TARGET ⦿ 7-ELEVEN ⦿ KROGER ⦿ SAM'S CLUB ⦿ ALBERTSONS
      </div>
    </div>
  );
};

export default ScrollingText;
