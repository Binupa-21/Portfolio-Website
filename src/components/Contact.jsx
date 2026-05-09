import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-900 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Get In Touch</p>
          <p className="py-6 text-gray-400">// 04. Submit the form below to say hi</p>
        </div>

        <div className="flex justify-center items-center">
          <form 
            action="https://formsubmit.co/binupanuransith@gmail.com" 
            method="POST" 
            className="flex flex-col w-full md:w-1/2 bg-slate-900/50 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300"
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              className="p-3 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-primary transition-colors" 
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              className="my-4 p-3 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-primary transition-colors" 
              required
            />
            <textarea 
              name="message" 
              rows="8" 
              placeholder="Enter your message" 
              className="p-3 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-primary transition-colors"
              required
            ></textarea>

            <button className="text-black font-bold bg-gradient-to-r from-primary to-cyan-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300 shadow-lg shadow-primary/30">
              Let's Talk
            </button>
          </form>
        </div>
        
        {/* Terminal Text Decoration */}
        <div className="hidden md:block mx-auto mt-10 text-xs font-mono text-gray-500">
            <p>$ echo "Waiting for your message..."</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;