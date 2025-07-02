import { products } from '../utils/products';
import Card from './Card';
import InputAddOns from './InputAddOns';

function AddOns({
  addOns,
  yearly,
  handleClick,
}: {
  addOns: Array<string>;
  yearly: boolean;
  handleClick: (arg0: string) => void;
}) {
  return (
    <Card
      title="Pick Add-Ons"
      description="Add-ons help enhance your gaming experience."
    >
      <div className="mt-10 flex flex-col gap-4">
        {products.addOns.map(({ id, name, description, month, year }) => (
          <InputAddOns
            key={id}
            title={name}
            description={description}
            addOns={addOns}
            yearly={yearly}
            priceMo={month}
            priceYr={year}
            handleClick={handleClick}
          />
        ))}
      </div>
    </Card>
  );
}

export default AddOns;
