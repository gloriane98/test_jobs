import Image from "next/image";
import Bg from "../../images/Bg.png";
import womens from "../../images/womens.png";
import Navbar from "@/components/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import Compteur from "../components/Compteur";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const { register, handleSubmit, reset } = useForm();

  const SendEmail = async (data) => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_DB_URL, data);
      console.log(res.data);
      console.log(res.status);
      if (res.status === 201) {
        console.log("status");
        return <ToastContainer></ToastContainer>;
      }
    } catch (error) {
      console.error("Echec d'envoi des données");
    }
    reset();
  };
  /** Timer  */

  return (
    <main className="bg-cover bg-center min-h-screen max-md:h-screen relative">
      <Image
        src={Bg}
        alt="background "
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />
      <Navbar />

      <div className="flex flex-col items-center h-[25vh] justify-between relative">
        <h1 className="text-[45px] text-[#782055] font-black  ">
          under construction
        </h1>
        <p className="text-[16px] text-[#151515] ">
          Receive a notification at the opening of the site
        </p>
        <form
          onSubmit={handleSubmit(SendEmail)}
          className="flex items-center justify-center"
        >
          <input
            type="email"
            placeholder="Your email"
            className="w-[455px] h-[47px] rounded-[30px] border-2 border-[#0080C8] text-sm text-gray-500 focus:ring-[#0080C8] pl-4"
            {...register("email")}
            required
          />
          <button className="w-[148px] h-[47px] bg-[#0080C8] rounded-[30px] text-white ml-[-15%] ">
            Send
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center mt-8 relative">
        <Compteur />
      </div>
      <Image
        src={womens}
        alt="background "
        className="w-[640px] h-[537px] relative  max-md:w-[500px] left-[111.8vh]  top-[-20vh]  max-md:h-[400px] "
      />
    </main>
  );
}
/**top-[32vh] left-[111.8vh]  max-md:top-[40vh] max-md:left-[13.5vh] */
