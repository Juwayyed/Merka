import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { RxLoop } from "react-icons/rx";
import { MdZoomOutMap } from "react-icons/md";
import { AiOutlineSelect } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";

const ProductItem = () => {
  return (
    <div className="productItem rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] shadow-lg">
      <div className="imgWrapper w-full overflow-hidden relative group">
        <Link to="/">
          <div className="img h-[210px]! overflow-hidden">
            <img
              src="/ProductItem/Fashion/Dress-01.jpg"
              className="w-full mb-1!"
            />

            <img
              src="/ProductItem/Fashion/Dress-02.jpg"
              className="w-full transition-all duration-300 mb-1! absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white text-[10px] font-[500] p-1! rounded-lg">
          10%
        </span>
        <div className="actions absolute top-[-200px] right-[5px] z-50 flex flex-col items-center gap-2 w-[40px] transition-all duration-300 group-hover:top-[15px]">
          <Tooltip title="Add" placement="left-start">
            <Button className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! text-black! bg-white! hover:bg-[#ff5252]! group/action">
              <FaRegHeart className="text-[20px]! group-hover/action:text-white!" />
            </Button>
          </Tooltip>
          <Tooltip title="Compare" placement="left-start">
            <Button className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! text-black! bg-white! hover:bg-[#ff5252]! group/action">
              <RxLoop className="text-[20px]! group-hover/action:text-white!" />
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="left-start">
            <Button className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! text-black! bg-white! hover:bg-[#ff5252]! group/action">
              <MdZoomOutMap className="text-[20px]! group-hover/action:text-white!" />
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="left-start">
            <Button className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! text-black! bg-white! hover:bg-[#ff5252]! group/action">
              <AiOutlineSelect className="text-[20px]! group-hover/action:text-white!" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="info pl-3! pb-2!">
        <h6 className="text-[13px] transition-all">
          <Link to="/" className="link">
            Dresses
          </Link>
        </h6>
        <h3 className="text-[13px] my-2! font-[500] text-[#000] transition-all">
          <Link to="/" className="link">
            Royal Green Satin Dress
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={2} size="small" readOnly />
        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $59.00
          </span>
          <span className="price text-[#ff5252] text-[15px] font-[600]">
            $49.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
