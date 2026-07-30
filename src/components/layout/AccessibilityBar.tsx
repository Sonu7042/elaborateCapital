import React, { useState, useEffect } from 'react';

const AccessibilityBar = () => {
  // Initialize language from google translate cookie if present
  const getInitialLang = () => {
    if (document.cookie.includes('googtrans=/en/hi')) return 'Hindi';
    return 'English';
  };

  const [lang, setLang] = useState(getInitialLang());
  const [fontSize, setFontSize] = useState(16); // Default 16px
  const [highContrast, setHighContrast] = useState(false);

  // Apply font size globally
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Apply high contrast globally
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }
  }, [highContrast]);

  const handleSkipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleZoomIn = () => setFontSize(prev => Math.min(prev + 2, 24)); // max 24px
  const handleZoomOut = () => setFontSize(prev => Math.max(prev - 2, 12)); // min 12px
  const handleZoomReset = () => setFontSize(16); // normal 16px

  const toggleContrast = () => setHighContrast(prev => !prev);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setLang(selected);
    
    if (selected === 'English') {
      document.cookie = `googtrans=/en/en; path=/`;
      document.cookie = `googtrans=/en/en; path=/; domain=${window.location.hostname}`;
    } else if (selected === 'Hindi') {
      document.cookie = `googtrans=/en/hi; path=/`;
      document.cookie = `googtrans=/en/hi; path=/; domain=${window.location.hostname}`;
    }
    
    window.location.reload();
  };

  return (
    <div className="w-full bg-[#eef0f2] border-b border-gray-200" aria-label="Accessibility tools">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-8 flex justify-end py-1">
        {/* The Black Thick Bordered Container from Image */}
        <div className="flex bg-black p-1 gap-1 w-fit shadow-sm rounded-sm">
          
          {/* Language Selector */}
          <div className="bg-white px-2 py-0.5 flex items-center min-w-32">
             <select 
               value={lang}
               onChange={handleLangChange}
               className="w-full bg-transparent outline-none cursor-pointer text-[13px] font-medium appearance-none pr-4"
               aria-label="Select Language"
               style={{ 
                 backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" stroke="black" stroke-width="0.5" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>')`, 
                 backgroundRepeat: 'no-repeat', 
                 backgroundPosition: 'right center' 
               }}
             >
               <option value="English">English</option>
               <option value="Hindi">Hindi</option>
             </select>
          </div>

          <button 
            onClick={handleSkipToMain}
            className="bg-white px-3 py-0.5 text-[13px] font-medium hover:bg-gray-100 transition-colors"
            aria-label="Skip to main content"
          >
            Skip to main content
          </button>

          <button 
            onClick={handleZoomIn}
            className="bg-white px-2.5 py-0.5 text-[14px] font-bold hover:bg-gray-100 transition-colors"
            aria-label="Increase font size"
          >
            A+
          </button>

          <button 
            onClick={handleZoomOut}
            className="bg-white px-2.5 py-0.5 text-[12px] font-bold hover:bg-gray-100 transition-colors"
            aria-label="Decrease font size"
          >
            A-
          </button>

          <button 
            onClick={handleZoomReset}
            className="bg-white px-3 py-0.5 text-[13px] font-bold hover:bg-gray-100 transition-colors"
            aria-label="Reset font size"
          >
            A
          </button>

          <button 
            onClick={toggleContrast}
            className={`px-3 py-0.5 text-[13px] font-medium transition-colors ${highContrast ? 'bg-black text-white hover:bg-gray-900 border border-white' : 'bg-white text-black hover:bg-gray-100'}`}
            aria-label="Toggle high contrast"
          >
            Contrast
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default AccessibilityBar;