import React from "react";

interface MobileFrameProps {
  children: React.ReactNode;
}

export default function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-0 md:p-6 bg-[#070b0e] relative overflow-hidden">
      
      {/* Dynamic Animated Green Vector Doodle Background of Telegram */}
      <div 
        className="absolute inset-0 z-0 bg-[#07090b]"
        style={{
          backgroundColor: "#070a0e"
        }}
      >
        {/* Crisp Masked Layer to produce perfect high-fidelity colored lines */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: "#163f25",
            WebkitMaskImage: "url('https://telegram.org/img/bg_pattern.svg')",
            maskImage: "url('https://telegram.org/img/bg_pattern.svg')",
            WebkitMaskRepeat: "repeat",
            maskRepeat: "repeat",
            WebkitMaskSize: "420px",
            maskSize: "420px",
            opacity: 0.38
          }}
        />
        {/* Soft atmospheric gradient glows to add beautiful depth */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.04] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#24a1de]/[0.02] blur-3xl" />
      </div>

      {/* Responsive Content Wrapper: Fits perfectly on mobile and centers cleanly as a standalone card on desktop */}
      <div className="relative z-10 w-full max-w-[380px] min-h-screen md:min-h-0 flex flex-col justify-center overflow-visible">
        
        {/* Client Workspace Contents */}
        <div className="w-full flex-1 relative flex flex-col justify-center py-8">
          {children}
        </div>

      </div>
    </div>
  );
}
