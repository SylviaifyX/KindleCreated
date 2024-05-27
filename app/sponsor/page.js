import Header from "@/components/Header";
import CloserToFooter from "@/components/CloserToFooter";
import Footer from "@/components/Footer";

import Sponsor from "./sponsor";
import Button from "@/components/apply-button";
import Sponsors from "@/components/OurSpon";

export default function page() {
  return (
    <section className="overflow-hidden">
      <div className="w-full h-[113px] fixed top-0 z-50 flex items-center justify-center">
        <Header />
      </div>
      <Sponsor />

      <section className=" w-full mt-10">
        <div className="w-full max-w-[1000px] mx-auto ">
          <div className="p-10">
            <h6 className="text-[36px] text-[#14242C] font-bold text-center">
              Sponsor our Programs/Event
            </h6>
            <hr className="w-[125px] bg-[#E3B522] h-[8px] rounded-[5px] mx-auto" />
          </div>
          <p className="w-[649px] mx-auto leading-[28px] mt-3 text-[20px] font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          <p className="w-[649px] mx-auto leading-[28px] mt-10 text-[20px] font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra
          </p>
        </div>

        <Button />
      </section>

     <Sponsors/>

      <CloserToFooter />
      <Footer />
    </section>
  );
}
