import { Img } from '../types/TypeGifs';
import { ImgRec } from '../components/GifGrid';
export const getGifs = async (category:string) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=a7HSnhONcWi0At5XPVhrv7weCeunjRVT`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs:ImgRec[] = data.map((img: Img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs;
  };