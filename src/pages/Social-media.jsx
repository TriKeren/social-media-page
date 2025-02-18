import ui8Icon from "../assets/Ui8.png"

const SocialMediaPage = () => {
   const socialMedia = [
    {
      href: "https://dribbble.com/uistellar",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <circle cx="24" cy="24" r="19.375" fill="#ed3675"></circle>
          <path
            fill="#bd1949"
            fillRule="evenodd"
            d="M24,4C12.959,4,4,12.959,4,24c0,11.041,8.959,20,20,20	c11.02,0,20-8.959,20-20C44,12.959,35.02,4,24,4z M37.21,13.219c2.386,2.907,3.818,6.616,3.861,10.629	c-0.564-0.108-6.204-1.258-11.887-0.542c-0.13-0.282-0.239-0.586-0.369-0.889c-0.347-0.824-0.738-1.67-1.128-2.473	C33.978,17.384,36.842,13.696,37.21,13.219z M24,6.95c4.338,0,8.308,1.627,11.323,4.295c-0.304,0.434-2.885,3.883-8.959,6.16	c-2.798-5.141-5.9-9.349-6.377-10C21.267,7.102,22.612,6.95,24,6.95z M16.733,8.555c0.455,0.607,3.492,4.837,6.334,9.87	c-7.983,2.126-15.033,2.083-15.792,2.083C8.382,15.215,11.961,10.811,16.733,8.555z M6.907,24.022c0-0.174,0-0.347,0-0.521	c0.738,0.022,9.024,0.13,17.549-2.43c0.499,0.954,0.954,1.931,1.388,2.907c-0.217,0.065-0.456,0.13-0.672,0.195	c-8.807,2.842-13.492,10.607-13.883,11.258C8.577,32.417,6.907,28.403,6.907,24.022z M24,41.093c-3.948,0-7.592-1.345-10.477-3.601	c0.304-0.629,3.774-7.31,13.406-10.672c0.043-0.022,0.065-0.022,0.109-0.043c2.408,6.226,3.384,11.453,3.644,12.95	C28.62,40.616,26.364,41.093,24,41.093z M33.523,38.165c-0.174-1.041-1.085-6.03-3.319-12.169	c5.358-0.846,10.043,0.542,10.629,0.738C40.096,31.484,37.362,35.583,33.523,38.165z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      name: "Dribbble",
      handle: "@uistellar",
    },
    {
      href: "https://www.linkedin.com/company/uistellar/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path
            fill="#0078d4"
            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
          ></path>
          <path
            d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
            opacity=".05"
          ></path>
          <path
            d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
            opacity=".07"
          ></path>
          <path
            fill="#fff"
            d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
          ></path>
        </svg>
      ),
      name: "Linkedin",
      handle: "@uistellar",
    },
    {
      href: "https://www.instagram.com/uistellar",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <radialGradient
            id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
            cx="19.38"
            cy="42.035"
            r="44.899"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fd5"></stop>
            <stop offset=".328" stop-color="#ff543f"></stop>
            <stop offset=".348" stop-color="#fc5245"></stop>
            <stop offset=".504" stop-color="#e64771"></stop>
            <stop offset=".643" stop-color="#d53e91"></stop>
            <stop offset=".761" stop-color="#cc39a4"></stop>
            <stop offset=".841" stop-color="#c837ab"></stop>
          </radialGradient>
          <path
            fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
          ></path>
          <radialGradient
            id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
            cx="11.786"
            cy="5.54"
            r="29.813"
            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#4168c9"></stop>
            <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
          </radialGradient>
          <path
            fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
          ></path>
          <path
            fill="#fff"
            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
          ></path>
          <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
          <path
            fill="#fff"
            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
          ></path>
        </svg>
      ),
      name: "Instagram",
      handle: "@uistellar",
    },
    {
      href: "hellouistellar@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path
            fill="#4caf50"
            d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
          ></path>
          <path
            fill="#1e88e5"
            d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
          ></path>
          <polygon
            fill="#e53935"
            points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
          ></polygon>
          <path
            fill="#c62828"
            d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
          ></path>
          <path
            fill="#fbc02d"
            d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
          ></path>
        </svg>
      ),
      name: "E-Mail",
      handle: "hellouistellar@gmail.com",
    },
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

          .font-poppins{
                font-family: 'Poppins' , sans-serif;
          }`}
      </style>
      <div className="lg:max-w-screen-xl mx-5 mt-[90px] md:mt-10 lg:mt-32 overflow-x-hidden overflow-y-hidden flex justify-center">
        <div className="flex flex-col gap-6 justify-center lg:items-start items-start">
          <h1 className="text-4xl text font-poppins font-semibold">
            We're under construction.<br></br>Please check back for an update
            soon.
          </h1>
          <p className="items-start text-[#6e7178] font-medium text-[17px] font-poppins">
            Design Studio / Studio
          </p>
          <p className="items-start font-medium text-[17px] font-poppins">
            Social Media Links :
          </p>

          {/* Social Media  */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-2">
            {socialMedia.map((social, index) => (
              <a key={index} href={social.href} className="group">
                <div className="flex flex-row transition-transform transform group-hover:scale-95 duration-300 ease-in-out hover:bg-gray-100 rounded-xl md:w-full w-[320px]">
                  <div className="relative flex items-center justify-center">
                    <div className="h-20 w-20 flex items-center justify-center">
                      <div className="absolute w-14 h-14 rounded-full border flex items-center justify-center"></div>
                      {social.icon}
                    </div>
                  </div>
                  <div className="flex flex-col mx-2 items-start justify-center">
                    <h1 className="text-[15px] font-medium font-poppins">
                      {social.name}
                    </h1>
                    <h2 className="text-[13px] font-light text-[#6e7178]">
                      {social.handle}
                    </h2>
                  </div>
                </div>
              </a>
            ))}
            <a href="https://ui8.net/uistellar" className="group">
                <div className="flex flex-row transition-transform transform group-hover:scale-95 duration-300 ease-in-out hover:bg-gray-100 rounded-xl md:w-full w-[320px]">
                  <div className="relative flex items-center justify-center">
                    <div className="h-20 w-20 flex items-center justify-center">
                      <div className="absolute w-14 h-14 rounded-full border flex items-center justify-center"></div>
                      <img src={ui8Icon} className="w-8 h-8 rounded-full" alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col mx-2 items-start justify-center">
                    <h1 className="text-[15px] font-medium font-poppins">
                      UI8
                    </h1>
                    <h2 className="text-[13px] font-light text-[#6e7178]">
                      @uistellar
                    </h2>
                  </div>
                </div>
              </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaPage;
