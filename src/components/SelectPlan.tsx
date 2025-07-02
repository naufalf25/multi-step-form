import { type Dispatch, type SetStateAction } from 'react';
import Card from './Card';
import { products } from '../utils/products';
import InputPlan from './InputPlan';

function SelectPlan({
  plan,
  yearly,
  setPlan,
  setYearly,
}: {
  plan: string;
  yearly: boolean;
  setPlan: Dispatch<SetStateAction<string>>;
  setYearly: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Card
      title="Select Your Plan"
      description="You have the option of monthly and yearly billing."
    >
      <div className="mt-10">
        <div className="flex flex-col gap-4 lg:flex-row">
          {products.plan.map(({ id, name, icon, month, year }) => (
            <InputPlan
              key={id}
              plan={plan}
              value={name}
              icon={icon}
              yearly={yearly}
              priceMo={month}
              priceYr={year}
              setPlan={setPlan}
            />
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-6 rounded-xl bg-slate-100 p-4">
          <label className="text-lg font-semibold text-blue-950">Monthly</label>
          <label className="text-dark flex cursor-pointer items-center select-none">
            <input
              type="checkbox"
              className="sr-only"
              checked
              onChange={() => setYearly(!yearly)}
            />
            <div className="relative block h-6 w-10 rounded-full bg-slate-500">
              <div
                className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition ${yearly ? 'translate-x-full' : ''}`}
              ></div>
            </div>
          </label>
          <label className="text-lg font-semibold text-blue-950">Yearly</label>
        </div>
      </div>
    </Card>
  );
}

export default SelectPlan;
