import Checkmark from '../assets/images/icon-checkmark.svg';

function InputAddOns({
  addOns,
  title,
  description,
  yearly,
  handleClick,
  priceMo,
  priceYr,
}: {
  addOns: Array<string>;
  title: string;
  description: string;
  yearly: boolean;
  handleClick: (arg0: string) => void;
  priceMo: number;
  priceYr: number;
}) {
  return (
    <button
      onClick={() => handleClick(title)}
      className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl border p-4 text-start hover:border-purple-600 hover:bg-purple-50 ${addOns.includes(title) ? 'border-purple-600 bg-purple-50' : 'border-grey-500'}`}
    >
      <div className="flex items-center gap-4 lg:gap-6">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-lg border ${addOns.includes(title) ? 'border-purple-600 bg-purple-600' : 'border-grey-500'}`}
        >
          <img
            src={Checkmark}
            alt="check"
            className={addOns.includes(title) ? 'w-4' : 'invisible'}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-bold text-blue-950 capitalize">{title}</p>
          <p className="text-grey-500">{description}</p>
        </div>
      </div>
      <p className="font-semibold text-purple-500">
        +${yearly ? `${priceYr}/yr` : `${priceMo}/mo`}
      </p>
    </button>
  );
}

export default InputAddOns;
