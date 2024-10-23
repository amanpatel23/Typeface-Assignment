import HomeChatCard from "../components/HomeChatCard";
import { IoAdd } from "react-icons/io5";

function Home() {
  return (
    <div className="">
      <div className="text-3xl font-light py-2 px-4 text-[#075e54]">
        YoChat...
      </div>
      <div className="mt-4 px-4">
        <div>
          <HomeChatCard />
        </div>
        <div className="mt-4">
          <HomeChatCard />
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="bg-[#075e54] p-4 rounded-full cursor-pointer">
          <IoAdd className="text-4xl text-white" />
        </div>
      </div>
    </div>
  );
}

export default Home;
