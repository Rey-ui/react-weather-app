import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <ScaleLoader
      color={"#3a7bd5"}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
