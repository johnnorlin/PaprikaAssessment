// components/ButtonWithIcon.tsx
const ButtonWithIcon: React.FC = () => {
  return (
    <button className="flex flex-row h-1/2 justify-between self-center gap-0 lg:gap-4 p-2 border-2 rounded-2xl border-[#E7EAEE]">
      <svg
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SVG content here */}
      </svg>
      <div className="self-center flex flex-col">
        <h3 className="font-bold">Add Item</h3>
        <p className="hidden lg:flex">Add a new item to this menu</p>
      </div>
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        className="self-center"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.94869 19.3728C7.05428 19.4787 7.17972 19.5626 7.31781 19.6199C7.45591 19.6772 7.60395 19.7067 7.75346 19.7067C7.90298 19.7067 8.05102 19.6772 8.18911 19.6199C8.32721 19.5626 8.45264 19.4787 8.55823 19.3728L16.1149 11.8162C16.1992 11.732 16.266 11.6321 16.3117 11.5221C16.3573 11.4121 16.3808 11.2942 16.3808 11.1751C16.3808 11.056 16.3573 10.9381 16.3117 10.8281C16.266 10.718 16.1992 10.6181 16.1149 10.534L8.55823 2.97736C8.11265 2.53178 7.39427 2.53178 6.94869 2.97736C6.50311 3.42294 6.50311 4.14132 6.94869 4.5869L13.5375 11.1751L6.94869 17.7639C6.50311 18.2095 6.50311 18.9279 6.94869 19.3728Z"
          fill="#3F414A"
        />
      </svg>
    </button>
  );
};

export default ButtonWithIcon;
