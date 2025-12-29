const page = async () => {
  return (
    <div className="w-full h-full">
      <div className="grid w-full h-full grid-cols-8 grid-rows-7 gap-4">
        <div
          className={`w-full h-full bg-card border-card-border border col-span-3 row-span-2`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border col-span-3 row-span-2`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border col-span-2 row-span-5`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border col-span-2 row-span-5`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border col-span-4 row-span-3`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border col-span-3 row-span-2`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border col-span-3 row-span-2`}
        />
      </div>
    </div>
  );
};

export default page;
