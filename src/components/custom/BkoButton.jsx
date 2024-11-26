const Button = ({ label, onClick, isLoading, className, ...props }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex w-full justify-center rounded-md bg-black mt-3 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ${className}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? 'Loading...' : label}
      </button>
    </>
  );
};

export default Button;
