import React from 'react'
import { 
  LineChart, 
  Line, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceArea
} from 'recharts';

const data = [
  { date: "01 Jul", وليد: -5, ليلى: -4, محمد: -3 },
  { date: "05 Jul", وليد: -4, ليلى: -3, محمد: -2 },
  { date: "10 Jul", وليد: -3, ليلى: -2, محمد: -1 },
  { date: "15 Jul", وليد: -2, ليلى: 0,  محمد: 1 },
  { date: "20 Jul", وليد: 0,  ليلى: 2,  محمد: 3 },
  { date: "25 Jul", وليد: 1,  ليلى: 3,  محمد: 4 },
  { date: "01 Aug", وليد: 3,  ليلى: 4,  محمد: 5 },
  { date: "05 Aug", وليد: 4,  ليلى: 6,  محمد: 7 },
];

// ✅ دالة لتوليد النص حسب القيمة
const getStatusText = (value) => {
  if (value > 0) return "علامات تحسن";
  if (value < 0) return "حالة سلبية مستمرة";
  return "تعافي";
};

// ✅ Tooltip مخصص
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-lg p-4 rounded-xl text-sm border">
        <p className="font-semibold mb-2 flex items-center gap-2">
          📅 {label}
        </p>
        {payload.map((item, index) => (
          <p key={index} className="flex justify-between" style={{ color: item.color }}>
            <span className="font-medium">{item.name} :</span>
            <span>{item.value}</span>
            <span className="ml-2 text-gray-600">{getStatusText(item.value)}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function EmotionalChart() {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E4E7EC" />
          {/* ✅ محور X (التواريخ) */}
          <XAxis dataKey="date" />
          {/* ✅ محور Y من -10 إلى 10 */}
          <YAxis domain={[-10, 10]} />
          <Tooltip content={<CustomTooltip />} />

          {/* ✅ Highlight للفترة (15 Jul إلى 20 Jul) */}
          <ReferenceArea x1="15 Jul" x2="20 Jul" fill="#FACC15" fillOpacity={0.2} />

          {/* ✅ الخطوط */}
          <Line type="monotone" dataKey="وليد" stroke="#8B5CF6" strokeWidth={2} dot />
          <Line type="monotone" dataKey="ليلى" stroke="#F97316" strokeWidth={2} dot />
          <Line type="monotone" dataKey="محمد" stroke="#3B82F6" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
