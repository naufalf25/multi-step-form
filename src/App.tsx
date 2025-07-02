import { useState } from 'react';
import StepNumber from './components/StepNumber';
import useInput from './hooks/useInput';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';
import Summary from './components/Summary';
import ThankYou from './components/ThankYou';

function App() {
  const [number, setNumber] = useState(1);
  const [personalError, setPersonalError] = useState(false);
  const { value: name, onValueChangeHandler: setName } = useInput('');
  const { value: email, onValueChangeHandler: setEmail } = useInput('');
  const { value: phone, onValueChangeHandler: setPhone } = useInput('');
  const [plan, setPlan] = useState('');
  const [yearly, setYearly] = useState(false);
  const [addOns, setAddOns] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNextStep = () => {
    if (number === 1) {
      setPersonalError(false);

      if (name === '' || email === '' || phone === '') {
        setPersonalError(true);
        alert('Please fill the form first before continue');
        return;
      }
    }

    if (number === 2) {
      if (plan === '') {
        alert('Please select at least one plan');
        return;
      }
    }

    if (number === 4) {
      setLoading(true);

      setTimeout(() => {
        setComplete(true);
        setLoading(false);
      }, 2000);

      return;
    }

    setNumber(number + 1);
  };

  const handleAddOnsClick = (newAddOns: string) => {
    if (addOns.includes(newAddOns)) {
      setAddOns(addOns.filter((d) => d !== newAddOns));
    } else {
      setAddOns([...addOns, newAddOns]);
    }
  };

  return (
    <main className="text-primary relative min-h-screen bg-blue-100 lg:flex lg:items-center lg:justify-center lg:p-4">
      <div className="absolute top-0 left-0 z-0 h-44 w-full bg-[url(./assets/images/bg-sidebar-mobile.svg)] bg-cover lg:hidden"></div>

      <div className="h-full lg:flex lg:h-[40rem] lg:w-full lg:max-w-[1100px] lg:gap-4 lg:rounded-xl lg:bg-white lg:p-4">
        <div className="relative z-10 lg:h-full lg:w-[400px] lg:rounded-xl lg:bg-[url(./assets/images/bg-sidebar-desktop.svg)] lg:bg-cover lg:p-14">
          <div className="flex h-24 items-center justify-center gap-4 lg:h-full lg:flex-col lg:items-start lg:justify-start lg:gap-10">
            <StepNumber current={number} value={1} text="your info" />
            <StepNumber current={number} value={2} text="select plan" />
            <StepNumber current={number} value={3} text="add-ons" />
            <StepNumber current={number} value={4} text="summary" />
          </div>
        </div>

        <div className="lg:relative lg:w-full">
          <div className="px-4 py-1">
            {number === 1 && (
              <PersonalInfo
                error={personalError}
                name={name}
                email={email}
                phone={phone}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
              />
            )}
            {number === 2 && (
              <SelectPlan
                plan={plan}
                yearly={yearly}
                setPlan={setPlan}
                setYearly={setYearly}
              />
            )}
            {number === 3 && (
              <AddOns
                addOns={addOns}
                yearly={yearly}
                handleClick={handleAddOnsClick}
              />
            )}
            {number === 4 && !complete && (
              <Summary
                plan={plan}
                yearly={yearly}
                addOns={addOns}
                setNumber={setNumber}
              />
            )}
            {number === 4 && complete && <ThankYou />}
          </div>

          {!complete && (
            <div
              className={`fixed bottom-0 left-0 flex w-full items-center bg-white px-4 py-4 lg:absolute lg:mt-10 ${number === 1 ? 'justify-end' : 'justify-between'}`}
            >
              {number !== 1 && (
                <button
                  className="text-grey-500 cursor-pointer font-semibold"
                  onClick={() => setNumber(number - 1)}
                >
                  Go Back
                </button>
              )}
              {loading ? (
                <button
                  className="cursor-pointer rounded-md bg-purple-600 px-4 py-2 font-semibold text-white"
                  disabled
                >
                  <div
                    className="text-surface mr-4 inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status"
                  ></div>
                  Processing...
                </button>
              ) : (
                <button
                  onClick={handleNextStep}
                  className={`cursor-pointer rounded-md px-4 py-2 font-semibold text-white ${number !== 4 ? 'bg-blue-950' : 'bg-purple-600'}`}
                >
                  {number !== 4 ? 'Next Step' : 'Confirm'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
