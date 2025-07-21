import { Joystick } from "lucide-react";
import { Lock } from "lucide-react";
export const TextWelcome = () => {
  return (
    <section className="text-center max-w-[1152px] mx-auto">
      <div className="coin-flip max-w-[800px] mx-auto">
        <img
          src="/images/coin.png"
          alt="coin"
          width={200}
          height={200}
          className="block mx-auto mb-1"
        />
        <h1 className="font-orbitron font-black text-[6rem] leading-[1] m-[0]">
          <span className="neon-text-green">WELCOME</span><br />
          <span className="neon-text-blue">TO MY</span><br />
          <span className="neon-text-purple">PORTFOLIO</span>
        </h1>

        <div className="flex items-center justify-center space-x-4 mb-6">
          <div
            className="flex-1 h-px"
            style={{
              background: 'linear-gradient(to right, transparent, #4ade80, transparent)',
            }}
          />
          <Joystick className="w-8 h-8 text-neon-green animate-glow" />
          <div
            className="flex-1 h-px"
            style={{
              background: 'linear-gradient(to right, transparent, #4ade80, transparent)',
            }}
          />
        </div>

        
      </div>
      <p className="text-[1.5rem] md:text-[2rem] font-courier text-foreground-80 mb-[2rem] max-w-[780px] mx-[auto] leading-[1.5]">
          Experience a Portfolio in the style of early 2000s nostalgia. 
        </p>

        <div className="flex gap-[2rem] justify-center mb-[2rem]">
          <button className="retro-button flex items-center gap-[0.5rem] neon-text-green ">
            <Lock className="w-3 h-3" />
            Locked
          </button>
          <button className="retro-button border-neon-purple neon-text-purple hover:bg-neon-purple">
            Stay Tuned...
          </button>
        </div>

            <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent flex-1 max-w-32"></div>
        
            <div className="h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent flex-1 max-w-32"></div>
          </div>

          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Remember, don't forget to remember.
          </p>
        </div>
            <div className="flex items-center justify-center space-x-4 mb-6">
          <div
            className="flex-1 h-px"
            style={{
              background: 'linear-gradient(to right, transparent, #00ccff, transparent)',
            }}
          />
         
          <div
            className="flex-1 h-px"
            style={{
              background: 'linear-gradient(to right, transparent, #00ccff, transparent)',
            }}
          />
        </div>


        
      
    </section>
  );
};
