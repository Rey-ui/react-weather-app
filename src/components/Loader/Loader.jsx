import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <ScaleLoader
      color={"#1999df"}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
