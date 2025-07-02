import { type Dispatch, type SetStateAction } from 'react';

function InputPlan({
  plan,
  value,
  yearly,
  priceMo,
  priceYr,
  icon,
  setPlan,
}: {
  plan: string;
  value: string;
  yearly: boolean;
  priceMo: number;
  priceYr: number;
  icon: string;
  setPlan: Dispatch<SetStateAction<string>>;
}) {
  return (
    <button
      className={`flex w-full cursor-pointer items-start justify-start gap-4 rounded-lg border px-4 py-6 hover:border-blue-950 hover:bg-purple-50 lg:flex-col lg:gap-10 ${plan === value ? 'border-blue-950 bg-purple-50' : 'border-grey-500'}`}
      onClick={() => setPlan(value)}
    >
      <img src={icon} alt={value} className="w-14 lg:w-10" />
      <div className="flex flex-col items-start justify-start">
        <p className="text-lg font-bold text-blue-950 capitalize">{value}</p>
        <p className="text-grey-500 font-medium">
          ${yearly ? `${priceYr}/yr` : `${priceMo}/mo`}
        </p>
        {yearly && (
          <p className="text-sm font-medium text-blue-950">2 months free</p>
        )}
      </div>
    </button>
  );
}

export default InputPlan;
