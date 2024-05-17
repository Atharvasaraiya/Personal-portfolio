import React from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <div style={styles.typewriterContainer}>
      <Typewriter
        options={{
          strings: [
            "React Developer",
            "MERN Stack Developer",
            "Graphic Designer",
            "UX/UI Designer",
            "Visual storyteller",
            "Artist",
            
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
          typingSpeed: 100,
        }}
      />
    </div>
  );
};

const styles = {
  typewriterContainer: {
    fontSize: "30px", // Adjust the font size
    color: "#333", // Change text color
    fontWeight: "bold", // Make the text bold
    fontFamily: "Arial, sans-serif", // Change font family
    // textAlign: "center", // Center align the text
    margin: "20px 0", // Add margin for spacing
    marginRight: "80px"
  }
};
