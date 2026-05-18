import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects for the blobs
  const y1 = useTransform(scrollY, [0, 3000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 3000], [0, 250]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      {/* 1. The Engineering Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 2. Moving Gradient "Blobs" with Parallax Effect */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] animate-blob rounded-full bg-primary/20 blur-[120px] mix-blend-screen"
      ></motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[20%] right-[-5%] h-[600px] w-[600px] animate-blob [animation-delay:2s] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen"
      ></motion.div>
      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] animate-blob [animation-delay:4s] rounded-full bg-yellow-600/10 blur-[120px] mix-blend-screen"
      ></motion.div>

      {/* 3. Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 4. A slight vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)]"></div>
    </div>
  );
};

export default Background;