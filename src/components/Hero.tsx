export default function Intro() {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        height: '80vh',
        margin: '0 auto',
      }}
    >
      <div
        className="px-20 flex flex-col justify-center items-end md:w-full"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <h1
          className="text-white text-right md:text-right text-7xl md:text-8xl lg:text-8xl font-bold tracking-tighter leading-tight w-full"
          style={{ color: '#4c8878', mixBlendMode: 'screen' }}
        >
          Regarding Justice
        </h1>
        <h4
          className="text-right text-2xl md:text-right font-bold mt-6"
          style={{ color: '#fff', mixBlendMode: 'hard-light' }}
        >
          Information and Opinions on Criminal Justice Reform
        </h4>
      </div>
    </section>
  );
}
