import { useState } from "react";
import ChildState from "./ChildState";

export default function AnalysisTabView() {
  const [activeTab, setActiveTab] = useState("result");

  const tabs = [
    {
      id: "result",
      label: "نتيجة التحليل النفسي",
      description:
        "ملخص دقيق لحالة الطفل بناءً على التحليل الذكي للرسمة (مثلاً: قلق - مطمئن - بحاجة لمتابعة...)",
      content: (
        <div className="flex justify-between bg-[#FCFCFD] shadow-[0px_2px_4px_0px_#2034600A,0px_1px_2px_-1px_#20346014,0px_0px_0px_1px_#20346014] py-[16px] px-[12px] items-center rounded-[8px]">
          <div className="flex gap-[12px] items-center">
            <span className="bg-[#F43F5E] w-[4px] h-[28px] rounded-full"></span>
            <p>
              تشير الرسمة إلى مؤشرات واضحة على التوتر والقلق. يظهر ذلك من خلال
              استخدام اللون الأحمر بكثافة، ورسم خطوط متقطعة حول الشخصيات.
            </p>
          </div>
          <div className="flex gap-[4px] bg-[#F2F4F7] py-[8px] px-[12px] rounded-[6px] items-center">
            <span className="bg-white w-[10px] h-[10px] rounded-full relative shadow-[0px_0px_0px_1px_#20346014,0px_1px_2px_0px_#2034601F]">
              <span className="bg-[#F43F5E] rounded-full w-[6px] h-[6px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </span>
            <strong>قلق</strong>
          </div>
        </div>
      ),
    },
    {
      id: "details",
      label: "تفاصيل التحليل",
      description:
        "شرح أعمق لكل عنصر في الرسمة وكيف فُسّر (الألوان، الأشخاص، الخطوط، الرموز...) ",
      content: (
        <ul className="leading-[180%] text-[16px] text-[#1D2939] font-medium">
          <li>
            استخدم الطفل اللون الأسود بكثافة، ما قد يدل على مشاعر سلبية مثل
            الحزن أو الانغلاق.
          </li>
          <li>
            لم يظهر في الرسمة أي شخصيات، مما قد يشير إلى شعور بالعزلة أو صعوبة
            في التعبير عن العلاقات الاجتماعية.
          </li>
          <li>
            رسم الطفل منزلاً، لكن بدون نوافذ أو أبواب، وهو ما قد يرمز إلى
            الإحساس بعدم الأمان أو الرغبة في الانسحاب.
          </li>
          <li>
            الخطوط كانت سريعة ومتكررة، مما قد يُعبّر عن توتر داخلي أو اندفاع.
          </li>
          <li>
            بعض العناصر كانت غير مكتملة، مما قد يدل على تشتت الانتباه أو عدم
            الرغبة في الاستمرار.
          </li>
          <li>
            لم تظهر ألوان دافئة مثل الأصفر أو البرتقالي، وهو ما يُضعف الإحساس
            بالراحة أو التفاؤل.
          </li>
          <li>
            وُجد تكرار لعنصر محدد (مثل عيون كبيرة أو شمس قاتمة)، مما قد يُعبّر
            عن فكرة عالقة في ذهن الطفل.
          </li>
          <li>
            لم يستخدم الطفل مساحة الورقة كاملة، وركّز الرسم في أحد الزوايا، مما
            قد يشير إلى خجل أو تراجع نفسي.
          </li>
          <li>
            لم يُبدِ الطفل تفاعلًا كبيرًا أثناء الرسم، وكان صامتًا أغلب الوقت.
          </li>
          <li>
            التكوين العام للرسمة يثير تساؤلات حول شعور الطفل تجاه البيئة المحيطة
            به في الوقت الحالي.
          </li>
        </ul>
      ),
    },
    {
      id: "notes",
      label: "ملاحظات يدوية",
      description:
        "مساحة مخصصة لإضافة ملاحظات خاصة بالمرشد أو المحلل، تعكس السياق أو تكمّل التحليل.",
      content: (
        <textarea
          className="bg-[#FCFCFD] rounded-[6px] font-medium text-sm text-[#98A2B3] leading-[150%] shadow-[0px_0px_0px_1px_#20346014,0px_1px_2px_0px_#2034601F] h-[53px] w-full py-[6px] px-[8px] outline-none min-h-[53px] max-h-[200px]"
          placeholder="اكتب ملاحظاتك هنا..."
        ></textarea>
      ),
    },
    {
      id: "ai-notes",
      label: "توصيات ذكية",
      description:
        "اقتراحات عملية بناءً على التحليل (مثل حضور جلسة، مشاركة مع الأسرة، نشاط معين...).",
      content: (
        <div className="flex flex-col gap-[12px]">
          <div className="flex justify-between bg-white p-[20px] items-center">
            <div className="flex flex-col ">
              <p className="font-semibold text-[#065F46] mb-[24px] w-fit rounded-[12px] py-[1px] px-[6px] bg-[#D1FAE5] text-[12px] border-1 border-[#A7F3D0]">
                منخفض
              </p>
              <p className="mb-[12px] border-[##A7F3D0] font-semibold text-[16px] text-[#1D2939] leading-[20px]">
                يفضل تحديد جلسة فردية للطفل خلال هذا الأسبوع
              </p>
              <p className="text-[#475467] font-medium text-[12px]">
                متابعة تقدم الطفل بشكل أعمق وضمان استمرارية الدعم
              </p>
            </div>

            <div className="relative inline-block rounded-[8px] shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F]">
              <select
                id="status"
                className="appearance-none bg-white pr-[16px] pl-[43px] py-[10px] rounded-[8px] font-semibold text-sm cursor-pointer focus:outline-none text-right"
                style={{
                  backgroundImage: "url('/images/chevron.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left 18px center",
                  backgroundSize: "16px",
                }}
              >
                <option value="completed" className="text-green-600">
                  تمييز كمكتمل
                </option>
                <option value="incomplete" className="text-red-600">
                  غير مكتمل
                </option>
              </select>
            </div>
          </div>

          <div className="flex justify-between bg-white p-[20px] items-center">
            <div className="flex flex-col">
              <p className="font-semibold text-[#9F1239] mb-[24px] w-fit rounded-[12px] py-[1px] px-[6px] bg-[#FFE4E6] text-[12px] border-1 border-[#FECDD3]">
                مرتفع
              </p>
              <p className="mb-[12px] border-[##A7F3D0] font-semibold text-[16px] text-[#1D2939] leading-[20px]">
                يوصى بإجراء تقييم إضافي للطفل في الأسبوع المقبل
              </p>
              <p>لتحديد أي احتياجات جديدة والتأكد من دقة خطة التدخل</p>
            </div>

            <div className="relative inline-block rounded-[8px] shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F]">
              <select
                id="status"
                className="appearance-none bg-white pr-[16px] pl-[43px] py-[10px] rounded-[8px] font-semibold text-sm cursor-pointer focus:outline-none text-right"
                style={{
                  backgroundImage: "url('/images/chevron.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left 18px center",
                  backgroundSize: "16px",
                }}
              >
                <option value="completed" className="text-green-600">
                  تمييز كمكتمل
                </option>
                <option value="incomplete" className="text-red-600">
                  غير مكتمل
                </option>
              </select>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "progress",
      label: "تطور الحالة بمرور الوقت",
      description:
        "خط زمني يوضح تغير الحالة بناءً على الرسومات السابقة (إن وُجدت).",
      content: (
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
                الرسم الحالي يعكس حالة إيجابية بشكل عام؛ حيث يظهر الطفل تعبيرات
                أكثر انفتاحًا وتفاصيل متوازنة في الرسم. هذا يشير إلى شعور
                بالاستقرار النفسي وارتياح عاطفي في الفترة الأخيرة.
              </p>
            </div>

            <button className="cursor-pointer transition-all hover:opacity-75 hover:translate-x-0.5 py-[10px] px-[16px] rounded-[8px] text-[#101828] font-semibold leading-[20px] text-[14px] shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F]">
              {" "}
              عرض التحليل كامل
            </button>
          </div>
        </div>
      ),
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div dir="rtl">
      {/* Tabs */}
      <div className="border-b border-[#E4E7EC]">
        <div className="flex mx-auto max-w-[1076px]">
          <div className="flex py-[24px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer
                  ${
                    activeTab === tab.id
                      ? "bg-white font-semibold shadow-[0px_2px_4px_0px_#2034600A,0px_1px_2px_-1px_#20346014,0px_0px_0px_1px_#20346014] text-[#101828] rounded-full"
                      : "text-[#98A2B3] hover:text-[#101828]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mx-auto max-w-[1076px] py-[32px]">
        <h3 className="text-[18px] font-semibold text-[#101828] mb-[12px]">
          {currentTab.label}
        </h3>
        <p className="font-medium text-[14px] text-[#667085]">
          {currentTab.description}
        </p>

        <div className="mt-[32px]">
          {currentTab.id === "progress" && (
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
          )}
          <div className="rounded-[16px] bg-[#F9FAFB] border border-[#f2f4f7] px-[24px] py-[20px]">
            {currentTab.content}
          </div>
        </div>
      </div>
    </div>
  );
}
