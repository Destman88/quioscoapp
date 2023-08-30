import { useContext } from "react";
import { QuioscoContext } from "../context/QuioscoProvider";

const useQuiosco = () => {
  const quioscoContext = useContext(QuioscoContext);
  return quioscoContext;
};

export default useQuiosco;