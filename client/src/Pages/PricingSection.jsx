import React from "react";
import PricingCard1 from "../components/Pricings/PricingCard1";
import PricingCard2 from "../components/Pricings/PricingCard2";
import PricingCard3 from "../components/Pricings/PricingCard3";
import HomeNavbar from "components/HomeNavbar";

function PricingSection() {
  return (
    <>
    <HomeNavbar></HomeNavbar>
    <section className="mt-4 bg-gradient-to-tl from-[#4895ef] to-[#10002b] via-[#5a189a] end-[#9d4edd]">
      <div className="bg-opacity-80">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-4">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 inline-block text-4xl tracking-tight font-extrabold text-[#2dc653] dark:text-[#2dc653]">
              DESIGNED For Business Teams Like YOURS
            </h2>
            <p className="mb-5 text-white font-extrabold sm:text-xl dark:text-white">
              We provide you with seamless services for your calls and support
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card 1 */}
            <PricingCard1></PricingCard1>
            {/* Pricing Card 2*/}
            <PricingCard2></PricingCard2>
            {/* Pricing Card 3*/}
            <PricingCard3></PricingCard3>
          </div>
        </div>
      </div>
    </section></>
    
  );
}

export default PricingSection;
