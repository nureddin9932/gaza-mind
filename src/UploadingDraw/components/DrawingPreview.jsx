export default function DrawingPreview() {
  return (
    <div className="w-full border-b-1 border-[#E4E7EC] pb-[154px] flex justify-center">
      <div className="relative w-full max-w-[1076px] mx-[48px] my-8">
        <div className="relative w-full h-[218px] rounded-[15px] overflow-hidden">
          <img
            src="/images/drawing.png"
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#101828CC]"></div>
        </div>

        <img
          src="/images/drawing.png"
          alt="child drawing"
          className="absolute object-cover left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[225px] rounded-[24px] border-[8px] border-white
        shadow-[0px_1px_2px_0px_#2034601F,0px_0px_0px_2px_#20346014]"
        />
      </div>
    </div>
  );
}
