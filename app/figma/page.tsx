"use static";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  //Traditional metadata fields
  title: "Restaurant Finder",
  description:
    "Find the best restaurants in your city and state. Search by dietary preferences like vegan, vegetarian, gluten-free, and more.",
  //Facebooks OpenGraph Metadata format
  openGraph: {
    type: "website",
    url: "http://localhost:3000",
    title: "Restaurant Finder",
    description:
      "Find the best restaurants in your city and state. Search by dietary preferences like vegan, vegetarian, gluten-free, and more.",
    // OpenGraph Image placeholder code
    // images: [
    //   {
    //     url: "http://localhost:3000/ogImage.jpg", // Local image URL
    //     width: 1200,
    //     height: 630,
    //     alt: "Restaurant Finder",
    //   },
    // ],
  },
};

const FigmaPage: React.FC = () => {
  return (
    <div className="h-full self-center w-full lg:w-3/4 xl:w-2/3 bg-cover bg-center">
      <div
        className="h-1/3 flex"
        style={{
          backgroundImage: "url('/Frame 11250.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div className="w-full flex flex-row justify-between">
          <button className="m-8 flex items-center justify-center bg-white h-10 w-10 rounded-full">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              className="self-center"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0648 3.09259H5.06482C3.96025 3.09259 3.06482 3.98802 3.06482 5.09259V19.0926C3.06482 20.1972 3.96025 21.0926 5.06482 21.0926H19.0648C20.1694 21.0926 21.0648 20.1972 21.0648 19.0926V5.09259C21.0648 3.98802 20.1694 3.09259 19.0648 3.09259Z"
                stroke="#FF8174"
                stroke-width="1.6331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.56482 10.0925C9.39325 10.0925 10.0648 9.42096 10.0648 8.59253C10.0648 7.7641 9.39325 7.09253 8.56482 7.09253C7.73639 7.09253 7.06482 7.7641 7.06482 8.59253C7.06482 9.42096 7.73639 10.0925 8.56482 10.0925Z"
                stroke="#FF8174"
                stroke-width="1.6331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.0648 15.0925L16.0648 10.0925L5.06482 21.0925"
                stroke="#FF8174"
                stroke-width="1.6331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="flex flex-row">
            <button className="m-8 flex items-center justify-center bg-white h-10 w-10 rounded-full">
              <svg
                width="54"
                height="53"
                viewBox="0 0 54 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27.0163" cy="26.4815" r="26.4815" fill="white" />
                <g clip-path="url(#clip0_1_244)">
                  <path
                    d="M19.8224 41.9835H35.8652C38.7883 41.9835 40.257 40.5288 40.257 37.6476V23.6889C40.257 20.8076 38.7883 19.353 35.8652 19.353H19.8224C16.8992 19.353 15.4306 20.8076 15.4306 23.6889V37.6476C15.4306 40.5288 16.8992 41.9835 19.8224 41.9835ZM17.6825 37.5217V23.8147C17.6825 22.3602 18.4517 21.6049 19.8504 21.6049H35.8231C37.2079 21.6049 38.0052 22.3602 38.0052 23.8147V37.5217C38.0052 38.9764 37.2079 39.7317 35.8231 39.7317H19.8504C18.4517 39.7317 17.6825 38.9764 17.6825 37.5217Z"
                    fill="#FF8174"
                  />
                  <path
                    d="M31.6552 29.9408V12.0658C31.6552 9.98183 29.9347 8.27545 27.8367 8.27545C25.7527 8.27545 24.0323 9.98183 24.0323 12.0658V29.9408C24.0323 32.0108 25.7527 33.7312 27.8367 33.7312C29.9347 33.7312 31.6552 32.0108 31.6552 29.9408Z"
                    fill="white"
                  />
                  <path
                    d="M27.8368 31.0316C28.4382 31.0316 28.9558 30.5281 28.9558 29.9406V15.5764L28.8718 13.4784L29.809 14.4714L31.9349 16.7373C32.1308 16.961 32.4105 17.0729 32.6902 17.0729C33.2637 17.0729 33.7113 16.6533 33.7113 16.0799C33.7113 15.7862 33.5853 15.5624 33.3756 15.3526L28.6481 10.7929C28.3683 10.5132 28.1305 10.4153 27.8368 10.4153C27.5572 10.4153 27.3194 10.5132 27.0256 10.7929L22.2981 15.3526C22.0883 15.5624 21.9764 15.7862 21.9764 16.0799C21.9764 16.6533 22.396 17.0729 22.9835 17.0729C23.2492 17.0729 23.5569 16.961 23.7527 16.7373L25.8647 14.4714L26.8158 13.4784L26.7319 15.5764V29.9406C26.7319 30.5281 27.2354 31.0316 27.8368 31.0316Z"
                    fill="#FF8174"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_244">
                    <rect
                      width="24.8264"
                      height="37.9179"
                      fill="white"
                      transform="translate(15.4306 8.27545)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="m-8 flex items-center justify-center bg-white h-10 w-10 rounded-full">
              <svg
                width="54"
                height="53"
                viewBox="0 0 54 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26.9792" cy="26.4815" r="26.4815" fill="white" />
                <g clip-path="url(#clip0_1_255)">
                  <path
                    d="M10.4283 22.0292C10.4283 28.7194 16.3787 35.2996 25.7793 40.9533C26.1293 41.1574 26.6292 41.3773 26.9793 41.3773C27.3293 41.3773 27.8294 41.1574 28.1961 40.9533C37.5798 35.2996 43.5302 28.7194 43.5302 22.0292C43.5302 16.4698 39.48 12.5436 34.0797 12.5436C30.9961 12.5436 28.496 13.9256 26.9793 16.0458C25.4959 13.9413 22.9624 12.5436 19.8789 12.5436C14.4786 12.5436 10.4283 16.4698 10.4283 22.0292ZM13.1118 22.0292C13.1118 17.8518 15.9787 15.0721 19.8455 15.0721C22.9791 15.0721 24.7791 16.9095 25.8458 18.48C26.2959 19.1082 26.5793 19.2809 26.9793 19.2809C27.3794 19.2809 27.6294 19.0925 28.1127 18.48C29.2628 16.9409 30.9961 15.0721 34.113 15.0721C37.9799 15.0721 40.8467 17.8518 40.8467 22.0292C40.8467 27.8713 34.2963 34.1689 27.3293 38.5348C27.1626 38.6447 27.046 38.7232 26.9793 38.7232C26.9126 38.7232 26.7959 38.6447 26.6459 38.5348C19.6622 34.1689 13.1118 27.8713 13.1118 22.0292Z"
                    fill="#FF8174"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_255">
                    <rect
                      width="33.1018"
                      height="29.7917"
                      fill="white"
                      transform="translate(10.4283 11.5856)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="h-full grid grid-cols-5 grid-rows-3">
        <div className="col-span-1 text-md row-span-2 border-r-2 border-[#E8E8E8] flex flex-col font-bold gap-8 p-8">
          <Link href="#best-matches">Best Matches</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#dietary-info">Dietary Info</Link>
          <Link href="#reviews">Reviews</Link>
        </div>
        <div className="col-span-4 row-span-3">
          <div className="w-full m-8 flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <h1 className="font-bold text-3xl">The Daily Grind</h1>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_53)">
                  <path
                    d="M8.46302 29.7698H11.6455C11.9388 29.7698 12.1588 29.8579 12.3788 30.0777L14.6374 32.3216C16.4853 34.1843 18.2012 34.1696 20.0491 32.3216L22.3076 30.0777C22.5423 29.8579 22.7476 29.7698 23.0556 29.7698H26.2233C28.8487 29.7698 30.0659 28.5671 30.0659 25.9272V22.7595C30.0659 22.4515 30.154 22.2462 30.3738 22.0116L32.6177 19.753C34.4804 17.9051 34.4657 16.1892 32.6177 14.3413L30.3738 12.0827C30.154 11.8627 30.0659 11.6427 30.0659 11.3494V8.16693C30.0659 5.55639 28.8632 4.32445 26.2233 4.32445H23.0556C22.7476 4.32445 22.5423 4.25113 22.3076 4.03112L20.0491 1.78725C18.2012 -0.0753235 16.4853 -0.0606585 14.6374 1.78725L12.3788 4.03112C12.1588 4.25113 11.9388 4.32445 11.6455 4.32445H8.46302C5.83782 4.32445 4.62054 5.52705 4.62054 8.16693V11.3494C4.62054 11.6427 4.54723 11.8627 4.32722 12.0827L2.08334 14.3413C0.220773 16.1892 0.235438 17.9051 2.08334 19.753L4.32722 22.0116C4.54723 22.2462 4.62054 22.4515 4.62054 22.7595V25.9272C4.62054 28.5526 5.83782 29.7698 8.46302 29.7698Z"
                    fill="#FF8174"
                  />
                  <path
                    d="M15.7082 24.2113C15.2096 24.2113 14.7989 24.0206 14.4176 23.5073L10.7365 18.9902C10.5165 18.6969 10.3845 18.3596 10.3845 18.037C10.3845 17.3623 10.8978 16.8197 11.5724 16.8197C11.9831 16.8197 12.3057 16.9663 12.6724 17.4503L15.6496 21.2928L21.9119 11.232C22.1905 10.7773 22.5719 10.5573 22.9679 10.5573C23.5985 10.5573 24.1998 10.9973 24.1998 11.6719C24.1998 12.0092 24.0091 12.3466 23.8331 12.6399L16.9402 23.5073C16.6322 23.9766 16.2069 24.2113 15.7082 24.2113Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_53">
                    <rect
                      width="33.3172"
                      height="33.332"
                      fill="white"
                      transform="translate(0.69191 0.395813)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-row text-xl">
              <div>1.2 miles away</div>
              <div className="mx-2"> | </div>
              <div className="text-[#36AA7D] text-2xl font-bold"> Open</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaPage;
