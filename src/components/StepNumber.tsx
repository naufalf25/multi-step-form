function StepNumber({
  current,
  value,
  text,
}: {
  current: number;
  value: number;
  text: string;
}) {
  return (
    <div className="lg:flex lg:gap-4">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full border lg:h-10 lg:w-10 ${current === value ? 'border-blue-200 bg-blue-200' : 'border-white'}`}
      >
        <p
          className={`text-lg font-bold ${current === value ? 'text-blue-950' : 'text-white'}`}
        >
          {value}
        </p>
      </div>
      <div className="hidden lg:block">
        <p className="text-xs text-gray-300">STEP {value}</p>
        <p className="font-bold text-white uppercase">{text}</p>
      </div>
    </div>
  );
}

export default StepNumber;
