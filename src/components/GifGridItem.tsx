import { ImgRec } from "./GifGrid";

const GifGridItem = ({ title, url }: ImgRec): JSX.Element => {
  return (
    <div className="card animate__animated animate__bounce animate__slow">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
