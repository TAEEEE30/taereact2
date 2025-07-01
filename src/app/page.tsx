import { TextWelcome } from "@/components/Textsize";

export default function Home() {
  return (
    <div className="cyber-grid min-h-screen flex flex-col justify-center items-center text-center ">
      <div className="coin-flip">
        <img src="/images/coin.png" alt="coin" width={150} height={150} />
          <TextWelcome />
      </div>

    

      <footer className="mt-16 flex flex-wrap gap-6 items-center justify-center" />
    </div>
  );
}
