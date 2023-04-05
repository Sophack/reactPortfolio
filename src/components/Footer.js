import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';


const styles = {

    footer: {
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: '#f4f4f2',
      padding: '20px',
      listStyle: "none",
      textDecoration: "none",
      display: "flex",
      justifyContent: "spaceAround",
    },
  };

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <a style={styles.footer}
          href="https://github.com/Sophack"
          target="blank"
          rel="noopener noreferrer"
        >
          <li  className="logo"><FaGithub />Github</li>
        </a>
        <a style={styles.footer}
          href="https://www.linkedin.com/in/saraf-nawar-060836170/"
          target="blank"
          rel="noopener noreferrer"
        >
          <li className="logo"><FaLinkedin />LinkedIn</li>
        </a>
        <a style={styles.footer}
          href="https://stackoverflow.com/users/15198797/swedishfish?tab=badges"
          target="blank"
          rel="noopener noreferrer"
        >
          <li className="logo"><FaStackOverflow />StackOverflow</li>
        </a>
        
      </footer>
    </div>
    
  );
  
}
