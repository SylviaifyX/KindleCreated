import BoardData from "@/components/boardDate";
import BoardPage from "./board";
import Header from "@/components/Header";
import AdvisoryData from "@/components/advisory-data";
import CloserToFooter from "@/components/CloserToFooter";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <section className="overflow-hidden">
      <div className="w-full h-[113px] fixed top-0 z-50 flex items-center justify-center">
        <Header />
      </div>

      <BoardPage />
      <section className="w-full md:h-[1600px]">
        <div className="w-full md:max-w-[1000px] mx-auto ">
          <div className="pt-9">
            <h1 className="uppercase text-center text-gray-900 text-[28px] md:text-4xl font-medium">
              The Executives
            </h1>
            <div className="w-[125px] h-[0px] border-4 border-amber-400 mx-auto"></div>
          </div>

          <BoardData />
        </div>
      </section>
      <section className=" bg-sky-900 rounded-bl-[20px] rounded-br-[20px] ">
        <div className="w-full md:max-w-[1000px] mx-auto mt-10">
          <div className=" p-8 md:p-20 w-full ">
            <h1 className="uppercase  text-center text-white text-[22px]  md:text-4xl font-bold">
              The Advisory Board
            </h1>
            <div className="w-[125px] h-[0px] border-4 border-amber-400 mx-auto">
            
            </div>
          </div>
          <AdvisoryData/>
        </div>
      </section>
      <CloserToFooter/>
      <Footer/>
    </section>
  );
}
