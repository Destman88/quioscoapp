import React, { useContext, useEffect, useState } from "react";
import { QuioscoContext } from "../context/QuioscoProvider";
import Image from "next/image";

const Categoria = ({ categoria }) => {
  const { categoriaActual, handleClickCategoria } = useContext(QuioscoContext);
  const { nombre, icono, id } = categoria;
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(categoriaActual?.id === id);
  }, [categoriaActual, id]);

  return (
    <div
      className={`flex items-center gap-4 w-full border p-5 hover:bg-amber-400 ${
        isSelected ? "bg-amber-400" : ""
      }`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt="imagen icono"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
