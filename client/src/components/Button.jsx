export default function Button({ text, onClick, type }) {
  const colorMapping = {
    add: "bg-[#6A9C89]",
    update: "bg-[#6A9C89]",
    cancel: "bg-[#A04747]",
    edit: "bg-[#FFDA76]",
    delete: "bg-[#A04747]",
  };
  const bgColor = colorMapping[type] || "bg-gray-900";

  return (
    <button onClick={onClick} className="relative inline-block text-lg group">
      <span
        className={`relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white`}
      >
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span
          className={`absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 ${bgColor} group-hover:-rotate-180 ease`}
        ></span>
        <span className="relative">{text}</span>
      </span>
      <span
        className={`absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear ${bgColor} rounded-lg group-hover:mb-0 group-hover:mr-0`}
      ></span>
    </button>
  );
}
