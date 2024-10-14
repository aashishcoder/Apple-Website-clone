import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo, smallHeroImg, largeHeroImg } from "../utils"; 
import { useEffect, useState } from "react";


const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const [heroImageSrc, setHeroImageSrc] = useState(
    window.innerWidth < 760 ? smallHeroImg : smallHeroImg
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
      setHeroImageSrc(smallHeroImg);
    } else {
      setVideoSrc(heroVideo);
      setHeroImageSrc(smallHeroImg);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#banner", { opacity: 1, y: 0, delay: 5.0 });
    gsap.to("#hero", { opacity: 1, delay: 5.0 });
    gsap.to("#heroimg", { opacity: 1, delay: 4.0, y: 0 });
    gsap.to("#cta", { opacity: 1, y: 190, delay: 4.0});
    
  }, []);

  return (
    <section className="relative w-full nav-height bg-black">
      <div className="absolute inset-0 z-0">
        <video
          className="hero-video w-full h-full object-cover"
          autoPlay
          muted
          playsInline={true}
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 flex flex-col items-center h-full">
        <div id="banner" className="ribbon opacity-0 translate-y-20 z-10">
          <div className="ribbon-content-wrapper">
            <div className="ribbon-content row">
              <div className="column large-centered">
                <p>
                  Get iPhone 16 Pro from just ₹9575.00/mo. for 12 mo. with instant
                  cashback
                  <span>
                    <a href="" aria-label="Footnote ◊ symbol" data-modal-close="">
                      ◊
                    </a>
                  </span>{" "}
                  and No Cost EMI.
                  <span>
                    <a href="" aria-label="Footnote ‡ symbol" data-modal-close="">
                      ‡
                    </a>
                  </span>
                  &nbsp;
                  <a
                    href="https://apple.in"
                    data-analytics-title="buy | iphone 16 pro"
                    aria-label="Buy iPhone 16 Pro"
                  >
                    Shop&nbsp;iPhone
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p id="hero" className="hero-title opacity-0 translate-y-20 z-10">
          iPhone 16 Pro
        </p>
        <div id="heroimg" className="hero-image-container">
         <img
         className="hero-image"
          src={heroImageSrc} // Use the state variable for the image source
          alt="Hero Image"
          
         />

        </div>
        <div
          id="cta"
          className="butn flex flex-col items-center opacity-0 translate-y-200 z-10"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { heroVideo, smallHeroVideo, smallHeroImg, largeHeroImg } from "../utils"; // Import both images
// import { useEffect, useState } from "react";

// const Hero = () => {
//   const [videoSrc, setVideoSrc] = useState(
//     window.innerWidth < 760 ? smallHeroVideo : heroVideo
//   );

//   const [heroImageSrc, setHeroImageSrc] = useState(
//     window.innerWidth < 760 ? smallHeroImg : largeHeroImg
//   );

//   const handleVideoSrcSet = () => {
//     const isSmallScreen = window.innerWidth < 760;
//     setVideoSrc(isSmallScreen ? smallHeroVideo : heroVideo);
//     setHeroImageSrc(isSmallScreen ? smallHeroImg : largeHeroImg);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleVideoSrcSet);

//     return () => {
//       window.removeEventListener("resize", handleVideoSrcSet);
//     };
//   }, []);

//   useGSAP(() => {
//     gsap.to("#hero", { opacity: 1, delay: 2 });
//     gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
//     gsap.to("#banner", { opacity: 1, y: 0, delay: 5.0 });
//   }, []);

//   return (
//     <section className="relative w-full nav-height bg-black">
//       <div className="hero-video-container">
//         <video
//           className="hero-video"
//           autoPlay
//           muted
//           playsInline={true}
//           key={videoSrc}
//         >
//           <source src={videoSrc} type="video/mp4" />
//         </video>
//       </div>
//       <div className="relative z-10 flex flex-col items-center justify-center h-full">
//         <div id="banner" className="ribbon opacity-0 translate-y-20 z-10">
//           <div className="ribbon-content-wrapper">
//             <div className="ribbon-content row">
//               <div className="column large-centered">
//                 <p>
//                   Get iPhone 16 Pro from just ₹9575.00/mo. for 12 mo. with instant
//                   cashback
//                   <span>
//                     <a href="" aria-label="Footnote ◊ symbol" data-modal-close="">
//                       ◊
//                     </a>
//                   </span>{" "}
//                   and No Cost EMI.
//                   <span>
//                     <a href="" aria-label="Footnote ‡ symbol" data-modal-close="">
//                       ‡
//                     </a>
//                   </span>
//                   &nbsp;
//                   <a
//                     href="https://apple.in"
//                     data-analytics-title="buy | iphone 16 pro"
//                     aria-label="Buy iPhone 16 Pro"
//                   >
//                     Shop&nbsp;iPhone
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <p id="hero" className="hero-title opacity-0 translate-y-20 z-10">
//           iPhone 15 Pro
//         </p>
        
//         <div
//           id="cta"
//           className="flex flex-col items-center opacity-0 translate-y-20 z-10"
//         >
//           <a href="#highlights" className="btn">
//             Buy
//           </a>
//           <p className="font-normal text-xl">From $199/month or $999</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;