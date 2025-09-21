import { FiEdit2 } from "react-icons/fi";

function InfoField({ label, value, status, editable = false, onEdit, icon }) {
  return (
    <div className="flex items-center justify-between text-sm bg-gray-50 p-2 rounded-md">
      <span className="text-gray-600">{label}</span>
      <div className="flex items-center gap-2">
        {icon && <span className="text-gray-500">{icon}</span>}
        <span className="font-medium text-gray-800">{value}</span>
        {status && (
          <span
            className={`w-2 h-2 rounded-full ${
              status === "قلق" ? "bg-red-500" : "bg-green-500"
            }`}
          ></span>
        )}
        {editable && (
          <button
            onClick={onEdit}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <FiEdit2 size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

export default InfoField;
