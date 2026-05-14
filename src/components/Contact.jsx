import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-[#0a0a0a] p-6 text-white flex items-center border-t border-white/5">
      <div className="flex flex-col justify-center max-w-screen-xl mx-auto w-full py-12">
        
        <div className="pb-8 text-center">
          <p className="text-sm text-gray-400 tracking-widest uppercase font-mono">// Start a conversation</p>
          <h2 className="text-4xl font-extrabold inline-block border-b-4 border-primary mt-1">Contact Me</h2>
        </div>

        <div className="flex justify-center items-center mt-4">
          <form 
            action="https://formsubmit.co/binupanuransith@gmail.com" 
            method="POST" 
            className="flex flex-col w-full max-w-xl bg-[#111111] p-8 rounded-xl border border-white/5 shadow-2xl gap-6"
          >
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                className="w-full p-3.5 bg-[#161616] border border-white/5 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm" 
                required
              />
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                className="w-full p-3.5 bg-[#161616] border border-white/5 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm" 
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message</label>
              <textarea 
                name="message" 
                rows="6" 
                placeholder="Enter your message" 
                className="w-full p-3.5 bg-[#161616] border border-white/5 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                required
              ></textarea>
            </div>

            <button className="w-full bg-primary text-black font-extrabold text-sm py-4 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-primary/20 mt-2 tracking-wide uppercase">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;