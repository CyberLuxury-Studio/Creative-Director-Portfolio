export function Contact() {
  return (
    <section className="py-32 px-6 md:px-24 bg-surface-low flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-3xl bg-black border border-tertiary/30 p-8 md:p-12 font-mono shadow-[0_0_50px_rgba(0,255,65,0.05)] relative overflow-hidden">
        {/* Terminal Scanline overlay inside card */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:100%_4px]"></div>

        <div className="flex gap-2 mb-8 border-b border-tertiary/20 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-tertiary/50"></div>
        </div>

        <h2 className="text-tertiary text-xl md:text-2xl mb-8 flex items-center">
          <span className="mr-4">guest@anomaly:~$</span>
          <span>./initiate_contact.sh</span>
          <span className="w-3 h-6 bg-tertiary animate-pulse ml-2"></span>
        </h2>

        <form className="space-y-8 relative z-10 text-tertiary">
          <div className="group">
            <label className="block text-sm mb-2 opacity-70">ENT_NAME:</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-tertiary/30 py-2 focus:border-tertiary focus:shadow-[0_4px_15px_-3px_rgba(0,255,65,0.3)] transition-all"
              placeholder="Enter your designation..."
            />
          </div>
          <div className="group">
            <label className="block text-sm mb-2 opacity-70">COM_LINK:</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-tertiary/30 py-2 focus:border-tertiary focus:shadow-[0_4px_15px_-3px_rgba(0,255,65,0.3)] transition-all"
              placeholder="Enter comms channel..."
            />
          </div>
          <div className="group">
            <label className="block text-sm mb-2 opacity-70">DATA_PAYLOAD:</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-tertiary/30 py-2 focus:border-tertiary focus:shadow-[0_4px_15px_-3px_rgba(0,255,65,0.3)] transition-all resize-none"
              placeholder="Transmit coordinates..."
            />
          </div>
          <button type="submit" className="text-black bg-tertiary px-8 py-3 font-bold hover:bg-white transition-colors uppercase tracking-widest mt-8">
            Execute_
          </button>
        </form>
      </div>
    </section>
  );
}
