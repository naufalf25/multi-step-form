import ConfirmButton from './Button/Confim';
import GoBackButton from './Button/GoBack';
import NextStepButton from './Button/NextStep';
import Navbar from './Navbar';

type mobileScreenType = {
  page: number;
  setPage: Function;
};

export default function MobileScreen(props: mobileScreenType) {
  const { page, setPage } = props;

  return (
    <>
      <Navbar page={page} />
      <div
        className={
          'w-full p-4 fixed bottom-0 left-0 bg-white shadow-md flex justify-end items-center' +
          (page > 1 && ' justify-between')
        }
      >
        {page > 1 && <GoBackButton page={page} setPage={setPage} />}
        {page <= 3 && <NextStepButton page={page} setPage={setPage} />}
        {page > 3 && <ConfirmButton />}
      </div>
    </>
  );
}
