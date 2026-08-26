import React from "react";

const SocialBar = () => {
  return (
    <>
      {/* Left Side Floating Social Icons */}
      <div className="fixed top-[35%] sm:top-[38%] left-3 sm:left-4 flex flex-col gap-4 sm:gap-5 z-50 items-center bg-white/70 dark:bg-gray-800/70 p-2 rounded-2xl shadow-md backdrop-blur-sm border border-gray-100 dark:border-gray-700">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/p/Dskinova-61577979712519/"
          target="_blank"
          rel="noreferrer nofollow"
          title="Facebook"
        >
          <img
            src="/Images/social-icons/facebook.png"
            alt="Facebook"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:scale-115 hover:shadow-md transition-all duration-200"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/_dskinova/"
          target="_blank"
          rel="noreferrer nofollow"
          title="Instagram"
        >
          <img
            src="/Images/social-icons/instagram.png"
            alt="Instagram"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:scale-115 hover:shadow-md transition-all duration-200"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dr-kirti-kothari-12b282377/?originalSubdomain=in"
          target="_blank"
          rel="noreferrer nofollow"
          title="LinkedIn"
        >
          <img
            src="/Images/social-icons/linkedin.png"
            alt="LinkedIn"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:scale-115 hover:shadow-md transition-all duration-200"
          />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@DSKINOVA"
          target="_blank"
          rel="noreferrer nofollow"
          title="YouTube"
        >
          <img
            src="/Images/social-icons/youtube.png"
            alt="YouTube"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:scale-115 hover:shadow-md transition-all duration-200"
          />
        </a>
      </div>

      {/* WhatsApp Floating Button (Bottom Left) */}
      <a
        href="https://wa.me/917878867379?text=Hello%20I%20want%20to%20book%20an%20appointment"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 flex items-center gap-2 bg-white border-2 border-green-500 text-green-600 px-4 py-2 rounded-full shadow-lg hover:bg-green-500 hover:text-white transition z-50"
      >
        <img
          src="/Images/social-icons/whatsapp.png"
          alt="WhatsApp"
          className="w-6 h-6"
        />
        <span className="font-medium">Chat with us</span>
      </a>
    </>
  );
};

export default SocialBar;
