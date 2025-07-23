import React from 'react';

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Purple glow */}
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-purple-700 opacity-40 rounded-full blur-[100px]"></div>

      {/* Pink glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-500 opacity-30 rounded-full blur-[80px]"></div>

      {/* Blue glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full blur-[120px]"></div>
    </div>
  );
};

export default GradientBackground;
