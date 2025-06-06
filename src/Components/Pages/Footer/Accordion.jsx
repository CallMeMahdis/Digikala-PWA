const Accordion = ({ title, children, isOpen, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-5 font-medium text-gray-500 border-b border-gray-200"
      >
        <span className="text-[13px] font-Bold text-[#000000]">{title}</span>
        <svg
          className={`w-3 h-3 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 10 6"
        >
          <path
            d="M9 5 5 1 1 5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="py-5 border-b border-gray-200">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
