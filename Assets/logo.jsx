import React from 'react';

const Logo = () => {
  const dots = Array.from({ length: 12 });

  return (
    <div className="flex items-center justify-center space-x-6">
      {/* Circle Dot Pattern */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {dots.map((_, index) => {
          const angle = (index / dots.length) * 2 * Math.PI;
          const radius = 40; // Adjusted radius for more accurate positioning
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <span
              key={index}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                backgroundColor: index % 2 === 0 ? '#5AC7E6' : '#7B61FF',
              }}
              className="absolute w-4 h-4 rounded-full"
            />
          );
        })}
      </div>
      {/* Logo Text */}
      <h1 className="text-4xl font-extrabold text-indigo-900 tracking-wide">
        DevDiaries
      </h1>
    </div>
  );
};

export default Logo;
