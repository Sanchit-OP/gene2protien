export default function CarrerButton() {
  return (
    <div >
      <div className="mb-32 hidden md:block">
      <a href="https://forms.gle/ji3DPVDQ7oZEEtxDA" className="text-center items-center ">
        <div className="m-auto w-1/5 self-center items-center content-center text-center border-2 bg-[#288c4f] hover:bg-[#30ab5f] text-white font-bold py-2 px-4 rounded-full">
          <a href="https://forms.gle/ji3DPVDQ7oZEEtxDA"> Lets get started!</a>
        </div>
      </a>
      </div>
      <div className="mb-32 block md:hidden">
      <a href="https://forms.gle/ji3DPVDQ7oZEEtxDA" className="text-center items-center ">
        <div className="m-auto w-4/5 self-center items-center content-center text-center border-2 bg-[#288c4f] hover:bg-[#30ab5f] text-white font-bold py-2 px-4 rounded-full">
          <a href="https://forms.gle/ji3DPVDQ7oZEEtxDA"> Lets get started!</a>
        </div>
      </a>
      </div>
    </div>
  );
}
