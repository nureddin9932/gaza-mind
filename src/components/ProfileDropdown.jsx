import { useState, useRef, useEffect } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import box from '../assets/dashIcone/IconBox.png'
import select from '../assets/dashIcone/chevron-selector-vertical.png'
import logout from '../assets/dashIcone/open-rect-arrow-out.png'
const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div  ref={dropdownRef}>
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        {/* زر البروفايل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            {/* الأفاتار */}
            <img src={box} alt="box" className=' w-8 h-8' />
            
            {/* معلومات المستخدم */}
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">اسم المنصة</p>
              <p className="text-xs text-gray-500">name@mail.com</p>
            </div>
          </div>
          <img src={select} alt="" />
        </button>

        {/* قسم تسجيل الخروج */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-gray-50/50">
            <button
              className="w-full  flex flex-col items-start justify-start gap-2 px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-all duration-200"
            >
            <div className=' flex items-center justify-start gap-2'>
              <img src={logout} alt="logout icone" />
              <p className="font-medium">تسجيل الخروج</p>
            </div>
              <p>v.1.20.0 </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;