import React from 'react';

const SectionHeader = ({ title, subtitle, light }) => (
    <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-14 px-4">
        {subtitle && (
            <h4 className={`text-[11px] md:text-[13px] font-bold tracking-[0.3em] uppercase mb-3 ${light ? 'text-[#C8A97E]' : 'text-[#C8A97E]'}`}>
                {subtitle}
            </h4>
        )}
        <h2 className={`font-['Cinzel',serif] text-2xl md:text-4xl font-bold tracking-wider mb-4 uppercase ${light ? 'text-white' : 'text-[#4A1521]'}`}>
            {title}
        </h2>
        <div className="flex items-center justify-center gap-2 opacity-80">
            <div className={`w-12 md:w-20 h-[1px] ${light ? 'bg-[#C8A97E]' : 'bg-[#C8A97E]'}`}></div>
            <div className={`w-2 h-2 rotate-45 border flex items-center justify-center ${light ? 'border-[#C8A97E]' : 'border-[#C8A97E]'}`}>
                <div className={`w-1 h-1 ${light ? 'bg-[#C8A97E]' : 'bg-[#C8A97E]'}`}></div>
            </div>
            <div className={`w-12 md:w-20 h-[1px] ${light ? 'bg-[#C8A97E]' : 'bg-[#C8A97E]'}`}></div>
        </div>
    </div>
);

export default SectionHeader;