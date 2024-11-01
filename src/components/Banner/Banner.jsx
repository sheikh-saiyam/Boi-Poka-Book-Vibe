import { Link } from "react-router-dom";
import img from "../../assets/bannerImg.png"
const Banner = () => {
  return (
    <div>
      <div className="bg-base-200 rounded-xl mb-24 mt-6">
        <div className="space-y-6 md:space-y-0 flex items-center py-24 flex-col justify-around lg:flex-row-reverse">
          <img src={img} />
          <div>
            <h1 className="text-center text-5xl md:text-6xl md:text-left italic font-semibold">
              Books to freshen <br /> up your bookshelf
            </h1>
            <Link to='/listedBooks' className="btn btn-wide mt-10 bg-[#23BE0A] text-white">
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
