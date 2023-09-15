type navbarType = {
  page: number;
};

export default function Navbar(props: navbarType) {
  const { page } = props;

  return (
    <div className="w-full p-8 min-h-[10rem] bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover">
      <nav>
        <ul className="w-full flex justify-center items-center gap-4 font-bold text-white text-sm">
          <li
            className={
              'border__number' + (page == 1 ? ' border__number__active' : '')
            }
          >
            1
          </li>
          <li
            className={
              'border__number' + (page == 2 ? ' border__number__active' : '')
            }
          >
            2
          </li>
          <li
            className={
              'border__number' + (page == 3 ? ' border__number__active' : '')
            }
          >
            3
          </li>
          <li
            className={
              'border__number' + (page == 4 ? ' border__number__active' : '')
            }
          >
            4
          </li>
        </ul>
      </nav>
    </div>
  );
}
