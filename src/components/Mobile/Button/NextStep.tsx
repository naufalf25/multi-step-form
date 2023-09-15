type nextStepButton = {
  page: number;
  setPage: Function;
};

export default function NextStepButton(props: nextStepButton) {
  const { page, setPage } = props;

  const handleChange = (change: number) => {
    setPage(change);
  };

  return (
    <button
      onClick={() => handleChange(page + 1)}
      className="py-2 px-3 border border-blue-950 bg-blue-950 text-white rounded-md"
    >
      Next Step
    </button>
  );
}
