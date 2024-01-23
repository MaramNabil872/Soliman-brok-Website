import { useNavigate } from "react-router-dom";
import "./Services.css";
interface Props {
  title: string;
  description: string;
  imageSource: string;
}
const ServiceItem = ({ title, description, imageSource }: Props) => {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("basement");
      }}
      className="col-12 col-lg-2 col-md-4 card m-4 bg-white service rounded-lg"
    >
      {/* <p className="text-black-50">{description}</p> */}
      <img className="w-50" src={imageSource} />
      <h5 id="service-title" className="text-start pt-2">
        {title}
      </h5>
      {/* <p className="text-black-50 ">{description}</p> */}
      <small className="text-muted">{description}</small>
    </div>
  );
};

export default ServiceItem;
