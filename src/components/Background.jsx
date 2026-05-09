import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030014]">
      {/* 1. The Engineering Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 2. Moving Gradient "Blobs" (The "Things" like your image) */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] animate-blob rounded-full bg-purple-600/50 blur-[120px] mix-blend-screen"></div>
      <div className="absolute top-[20%] right-[-5%] h-[600px] w-[600px] animate-blob [animation-delay:2s] rounded-full bg-cyan-600/50 blur-[120px] mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] animate-blob [animation-delay:4s] rounded-full bg-pink-600/40 blur-[120px] mix-blend-screen"></div>

      {/* 3. Subtle Noise Texture (to match the grain in your reference image) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 4. A slight vignette to focus the center */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,0,20,0.8)_100%)]"></div>
    </div>
  );
};

export default Background;