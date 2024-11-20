import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "@mui/material";

function Contact() {
  return (
    <div id = 'Contact' className="min-w-full h-[60%] bg-background p-8 flex flex-col items-center gap-6 text-cyan">
      <h1 className="text-5xl font-bold hover:text-white transition">Let's Work Together!</h1>
      <p className="text-white text-center">
        Feel free to contact me for collaborations, opportunities, or just to say hi!
      </p>

      {/* Socials */}
      <div className="flex gap-6 text-4xl">
        <a
          href="https://github.com/emmanuelgv408"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <GitHubIcon className="hover:cursor-pointer hover:text-white transition-transform transform hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuelgv408/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <LinkedInIcon className="hover:cursor-pointer hover:text-white transition-transform transform hover:scale-110" />
        </a>
      </div>

      {/* Contact Details */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="flex items-center gap-2">
          <EmailIcon />
          <a
            href="mailto:emmanuelgv@live.com"
            className="text-white hover:text-cyan transition"
          >
            emmanuelgv@live.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <a
            href="tel:+14087848733"
            className="text-white hover:text-cyan transition"
          >
             (408) 784-8733
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
