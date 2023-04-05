import zIndex from "@mui/material/styles/zIndex";
import React from "react";

const styles = {
  card: {
    borderRadius: "15px",
    zIndex: "1",
    webkitBoxShadow: "5px 5px 15px 5px #000000", 
    boxShadow: "5px 5px 15px 5px #000000",
  },
  heading: {
    minHeight: 50,
    lineHeight: 2.5,
    fontSize: "1.2rem",
    padding: "0 20px",
    
  },
  content: {
    padding: "5px",
    border: "none 5px",
    borderRadius: "15px",
    
    
  },
};

function About() {
  return (
    <div style={styles.card} id="about">
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        <ul>
          {" "}
          As a passionate developer I am always looking for ways to make things
          more efficient. I am an experienced Real Estate agent who loves to
          connect with people and network. I a driven & self-motivated individual & I bring my work ethic and
          friendliness with me to complete projects and meet deadlines. 

        </ul>
      </div>
    </div>
  );
}

export default About;
