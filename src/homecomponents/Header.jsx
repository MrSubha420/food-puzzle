import React from "react";

export function Header() {
  const bannerWrapperStyles = {
    overflow: "hidden",
    width: "100%",
    height: "40px",
    animation: "appear 5s ease-in-out",
  };

  const bannerAnimationStyles = {
    height: "40px",
    background: "linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5)",
    backgroundSize: "400% 400%", // Ensures smooth animation
    animation: "anime 16s ease infinite",
  };

  const buttonStyles = {
    color: "white",
    transition: "all 0.2s ease-in-out",
    letterSpacing: "0.05em",
    fontWeight: 500,
    outline: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    width: "100%",
    textDecoration: "none",
  };

  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    height: "60px",
  };

  const logoStyles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginRight: "20px",
  };

  const logoImageStyles = {
    height: "50px",
    width: "50px",
    objectFit: "contain",
    border: "2px solid red",
    borderRadius: "50%",
  };

  return (
    <>
      <header
        style={headerStyles}
        className="bg-gradient-to-r from-green-300 to-blue-500 text-white"
      >
        {/* Logo Section */}
        <div style={logoStyles}>
          <img src="/logo1.png" alt="Logo" style={logoImageStyles} />
        </div>

        {/* Banner Section */}
        <div style={bannerWrapperStyles}>
          <div style={bannerAnimationStyles}>
            <a
              href="https://codewithsubhadip.vercel.app"
              style={buttonStyles}
              className="text-xs sm:text-base"
            >
              Want a crazy good website? Let&apos;s Discuss!
            </a>
          </div>
        </div>
      </header>

      <style>{`
        @keyframes anime {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes appear {
          0% {
            height: 0px;
          }
          80% {
            height: 0px;
          }
          100% {
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
