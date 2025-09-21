import RecommendationItem from "../RecommendationItem/RecommendationItem";

const recommendations = [
  {
    status: "منخفض",
    title: "يفضّل تحديد جلسة فردية للطفل خلال هذا الأسبوع",
    description: "لمناقشة مشاعره الأخيرة وتعزيز تواصله مع الأخصائي",
  },
  {
    status: "مرتفع",
    title: "يوصى بإجراء تقييم إضافي للطفل في الأسبوع المقبل",
    description: "للتأكد من دقة الملاحظات السابقة ووضع خطة متابعة أدق",
  },
  {
    status: "متوسط",
    title: "يجب الإبقاء على جلسات المتابعة منتظمة خلال الشهر",
    description: "لدعم استقرار الحالة النفسية وتجنب أي تراجع محتمل",
  },
];

function RecommendationsList() {
  return (
    <div className="flex flex-col gap-4 p-3 bg-[#F9FAFB] rounded-2xl">
      <div className="flex justify-between pb-8">
        <h3 className=" text-[#101828] text-[18px] font-semibold">
          التوصيات الذكية
        </h3>
        <ul className="flex gap-2 text-[#98A2B3]">
          <li>
            <a className="cursor-pointer">مكتملة</a>
          </li>
          <li>
            <a className="cursor-pointer">قيد التنفيذ</a>
          </li>
          <li>
            <a className="cursor-pointer">لم يتم البدء</a>
          </li>
        </ul>
      </div>
      {recommendations.map((rec, i) => (
        <RecommendationItem key={i} {...rec} />
      ))}
    </div>
  );
}

export default RecommendationsList;
