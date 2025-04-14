import { useState, useEffect, useRef } from "react";
import profilepicture1 from "./assets/Teams Pic.jpeg";
import profilepicture2 from "./assets/profilepic.jpeg";

const Home = () => {
  const sectionRef = useRef(null);
  const requestRef = useRef(null);

  // **Array of Images to Cycle Through**
  const images = [profilepicture2, profilepicture1];

  // **Component Dimensions**
  const COMPONENT_WIDTH = 700;
  const COMPONENT_HEIGHT = 320;

  // **State for Position, Velocity, and Image Index**
  const [position, setPosition] = useState({ top: 100, left: 100 });
  const [velocity, setVelocity] = useState({ x: 2, y: 2 });
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const sectionWidth = section.clientWidth;
    const sectionHeight = section.clientHeight;

    const moveElement = () => {
      setPosition((prev) => {
        let newX = prev.left + velocity.x;
        let newY = prev.top + velocity.y;

        let newVelocity = { ...velocity };
        let hitEdge = false;

        // **Change Image on Bounce**
        if (newX <= 70 || newX + COMPONENT_WIDTH >= sectionWidth - 70) {
          newVelocity.x = -newVelocity.x;
          newX = Math.max(
            70,
            Math.min(newX, sectionWidth - COMPONENT_WIDTH - 70)
          );
          hitEdge = true;
        }
        if (newY <= 70 || newY + COMPONENT_HEIGHT >= sectionHeight - 70) {
          newVelocity.y = -newVelocity.y;
          newY = Math.max(
            70,
            Math.min(newY, sectionHeight - COMPONENT_HEIGHT - 70)
          );
          hitEdge = true;
        }

        // **If hit edge, cycle to the next image**
        if (hitEdge) {
          setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }

        setVelocity(newVelocity);
        return { left: newX, top: newY };
      });

      requestRef.current = requestAnimationFrame(moveElement);
    };

    requestRef.current = requestAnimationFrame(moveElement);
    return () => cancelAnimationFrame(requestRef.current);
  }, [velocity, imageIndex]); // **Added `imageIndex` to trigger re-renders properly**

  return (
    <section
      ref={sectionRef}
      className="min-h-[90vh] pb-20 bg-black relative overflow-hidden"
    >
      {/* Bouncing container */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: `${COMPONENT_WIDTH}px`,
          height: `${COMPONENT_HEIGHT}px`,
        }}
      >
        {/* Name and Image Row */}
        <div className="flex items-center justify-center space-x-8 m-0 p-0 gap-0">
          {/* First Name */}
          <h2 className="text-6xl 2xl:text-8xl text-gray-400 font-bold font-heading whitespace-nowrap">
            Hassan
          </h2>
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <img
              className="w-80 h-80 md:w-100 md:h-100 rounded-full object-cover border-4 border-gray-500 box-border m-0 p-0"
              src={images[imageIndex]}
              alt="Profile"
            />
            {/* Moniker */}
            <div className="mt-4 text-lg font-bold text-gray-400 text-center whitespace-nowrap">
              Software Developer
            </div>
          </div>
          {/* Last Name */}
          <h2 className="text-6xl 2xl:text-8xl text-gray-400 font-bold font-heading whitespace-nowrap">
            Razak
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
