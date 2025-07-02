import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import Card from './Card';
import { products } from '../utils/products';

const { plan, addOns } = products;

function Summary({
  plan: userPlan,
  yearly: userYearly,
  addOns: userAddOns,
  setNumber,
}: {
  plan: string;
  yearly: boolean;
  addOns: Array<string>;
  setNumber: Dispatch<SetStateAction<number>>;
}) {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const selectedPlan = plan.find((p) => p.name === userPlan);
    const selectedAddOns = addOns.filter((a) => userAddOns.includes(a.name));

    if (selectedPlan && selectedAddOns) {
      if (userYearly) {
        setTotalPrice(
          selectedPlan.year + selectedAddOns.reduce((sum, a) => sum + a.year, 0)
        );
      } else {
        setTotalPrice(
          selectedPlan.month +
            selectedAddOns.reduce((sum, a) => sum + a.month, 0)
        );
      }
    } else if (selectedPlan) {
      if (userYearly) {
        setTotalPrice(selectedPlan.year);
      } else {
        setTotalPrice(selectedPlan.month);
      }
    }
  }, [userAddOns, userPlan, userYearly]);

  return (
    <Card
      title="Finishing Up"
      description="Double-check everyting looks OK before confirming."
    >
      <div className="mt-10">
        <div className="rounded-lg bg-slate-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-blue-950 capitalize">
                {userPlan} ({userYearly ? 'Yearly' : 'Monthly'})
              </p>
              <button
                onClick={() => setNumber(2)}
                className="text-grey-500 cursor-pointer text-sm font-medium underline"
              >
                Change
              </button>
            </div>
            <p className="font-bold text-blue-950">
              {(() => {
                const selectedPlan = plan.find((p) => p.name === userPlan);
                if (!selectedPlan) return null;
                return userYearly
                  ? `$${selectedPlan.year}/yr`
                  : `$${selectedPlan.month}/mo`;
              })()}
            </p>
          </div>
          {userAddOns.length !== 0 && (
            <>
              <div className="my-4 border-b border-b-slate-300"></div>
              <div className="flex flex-col gap-4">
                {userAddOns.map((addon) => (
                  <div className="flex items-center justify-between">
                    <p className="text-grey-500 font-medium capitalize">
                      {addon}
                    </p>
                    <p className="text-blue-950">
                      {(() => {
                        const selectedAddOn = addOns.find(
                          (a) => a.name === addon
                        );
                        if (!selectedAddOn) return null;
                        return userYearly
                          ? `+$${selectedAddOn.year}/yr`
                          : `+$${selectedAddOn.month}/mo`;
                      })()}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-grey-500 font-medium">
              Total (per {userYearly ? 'year' : 'month'})
            </p>
            <p className="text-lg font-semibold text-purple-600">
              ${totalPrice}/{userYearly ? 'yr' : 'mo'}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Summary;
