const page = async () => {
  return (
    <div className="w-full h-full min-h-400 md:min-h-0">
      <div className="grid w-full h-full grid-cols-1 md:grid-cols-8 grid-rows-7 gap-4">
        <div
          className={`w-full h-full bg-card border-card-border border md:col-span-3 md:row-span-2`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border md:col-span-3 md:row-span-2`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border md:col-span-2 md:row-span-5`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border md:col-span-2 md:row-span-5`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border md:col-span-4 md:row-span-3`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border md:col-span-3 md:row-span-2`}
        />
        <div
          className={`w-full h-full bg-card border-card-border border md:col-span-3 md:row-span-2`}
        />
      </div>
    </div>
  );
};

export default page;
