import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [isConnected, setIsConnected] = useState(false);

  const router = useRouter();

  const LogUser = async (data) => {
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_LOGIN, {
        login: data.login,
        password: data.password,
        macadress: "fe80::44:b43c:4ece:64d8%4",
        ipadress: "192.168.0.102",
        hostname: "GAUTHIER-PC",
        browser: "Chrome Version 115.0.5790.173 (Build officiel) (64 bits)",
      });
      console.log(response);
      router.push("/home");
      console.log("Données envoyées avec succès !");
      if (isConnected) {
        return (
          <div>
            <h1>Echec de connexion</h1>
          </div>
        );
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center  text-center w-full ">
        <div>
          <h1 className="py-8 text-xl font-semibold text-[#dd2d7f] ">
            Connexion
          </h1>
          <form
            onSubmit={handleSubmit(LogUser)}
            className="flex flex-col w-[60vh] h-[600px]  "
          >
            <input
              placeholder="login"
              className="border-2 border-gray-500 h-[60px] mb-8 pl-4"
              {...register("login")}
              required
            />
            <input
              placeholder="password"
              className="border-2 border-gray-500 h-[60px] mb-8 pl-4"
              {...register("password")}
              required
            />
            <button className=" h-[50px] bg-[#dd2d7f] border-2 border-[#dd2d7f] justify-center text-white ">
              Se connecter
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
