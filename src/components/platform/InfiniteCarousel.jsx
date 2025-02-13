import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";

// Sample logos (Replace with your own logos)
const logos = [
  "https://img.icons8.com/color/512/flutter.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1365px-Figma-logo.svg.png",
  "https://logos-world.net/wp-content/uploads/2020/02/Canva-Logo.png",
  "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
  // "https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj",
  "https://images.seeklogo.com/logo-png/48/2/eraser-logo-png_seeklogo-483568.png",
  "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp",
];

const InfiniteCarousel = () => {
  const { theme } = useSelector((state) => state.theme.mode);
  const controls = useAnimation();

  // Duplicate logos for seamless looping
  const extendedLogos = [
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
  ];

  return (
    <div className={`carousel bg-white py-10`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="carousel-track"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {extendedLogos.map((logo, index) => (
          <img key={index} src={logo} alt="logo" className="carousel-logo" />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
