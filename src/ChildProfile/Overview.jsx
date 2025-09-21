import ChildState from "../UploadingDraw/components/ChildState";

function Overview() {
  const lastThreeImages = [
    { src: "/images/drawing.png" },
    { src: "/images/drawing.png" },
    { src: "/images/drawing.png" },
    { src: "/images/drawing.png" },
    { src: "/images/drawing.png" },
    { src: "/images/drawing.png" },
    { src: "/images/drawing.png" },
    { src: "/images/drawing.png" },
  ];

  const tips = [
    {
      color: "#98A2B3",
      title: "نصيحة:",
      content:
        "يُستحسن تخصيص نشاط فني إضافي لهذا الطفل خلال هذا الأسبوع لتعزيز قدرته على التعبير عن مشاعره، خاصة بعد ملاحظة تحسّن في الرسومات الأخيرة.",
    },
    {
      color: "#F97316",
      title: "تنبيه:",
      content:
        "تم رصد رموز متكررة في الرسومات تشير إلى وجود توتر داخلي؛ من الأفضل مناقشة هذا الأمر مع الطفل بشكل غير مباشر خلال الجلسة القادمة.",
    },
    {
      color: "#10B981",
      title: "افعل:",
      content:
        "استمر في تسجيل الملاحظات اليدوية المرتبطة بكل رسمة، إذ تسهم في بناء تصور أدق حول تطور الحالة النفسية للطفل على المدى البعيد.",
    },
  ];

  return (
    <div>
      <div className="bg-[#FCFCFD] border-x border-[1px] border-[#F2F4F7] px-[48px] py-[32px]">
        <h3 className="mb-[24px] text-[#101828] font-semibold text-[18px] leading-[20px]">
          آخر 3 رسومات
        </h3>
        <div className="flex gap-[24px]">
          {" "}
          {lastThreeImages.slice(-3).map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={`رسم ${index + 1}`}
              className="w-[20%] h-[225px] border-[8px] border-white rounded-[24px] shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F,inset_0_0_0_8px_#FFFFFF]"
            />
          ))}
        </div>
      </div>

      <div className="px-[48px] py-[32px] border border-[#f2f4f7]">
        <h3 className="mb-[24px] text-[#101828] font-semibold text-[18px] leading-[20px]">
          تطور الحالة بمرور الوقت
        </h3>

        <p className="font-medium text-[14px] text-[#667085]">
          خط زمني يوضح تغير الحالة بناءً على الرسومات السابقة (إن وُجدت).
        </p>

        <div className="my-[48px] relative w-full">
          {/* Progress bar */}
          <div className="h-[16px] w-full rounded-[50px] bg-[linear-gradient(270deg,#FB7185_0%,#FB923C_50%,#34D399_100%)]"></div>

          {/* Emoji states فوق الـ bar */}
          <div className="absolute top-[50%] left-0  w-full flex justify-between -translate-y-1/2 px-[32px]">
            <ChildState emoji="😊" state="سعيد" />
            <ChildState emoji="😓" state="حزين" />
            <ChildState emoji="🔴" state="خطر" />
          </div>
        </div>

        <div className="rounded-[16px] bg-[#F9FAFB]">
          <div className="flex flex-col gap-[12px]">
            <div className="flex justify-between items-center bg-white px-[20px] py-[16px]">
              <div className="flex flex-col gap-[8px]">
                <p className="mb-[8px] text-[#1D2939] font-semibold leading-[20px]">
                  تاريخ الرسمة
                </p>
                <p className="text-[#667085] text-[14px] font-medium">
                  الإثنين، 25 أغسطس 2025 - 10:30 صباحًا
                </p>
              </div>
              <img
                src="/images/x-mark.svg"
                alt="x"
                className="rounded-full p-[12.5px] shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F] "
              />
            </div>
            <div className="flex justify-between items-center bg-white px-[20px] py-[16px]">
              <div className="flex flex-col gap-[8px]">
                <p className="mb-[8px] text-[#1D2939] font-semibold leading-[20px]">
                  الحالة النفسية
                </p>
              </div>
              <ChildState emoji="😊" state="سعيد" />
            </div>
            <div className="flex justify-between items-center bg-white px-[20px] py-[16px]">
              <div className="flex flex-col gap-[8px]">
                <p className="mb-[8px] text-[#1D2939] font-semibold leading-[20px]">
                  ملاحظات علي التحليل
                </p>
                <p className="max-w-[500px] text-[#667085] text-[14px] font-medium">
                  الرسم الحالي يعكس حالة إيجابية بشكل عام؛ حيث يظهر الطفل
                  تعبيرات أكثر انفتاحًا وتفاصيل متوازنة في الرسم. هذا يشير إلى
                  شعور بالاستقرار النفسي وارتياح عاطفي في الفترة الأخيرة.
                </p>
              </div>

              <button className="cursor-pointer transition-all hover:opacity-75 hover:translate-x-0.5 py-[10px] px-[16px] rounded-[8px] text-[#101828] font-semibold leading-[20px] text-[14px] shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F]">
                عرض التحليل كامل
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FCFCFD] px-[48px] py-[24px] border-x border-[1px] border-[#F2F4F7]">
        <h3 className="mb-[24px] text-[#101828] font-semibold text-[18px] leading-[20px]">
          الملاحظات
        </h3>
        <textarea
          className="bg-[#FCFCFD] rounded-[6px] font-medium text-sm text-[#98A2B3] leading-[150%] shadow-[0px_0px_0px_1px_#20346014,0px_1px_2px_0px_#2034601F] h-[53px] w-full py-[6px] px-[8px] outline-none min-h-[53px] max-h-[200px]"
          placeholder="إضافة ملحوظة"
        ></textarea>
      </div>

      <div className="bg-[#FCFCFD] px-[48px] py-[32px]">
        <h3 className="mb-[24px] text-[#101828] font-semibold text-[18px] leading-[20px]">
          التوصيات الذكية
        </h3>

        <div className="flex flex-col gap-[12px]">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="px-[12px] py-[10px] rounded-[8px] text-[#101828] font-semibold text-[13px] leading-[150%] flex gap-[12px] items-center shadow-[0_2px_4px_0_#2034600A,0_1px_2px_-1px_#20346014,0_0_0_1px_#20346014]"
            >
              {/* الشريط الصغير اللي لونه متغير */}
              <span
                className="w-[4px] h-[12px] rounded-full"
                style={{ backgroundColor: tip.color }}
              ></span>

              <div>
                <span>{tip.title} </span>
                <span className="text-[#667085]">{tip.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
