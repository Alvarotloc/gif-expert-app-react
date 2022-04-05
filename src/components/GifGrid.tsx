// import { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

interface GifParams {
  category: string;
}

export interface ImgRec {
  title: string;
  url: string;
  id?: string;
}

const GifGrid = ({ category }: GifParams): JSX.Element => {
  const { images, loading } = useFetchGifs(category);

  return (
    <div className="card-grid">
      <h3 className="nombre-categoria animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading...</p>}

      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </div>
  );
};

export default GifGrid;
