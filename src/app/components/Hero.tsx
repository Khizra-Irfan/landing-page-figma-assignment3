import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="text-white">
            {/* Hero Section */}
            <div className="w-full bg-[#043873] py-[140px] px-8 flex justify-center">
                <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center gap-8">
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className="font-bold text-4xl lg:text-5xl leading-tight mb-4">
                            Get More Done with Whitepace
                        </h2>
                        <p className="text-lg lg:text-xl leading-relaxed mb-6">
                            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
                        </p>
                        <button className="w-full lg:w-auto px-8 py-4 bg-[#4F9CF9] rounded-lg text-lg font-medium">
                            Try Whitepace Free
                        </button>
                    </div>

                    {/* Image/Graphic Placeholder */}
                    <div className="lg:w-1/2 h-[300px] lg:h-[400px] bg-[#C4DEFD]"></div>
                </div>
            </div>

          {/* Project Management Section */}
<div className="py-[140px] px-8 bg-white text-[#212529] flex justify-center">
    <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
            <h2 className="font-bold text-5xl leading-tight mb-4">
                Project Management
            </h2>
            <p className="text-lg leading-relaxed mb-6">
                Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <button className="px-6 py-3 text-white bg-[#4F9CF9] rounded-lg font-medium mt-0">
                Get Started
            </button>
        </div>

        <div className="lg:w-1/2 h-[300px] lg:h-[400px] bg-[#C4DEFD]"></div>
    </div>
</div>

{/* Work Together Section */}
<div className="py-[80px] px-8 bg-white text-[#212529] flex justify-center">
    <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center gap-8">
        {/* Image on the Left Side */}
        <div className="lg:w-1/2">
            <Image
                src="/assets/Landing_Page_V1/work_together_image.png"
                alt="Work Together"
                width={710}
                height={661}
                className="border-2 border-[#A7CEFC]"
            />
        </div>

        {/* Text Content on the Right Side */}
        <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Work together</h1>
            <p className="text-lg leading-relaxed mb-6">
                With Whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
            </p>
            <button className="px-6 py-3 bg-[#4F9CF9] text-white rounded-lg font-medium">
                Try it now
            </button>
        </div>
    </div>
</div>


            {/* Extension Section */}
            <div className="w-full bg-[#043873] py-[140px] px-8 flex justify-center">
                <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2">
                        <h1 className="text-6xl font-bold mb-2 text-white">Use as Extension</h1>
                        <p className="text-lg leading-relaxed mb-6 text-white mt-6">
                            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                        </p>
                        <button className="px-8 py-4 bg-[#4F9CF9] text-white rounded-lg font-medium mt-5">
                            Let's Go
                        </button>
                    </div>
                    <div className="lg:w-1/2 h-[300px] lg:h-[400px] bg-[#C4DEFD]"></div>
                </div>
            </div>

            {/* Customization Section */}
            <div className="py-[140px] px-8 bg-white text-[#212529] flex justify-center">
                <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2 h-[300px] lg:h-[400px] bg-[#C4DEFD]"></div>
                    <div className="lg:w-1/2">
                        <h1 className="text-5xl font-bold mb-4">Customize it to <br /> your needs</h1>
                        <p className="text-lg leading-relaxed mb-6 mt-6">
                            Customize the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                        </p>
                        <button className="px-6 py-3 bg-[#4F9CF9] text-white rounded-lg font-medium mt-5">
                            Let’s Go
                        </button>
                    </div>
                </div>
            </div>

           {/* Access Everywhere Section */}
<div className="w-full h-[574px] px-[220px] py-[140px] bg-[#043873] text-white flex justify-center items-center">
    <div className="w-[1481px] h-[294px] flex flex-col items-center justify-center gap-6">
        {/* Heading */}
        <h1 className="text-[72px] leading-[87.14px] text-center font-bold mb-3">
            Your work, everywhere you are
        </h1>
        
        {/* Paragraph */}
        <p className="text-lg mb-4 font-[400px] leading-[30px] tracking-[-2%] text-center">
        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and
        <br /> OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
        </p>
        
        {/* Button */}
        <button className="px-10 py-5 text-white bg-[#4F9CF9] rounded-lg font-medium">
            Try Taskey
        </button>
    </div>
</div>

{/* Sponsors Section */}
<div className="py-[140px] px-8 text-[#212529] bg-white flex justify-center">
    <div className="max-w-[1200px] w-full text-center flex flex-col items-center">
        {/* Heading */}
        <h1 className="w-[1482px] h-[87px] text-[72px] leading-[87.14px] font-bold mb-12 tracking-[-2%]">
            Our sponsors
        </h1>

        {/* Sponsors Image */}
        <Image
            src="/assets/Landing_Page_V1/sponsors.png"
            alt="Sponsors"
            width={1482}
            height={71}
            className="mx-auto border-2 border-[#A7CEFC] mt-10"  // Added margin-top here
        />
    </div>
</div>


{/* Content Section */}
<div className="w-[1920px] h-[461px] bg-[#043873] py-[140px] px-[220px]">
    <div className="w-[1480px] h-[289px] gap-100 flex items-center justify-between pr-[200px]">
        <Image
            src="/assets/Landing_Page_V1/Content.png"
            alt="Content"
            width={1480}
            height={169}
            className="mx-auto"
        />
    </div>
</div>


        </div>
    );
};

export default Hero;
