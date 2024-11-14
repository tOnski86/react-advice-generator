import mobileDividerIcon from '/pattern-divider-mobile.svg';
import desktopDividerIcon from '/pattern-divider-desktop.svg';
import diceIcon from '/icon-dice.svg';

function App() {
  return (
    <div className='bg-grey px-6 sm:px-8 text-center mx-4 rounded-lg flex flex-col items-center pt-10 sm:max-w-md'>
      <h2 className='text-green text-[11px] font-medium uppercase tracking-[0.3em] mb-6'>
        Advice #117
      </h2>
      <blockquote>
        <p className='text-white text-2xl font-bold'>
          &ldquo;It is easy to sit up and take notice, what&apos;s difficult is
          getting up and taking action.&rdquo;
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
        className='hidden sm:block mb-12 mt-6'
      />

      <button className='relative after:bg-green after:absolute after:-translate-x-1/2 after:-translate-y-1/2 after:top-1/2 after:left-1/2 after:h-full after:w-full after:-z-10 z-10 after:p-8 after:rounded-full -mb-3 hover:drop-shadow-glowBig active:drop-shadow-glowSmall transition-all ease-in-out active:scale-95 [&>*]:hover:animate-spin'>
        <img src={diceIcon} alt='dice icon' />
      </button>
    </div>
  );
}

export default App;
