import "./PictureItem.scss";

type Props = {
  pictureUrl: string;
  name: string;
  props?: Props;
};

const PictureItem = ({ pictureUrl, name, ...props }: Props) => {
  return (
    <div className="picture-item">
      <img className="picture m-0" src={pictureUrl} alt={name} {...props} />
      <div className="title">
        <p>{name}</p>
        <hr />
        <i className="bi bi-play-fill"></i>
      </div>
    </div>
  );
};

export default PictureItem;
