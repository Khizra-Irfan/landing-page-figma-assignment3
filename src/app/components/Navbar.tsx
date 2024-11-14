import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[92px] py-4 px-8 lg:px-[150px] bg-[#043873] flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/assets/Landing_Page_V1/Logo.png"
          alt="Logo"
          width={150}
          height={50}
        />
        <span 
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: "33.89px",
            textAlign: "left",
            textDecoration: "underline",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#FFFFFF"
          }}
          className="ml-2"
        >
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center items-center">
        <ul className="font-medium text-[18px] leading-[23px] hidden lg:flex flex-row space-x-8 text-white">
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </div>

      {/* Login Button */}
      <div className="flex items-center">
        <button className="px-6 py-2 rounded-lg bg-[#FFE492]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
