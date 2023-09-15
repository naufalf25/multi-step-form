type goBackType = {
  page: number;
  setPage: Function;
};

export default function GoBackButton(props: goBackType) {
  const { page, setPage } = props;

  return (
    <button onClick={() => setPage(page - 1)} className="text-slate-400">
      Go Back
    </button>
  );
}
