import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { ImgRec } from "../components/GifGrid";

interface iState {
  images: ImgRec[];
  loading: boolean;
}

export const useFetchGifs = (category: string) => {
  const [state, setState] = useState<iState>({
    images: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        images: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
