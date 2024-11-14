import mobileDividerIcon from '/pattern-divider-mobile.svg';
import desktopDividerIcon from '/pattern-divider-desktop.svg';
import diceIcon from '/icon-dice.svg';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [{ id, advice }, setAdvice] = useState({});
  const [generateAdvice, setGenerateAdvice] = useState(false);
  const [animate, setAnimate] = useState(false);

  function handleGenerateAdvice() {
    setGenerateAdvice(!generateAdvice);
  }

  useEffect(() => {
    async function getAdvice() {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();

      const { id, advice } = data.slip;
      setAdvice({ id, advice });
      setAnimate(true);
    }
    getAdvice();
  }, [generateAdvice]);

  return (
    <div className='bg-grey px-6 sm:px-8 text-center mx-4 rounded-lg flex flex-col items-center pt-10 sm:max-w-lg'>
      <h2
        className={`text-green text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] mb-6 ${
          animate ? 'animate-expand' : ''
        }`}
        onAnimationEnd={() => setAnimate(false)}
      >
        Advice #{id}
      </h2>
      <blockquote>
        <p
          className={`text-white text-2xl sm:text-[28px] sm:leading-[2.2rem] font-bold ${
            animate ? 'animate-moveUp' : ''
          }`}
          onAnimationEnd={() => setAnimate(false)}
        >
          &ldquo;{advice}&rdquo;
        </p>
      </blockquote>
      <img
        src={mobileDividerIcon}
        alt='mobile divider'
        className='block sm:hidden mb-12 mt-6'
      />
      <img
        src={desktopDividerIcon}
        alt='desktop divider'
        className='hidden sm:block mb-12 mt-8'
      />

      <button
        className='relative after:bg-green after:absolute after:-translate-x-1/2 after:-translate-y-1/2 after:top-1/2 after:left-1/2 after:h-full after:w-full after:-z-10 z-10 after:p-8 after:rounded-full -mb-3 hover:drop-shadow-glowBig active:drop-shadow-glowSmall transition-all ease-in-out active:scale-95 [&>*]:hover:animate-spin'
        onClick={handleGenerateAdvice}
      >
        <img src={diceIcon} alt='dice icon' />
      </button>
    </div>
  );
}

export default App;
