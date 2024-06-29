"use client";
import { useState, FormEvent } from "react";

const HeaderSearch: React.FC = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (city && state) {
      let cityParam = city.replace(" ", "-");
      let stateParam = state.replace(" ", "-");
      window.location.href = `/${cityParam}/${stateParam}`;
    }
  };

  return (
    <nav className="flex md:grow flex-col self-center">
      {/* <div className="flex grow flex-col md:flex-row"> */}
      <form
        onSubmit={handleSubmit}
        aria-label="City and state search input"
        className="flex p-2 md:justify-center flex-col md:flex-row border-[#A5AFBE] self-center shadow-xl text-paprika-salmon rounded-xl font-bold gap-0 md:gap-4"
      >
        <div className="self-center flex">
          <div className="self-center flex">
            <svg
              width="20"
              height="25"
              viewBox="0 0 24 25"
              className="self-center"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.277588 10.4504C0.277588 15.9005 4.70288 20.3102 10.153 20.3102C12.2492 20.3102 14.1746 19.6581 15.7739 18.5402L21.5501 24.3319C21.8762 24.6424 22.2799 24.7821 22.6991 24.7821C23.5997 24.7821 24.2519 24.0989 24.2519 23.1983C24.2519 22.7636 24.0809 22.3754 23.817 22.0804L18.0719 16.3197C19.2986 14.6738 20.0128 12.6553 20.0128 10.4504C20.0128 5.0003 15.6031 0.575012 10.153 0.575012C4.70288 0.575012 0.277588 5.0003 0.277588 10.4504ZM2.6688 10.4504C2.6688 6.3046 6.00718 2.96623 10.153 2.96623C14.2832 2.96623 17.6372 6.3046 17.6372 10.4504C17.6372 14.5807 14.2832 17.9346 10.153 17.9346C6.00718 17.9346 2.6688 14.5807 2.6688 10.4504Z"
                fill="#FF8174"
              />
            </svg>
          </div>

          <input
            aria-label="Dietary Restrictions"
            id="dietary"
            type="text"
            autoComplete="off"
            placeholder="“Gluten Free Restaurants”"
            className="self-center placeholder-[#A5AFBE] p-2 border-gray-300 rounded-lg self-end rounded-b-none text-black focus:outline-none focus:border-paprika-light"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="text-[#CCCCCC] self-center hidden md:flex">|</div>
        <div className="self-center flex">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            className="self-center"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4279 16.2188C13.5781 16.2188 12.7473 15.9667 12.0407 15.4946C11.3341 15.0225 10.7833 14.3514 10.4581 13.5662C10.1329 12.7811 10.0478 11.9171 10.2136 11.0836C10.3794 10.2501 10.7886 9.48446 11.3896 8.88353C11.9905 8.2826 12.7561 7.87336 13.5896 7.70757C14.4232 7.54177 15.2871 7.62686 16.0723 7.95208C16.8574 8.2773 17.5285 8.82804 18.0006 9.53466C18.4728 10.2413 18.7248 11.072 18.7248 11.9219C18.7234 13.0611 18.2703 14.1532 17.4648 14.9587C16.6592 15.7642 15.5671 16.2174 14.4279 16.2188ZM14.4279 9.34375C13.918 9.34375 13.4196 9.49496 12.9956 9.77824C12.5716 10.0615 12.2412 10.4642 12.046 10.9353C11.8509 11.4064 11.7999 11.9247 11.8993 12.4248C11.9988 12.925 12.2444 13.3843 12.6049 13.7449C12.9655 14.1054 13.4248 14.351 13.925 14.4505C14.4251 14.5499 14.9434 14.4989 15.4145 14.3038C15.8856 14.1086 16.2883 13.7782 16.5716 13.3542C16.8548 12.9302 17.006 12.4318 17.006 11.9219C17.0054 11.2383 16.7335 10.583 16.2502 10.0996C15.7668 9.61628 15.1115 9.34443 14.4279 9.34375Z"
              fill="#FF8174"
            />
            <path
              d="M14.4279 26.5312L7.17822 17.9813C7.07749 17.8529 6.9778 17.7238 6.87916 17.5938C5.64079 15.9625 4.97179 13.97 4.97479 11.9219C4.97479 9.41475 5.97074 7.01031 7.74354 5.23751C9.51635 3.4647 11.9208 2.46875 14.4279 2.46875C16.935 2.46875 19.3395 3.4647 21.1123 5.23751C22.8851 7.01031 23.881 9.41475 23.881 11.9219C23.884 13.969 23.2153 15.9606 21.9775 17.5912L21.9767 17.5938C21.9767 17.5938 21.7188 17.9323 21.6802 17.9779L14.4279 26.5312ZM8.25158 16.5582C8.25158 16.5582 8.45182 16.8229 8.49737 16.8796L14.4279 23.8741L20.3662 16.8702C20.404 16.8229 20.6051 16.5565 20.606 16.5556C21.6176 15.2228 22.1643 13.5951 22.1623 11.9219C22.1623 9.87059 21.3474 7.90332 19.8969 6.45285C18.4465 5.00237 16.4792 4.1875 14.4279 4.1875C12.3766 4.1875 10.4094 5.00237 8.95888 6.45285C7.50841 7.90332 6.69354 9.87059 6.69354 11.9219C6.69173 13.5961 7.23905 15.2248 8.25158 16.5582Z"
              fill="#FF8174"
            />
          </svg>

          <input
            aria-label="State"
            id="state"
            type="text"
            placeholder="2374 Willow St. Ave"
            autoComplete="off"
            className="self-center placeholder-[#A5AFBE] p-2 border-gray-300 rounded-lg self-end rounded-b-none text-black focus:outline-none focus:border-paprika-light"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
      </form>
      {/* </div> */}
    </nav>
  );
};

export default HeaderSearch;
