import Image from "next/image";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
import HeaderAccount from "./HeaderAccount";

//header element with Paprika logo (navigates to home page)
const Header = () => {
  return (
    <header className="flex self-center justify-between items-center w-full lg:w-3/4 xl:w-2/3 self-center p-6">
      <Link href="/" className="scale-75">
        <svg
          width="171"
          height="46"
          viewBox="0 0 171 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.6787 15.5411C56.7909 15.5411 57.8283 15.8619 58.7908 16.5036C59.7747 17.1453 60.5661 18.0115 61.1651 19.1024C61.764 20.1933 62.0634 21.4125 62.0634 22.76C62.0634 24.0861 61.764 25.2947 61.1651 26.3855C60.5661 27.4764 59.7747 28.3533 58.7908 29.0164C57.8283 29.6581 56.7909 29.9789 55.6787 29.9789H49.7752L50.096 29.4014V36.0429C50.096 36.599 49.9249 37.0696 49.5827 37.4546C49.2404 37.8182 48.7912 38 48.2351 38C47.7004 38 47.2619 37.8182 46.9197 37.4546C46.5774 37.0696 46.4063 36.599 46.4063 36.0429V17.4982C46.4063 16.9421 46.5881 16.4822 46.9517 16.1186C47.3368 15.7336 47.8073 15.5411 48.3635 15.5411H55.6787ZM55.6787 26.3213C56.0851 26.3213 56.4808 26.1502 56.8658 25.808C57.2508 25.4658 57.5716 25.0273 57.8283 24.4925C58.085 23.9364 58.2133 23.3589 58.2133 22.76C58.2133 22.1397 58.085 21.5622 57.8283 21.0275C57.5716 20.4927 57.2508 20.0649 56.8658 19.7441C56.4808 19.4019 56.0851 19.2307 55.6787 19.2307H49.711L50.096 18.6532V26.8347L49.7431 26.3213H55.6787ZM80.5971 20.5141C81.1532 20.5141 81.6131 20.6959 81.9767 21.0595C82.3403 21.4232 82.5221 21.8937 82.5221 22.4712V36.0429C82.5221 36.599 82.3403 37.0696 81.9767 37.4546C81.6131 37.8182 81.1532 38 80.5971 38C80.0409 38 79.5811 37.8182 79.2174 37.4546C78.8538 37.0696 78.672 36.599 78.672 36.0429V34.4707L79.3779 34.7595C79.3779 35.0376 79.2281 35.3798 78.9287 35.7862C78.6292 36.1712 78.2228 36.5562 77.7095 36.9412C77.1961 37.3262 76.5865 37.6578 75.8807 37.9358C75.1962 38.1925 74.4476 38.3208 73.6348 38.3208C72.1589 38.3208 70.8221 37.9465 69.6243 37.1979C68.4264 36.4279 67.4746 35.3798 66.7688 34.0536C66.0843 32.7061 65.7421 31.1661 65.7421 29.4335C65.7421 27.6796 66.0843 26.1395 66.7688 24.8134C67.4746 23.4659 68.4158 22.4178 69.5922 21.6691C70.7686 20.8991 72.0734 20.5141 73.5064 20.5141C74.4262 20.5141 75.2711 20.6531 76.0411 20.9312C76.8111 21.2093 77.4742 21.5622 78.0303 21.99C78.6078 22.4178 79.0463 22.8563 79.3458 23.3054C79.6666 23.7332 79.827 24.0968 79.827 24.3963L78.672 24.8134V22.4712C78.672 21.9151 78.8538 21.4552 79.2174 21.0916C79.5811 20.7066 80.0409 20.5141 80.5971 20.5141ZM74.116 34.7916C75.0572 34.7916 75.8807 34.5563 76.5865 34.0857C77.2924 33.6152 77.8378 32.9735 78.2228 32.1607C78.6292 31.3479 78.8324 30.4388 78.8324 29.4335C78.8324 28.4068 78.6292 27.4871 78.2228 26.6743C77.8378 25.8615 77.2924 25.2198 76.5865 24.7492C75.8807 24.2787 75.0572 24.0434 74.116 24.0434C73.1963 24.0434 72.3835 24.2787 71.6776 24.7492C70.9718 25.2198 70.4157 25.8615 70.0093 26.6743C69.6243 27.4871 69.4318 28.4068 69.4318 29.4335C69.4318 30.4388 69.6243 31.3479 70.0093 32.1607C70.4157 32.9735 70.9718 33.6152 71.6776 34.0857C72.3835 34.5563 73.1963 34.7916 74.116 34.7916ZM96.8615 20.5141C98.3588 20.5141 99.6956 20.8991 100.872 21.6691C102.07 22.4178 103.011 23.4552 103.695 24.7813C104.401 26.1075 104.754 27.6475 104.754 29.4014C104.754 31.1554 104.401 32.7061 103.695 34.0536C103.011 35.3798 102.081 36.4279 100.904 37.1979C99.7491 37.9465 98.4443 38.3208 96.9898 38.3208C96.1343 38.3208 95.3321 38.1818 94.5835 37.9037C93.8349 37.6257 93.1718 37.2728 92.5943 36.845C92.0382 36.4172 91.5997 35.9894 91.2788 35.5616C90.9794 35.1124 90.8297 34.7381 90.8297 34.4387L91.8243 34.0216V42.4597C91.8243 43.0158 91.6425 43.4757 91.2788 43.8393C90.9152 44.2243 90.4553 44.4168 89.8992 44.4168C89.3431 44.4168 88.8832 44.235 88.5196 43.8714C88.156 43.5078 87.9742 43.0372 87.9742 42.4597V22.7921C87.9742 22.236 88.156 21.7761 88.5196 21.4125C88.8832 21.0275 89.3431 20.8349 89.8992 20.8349C90.4553 20.8349 90.9152 21.0275 91.2788 21.4125C91.6425 21.7761 91.8243 22.236 91.8243 22.7921V24.3642L91.2788 24.0755C91.2788 23.7974 91.4286 23.4659 91.728 23.0808C92.0275 22.6744 92.4339 22.2787 92.9472 21.8937C93.4606 21.4873 94.0488 21.1558 94.7119 20.8991C95.3963 20.6424 96.1129 20.5141 96.8615 20.5141ZM96.3802 24.0434C95.4391 24.0434 94.6156 24.2787 93.9097 24.7492C93.2039 25.2198 92.6478 25.8615 92.2414 26.6743C91.8564 27.4657 91.6639 28.3747 91.6639 29.4014C91.6639 30.4067 91.8564 31.3265 92.2414 32.1607C92.6478 32.9735 93.2039 33.6152 93.9097 34.0857C94.6156 34.5563 95.4391 34.7916 96.3802 34.7916C97.3214 34.7916 98.1342 34.5563 98.8186 34.0857C99.5245 33.6152 100.07 32.9735 100.455 32.1607C100.861 31.3265 101.065 30.4067 101.065 29.4014C101.065 28.3747 100.861 27.4657 100.455 26.6743C100.07 25.8615 99.5245 25.2198 98.8186 24.7492C98.1342 24.2787 97.3214 24.0434 96.3802 24.0434ZM111.329 38C110.773 38 110.313 37.8182 109.95 37.4546C109.586 37.0696 109.404 36.599 109.404 36.0429V22.7921C109.404 22.236 109.586 21.7761 109.95 21.4125C110.313 21.0275 110.773 20.8349 111.329 20.8349C111.885 20.8349 112.345 21.0275 112.709 21.4125C113.072 21.7761 113.254 22.236 113.254 22.7921V25.808L113.03 23.6584C113.265 23.145 113.564 22.6958 113.928 22.3108C114.313 21.9044 114.741 21.5729 115.211 21.3162C115.682 21.0381 116.185 20.8349 116.719 20.7066C117.254 20.5783 117.789 20.5141 118.324 20.5141C118.965 20.5141 119.5 20.6959 119.928 21.0595C120.377 21.4232 120.602 21.8509 120.602 22.3429C120.602 23.0488 120.42 23.5621 120.056 23.8829C119.692 24.1824 119.297 24.3321 118.869 24.3321C118.463 24.3321 118.088 24.2573 117.746 24.1075C117.425 23.9578 117.051 23.8829 116.623 23.8829C116.238 23.8829 115.842 23.9792 115.436 24.1717C115.051 24.3428 114.687 24.6209 114.345 25.0059C114.024 25.3909 113.757 25.8722 113.543 26.4497C113.351 27.0058 113.254 27.6689 113.254 28.4389V36.0429C113.254 36.599 113.072 37.0696 112.709 37.4546C112.345 37.8182 111.885 38 111.329 38ZM128.225 36.0429C128.225 36.599 128.043 37.0696 127.679 37.4546C127.316 37.8182 126.856 38 126.3 38C125.743 38 125.284 37.8182 124.92 37.4546C124.556 37.0696 124.374 36.599 124.374 36.0429V22.7921C124.374 22.236 124.556 21.7761 124.92 21.4125C125.284 21.0275 125.743 20.8349 126.3 20.8349C126.856 20.8349 127.316 21.0275 127.679 21.4125C128.043 21.7761 128.225 22.236 128.225 22.7921V36.0429ZM126.267 18.7495C125.54 18.7495 125.027 18.6318 124.727 18.3965C124.428 18.1613 124.278 17.7442 124.278 17.1453V16.5357C124.278 15.9154 124.439 15.4983 124.759 15.2844C125.102 15.0491 125.615 14.9315 126.3 14.9315C127.048 14.9315 127.572 15.0491 127.872 15.2844C128.171 15.5197 128.321 15.9368 128.321 16.5357V17.1453C128.321 17.7656 128.16 18.1933 127.84 18.4286C127.519 18.6425 126.995 18.7495 126.267 18.7495ZM135.711 38C135.155 38 134.695 37.8182 134.331 37.4546C133.967 37.0696 133.786 36.599 133.786 36.0429V16.2148C133.786 15.6587 133.967 15.1988 134.331 14.8352C134.695 14.4502 135.155 14.2577 135.711 14.2577C136.267 14.2577 136.727 14.4502 137.09 14.8352C137.454 15.1988 137.636 15.6587 137.636 16.2148V36.0429C137.636 36.599 137.454 37.0696 137.09 37.4546C136.727 37.8182 136.267 38 135.711 38ZM145.913 20.8349C146.405 20.8349 146.833 21.0381 147.197 21.4445C147.56 21.8509 147.742 22.2467 147.742 22.6317C147.742 23.145 147.486 23.6263 146.972 24.0755L137.315 32.9628L137.154 28.5352L144.502 21.4445C144.908 21.0381 145.379 20.8349 145.913 20.8349ZM146.395 37.9679C145.839 37.9679 145.368 37.754 144.983 37.3262L139.047 31.0377L141.967 28.3427L147.742 34.6312C148.149 35.0589 148.352 35.5402 148.352 36.0749C148.352 36.6311 148.127 37.0909 147.678 37.4546C147.25 37.7968 146.823 37.9679 146.395 37.9679ZM166.942 20.5141C167.499 20.5141 167.958 20.6959 168.322 21.0595C168.686 21.4232 168.867 21.8937 168.867 22.4712V36.0429C168.867 36.599 168.686 37.0696 168.322 37.4546C167.958 37.8182 167.499 38 166.942 38C166.386 38 165.926 37.8182 165.563 37.4546C165.199 37.0696 165.017 36.599 165.017 36.0429V34.4707L165.723 34.7595C165.723 35.0376 165.574 35.3798 165.274 35.7862C164.975 36.1712 164.568 36.5562 164.055 36.9412C163.542 37.3262 162.932 37.6578 162.226 37.9358C161.542 38.1925 160.793 38.3208 159.98 38.3208C158.504 38.3208 157.167 37.9465 155.97 37.1979C154.772 36.4279 153.82 35.3798 153.114 34.0536C152.43 32.7061 152.087 31.1661 152.087 29.4335C152.087 27.6796 152.43 26.1395 153.114 24.8134C153.82 23.4659 154.761 22.4178 155.938 21.6691C157.114 20.8991 158.419 20.5141 159.852 20.5141C160.772 20.5141 161.616 20.6531 162.386 20.9312C163.156 21.2093 163.82 21.5622 164.376 21.99C164.953 22.4178 165.392 22.8563 165.691 23.3054C166.012 23.7332 166.172 24.0968 166.172 24.3963L165.017 24.8134V22.4712C165.017 21.9151 165.199 21.4552 165.563 21.0916C165.926 20.7066 166.386 20.5141 166.942 20.5141ZM160.461 34.7916C161.403 34.7916 162.226 34.5563 162.932 34.0857C163.638 33.6152 164.183 32.9735 164.568 32.1607C164.975 31.3479 165.178 30.4388 165.178 29.4335C165.178 28.4068 164.975 27.4871 164.568 26.6743C164.183 25.8615 163.638 25.2198 162.932 24.7492C162.226 24.2787 161.403 24.0434 160.461 24.0434C159.542 24.0434 158.729 24.2787 158.023 24.7492C157.317 25.2198 156.761 25.8615 156.355 26.6743C155.97 27.4871 155.777 28.4068 155.777 29.4335C155.777 30.4388 155.97 31.3479 156.355 32.1607C156.761 32.9735 157.317 33.6152 158.023 34.0857C158.729 34.5563 159.542 34.7916 160.461 34.7916Z"
            fill="#FF7B7B"
          />
          <path
            d="M7.8328 9.23392C9.03104 13.6633 13.1353 16.4066 13.1353 16.4066C13.1353 16.4066 15.2968 11.9683 14.0985 7.53892C12.9003 3.10951 8.79607 0.366272 8.79607 0.366272C8.79607 0.366272 6.63455 4.80451 7.8328 9.23392Z"
            fill="#3F3D56"
          />
          <path
            d="M14.9165 7.663C12.7081 11.6853 13.7628 16.5079 13.7628 16.5079C13.7628 16.5079 18.398 14.8092 20.6063 10.7869C22.8146 6.76459 21.7599 1.94196 21.7599 1.94196C21.7599 1.94196 17.1248 3.64072 14.9165 7.663Z"
            fill="#3F3D56"
          />
          <path
            d="M13.9024 43.3124C21.5805 43.3124 27.8049 37.088 27.8049 29.4099C27.8049 21.7318 21.5805 15.5075 13.9024 15.5075C6.22433 15.5075 0 21.7318 0 29.4099C0 37.088 6.22433 43.3124 13.9024 43.3124Z"
            fill="#FF7B7B"
          />
          <path
            d="M9.59305 8.28224C12.881 11.483 13.2826 16.4032 13.2826 16.4032C13.2826 16.4032 8.35337 16.1341 5.06539 12.9334C1.7774 9.73263 1.37579 4.81238 1.37579 4.81238C1.37579 4.81238 6.30507 5.08151 9.59305 8.28224Z"
            fill="#FF7B7B"
          />
          <path
            d="M16.8456 8.1984C16.995 12.7846 13.8723 16.6081 13.8723 16.6081C13.8723 16.6081 10.5074 12.9959 10.3581 8.40967C10.2087 3.82348 13.3314 0 13.3314 0C13.3314 0 16.6963 3.61221 16.8456 8.1984Z"
            fill="#FF7B7B"
          />
          <path
            d="M13.3234 35.0095C17.2691 35.0095 20.4678 31.8109 20.4678 27.8652C20.4678 23.9195 17.2691 20.7209 13.3234 20.7209C9.37775 20.7209 6.17914 23.9195 6.17914 27.8652C6.17914 31.8109 9.37775 35.0095 13.3234 35.0095Z"
            fill="#F2F2F2"
          />
          <path
            d="M13.3236 26.1274C14.6033 26.1274 15.6407 25.09 15.6407 23.8104C15.6407 22.5307 14.6033 21.4933 13.3236 21.4933C12.0439 21.4933 11.0065 22.5307 11.0065 23.8104C11.0065 25.09 12.0439 26.1274 13.3236 26.1274Z"
            fill="#3F3D56"
          />
        </svg>

        {/* <Image src="/nav_logo.png" alt="nav logo" width={150} height={60} /> */}
      </Link>
      <HeaderSearch />
      <HeaderAccount />
    </header>
  );
};

export default Header;
