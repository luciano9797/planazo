import React, { useState } from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import ShareButton from './components/ShareButton';

const App: React.FC = () => {
  const [isPlanOn, setIsPlanOn] = useState(false);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center p-4 font-sans bg-slate-900 text-white text-center">
      
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold tracking-tight">
          Tirar plan de red?
        </h1>

        <ToggleSwitch
          checked={isPlanOn}
          onChange={setIsPlanOn}
        />

        {isPlanOn && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <p className="text-lg font-semibold text-green-400 animate-pulse">¡Plan activado! 🚀</p>
          </div>
        )}
      </div>

      <div className="absolute bottom-10 px-4 w-full max-w-sm">
        <ShareButton planStatus={isPlanOn} />
      </div>

    </main>
  );
};

export default App;