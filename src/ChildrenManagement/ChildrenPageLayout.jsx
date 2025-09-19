import React from 'react';

export default function ChildrenPageLayout({ children }) {
  return (
    <div className="p-6 bg-[#F9FAFB] min-h-screen text-right">
      <div className="w-full bg-white border border-[#E4E7EC] rounded-xl shadow-sm p-6">
        {children}
      </div>
    </div>
  );
}