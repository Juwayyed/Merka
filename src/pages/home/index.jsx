import HomeSlider from "../../components/HomeSlider";
import HomeCategorySlider from "../../components/HomeCategorySlider";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import ProductsSlider from "../../components/productsSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState(0);
  const tabs = [
    { title: "Home" },
    { title: "Fashion" },
    { title: "Electronics" },
    { title: "Bags" },
    { title: "Footwear" },
    { title: "Groceries" },
    { title: "Beauty" },
    { title: "Wellness" },
    { title: "Jewelry" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <HomeCategorySlider />

      <section className="bg-white py-8!">
        <div className="container-fluid">
          <div className="flex items-center justify-between px-16!">
            <div className="leftSec col1 w-[35%]">
              <h2 className="text-[20px]! font-[600]!">Popular Products</h2>
              <p className="text-[14px]!">
                Do Not Miss The Current Offers till The End of The Month!
              </p>
            </div>
            <div className="rightSec col2 w-[65%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {tabs.map((tab) => (
                  <Tab label={tab.title} className="capitalize! font-[600]!" />
                ))}
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={5} />
        </div>
      </section>

      <section className="!py-8 bg-white">
        <div className="container">
          <div className="freeShipping w-full p-4! py-4! border-2 border-[#ff5252] mb-5! flex items-center justify-between rounded-md! ">
            <div className="col1 flex items-center gap-4 pl-2">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-semibold uppercase">
                Free Shipping!
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500] text-[18px]!">
                Free Delivery Now on Your First Order Over $200!
              </p>
            </div>

            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>
          <AdsBannerSlider items={4} />
        </div>
      </section>
    </>
  );
};

export default Home;
