interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className='min-h-screen relative flex flex-col bg-oldBlack font-custom text-oldWhite text-xl font-extrabold scroll-auto'>
        <section>
      <div className='flex flex-col items-start px-8 md:px-0'>
        <h2>Tailwind</h2>
        <h1>Setup</h1>
        <h3>Test</h3>
      </div>
    </section>
    </div>
  );
};

export default ExploreContainer;
