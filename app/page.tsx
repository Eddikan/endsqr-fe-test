import Image from "next/image";
import NewInput from "./components/NewInput";

export default function Home() {
  return (
    <div className=" h-screen grid sm:grid-cols-2 gap-x-14">
      <div className="hidden md:block pt-[30px] pl-[97px]">
        <div className="relative w-36 h-36 mb-12">
          <Image src="/logo.svg" fill alt="logo" />
        </div>
        <div className="relative w-[600px] h-[340px]">
          <Image src="/banner.svg" fill alt="logo" />
        </div>
      </div>
      <div className="flex flex-col justify-center  md:w-1/2 mx-10 md:mx-auto mt-20 sm:mt-0 gap-y-3">
        <p className="secondary text-4xl font-bold">Welcome!</p>
        <p className="light-grey text-md">Enter your details to login.</p>
        <form className="gap-y-4 flex flex-col">
          <NewInput label="Email" name="email" />
          <NewInput type="password" label="Email" name="email" />
          <div>
            <p>Forgot password</p>
          </div>
          <button className="bg-primary rounded-md text-white w-full py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
