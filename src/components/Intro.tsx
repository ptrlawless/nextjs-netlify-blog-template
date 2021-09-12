export default function Intro() {
  return (
    <section
      style={{
        border: '1px solid red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left 22%',
        height: '80vh',
        margin: '0 auto',
      }}
    >
      <div className="border-gray-800  border-solid border-2 w-full h-100 py-8 flex flex-col justify-center items-end md:w-full">
        <h1 className="text-white text-right md:text-right text-7xl md:text-8xl lg:text-8xl font-bold tracking-tighter leading-tight w-full">
          Regarding Justice
        </h1>
        <h4 className="text-right text-2xl md:text-right text-green-400 font-bold mt-6">
          Information and Opinions on Criminal Justice Reform
        </h4>
      </div>
    </section>
  );
}
