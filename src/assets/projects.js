import metroImg from "../assets/projectImages/metroguesthouses.png";
import annapurna from "../assets/projectImages/annapurna.png";
import membersOnlyImg from "../assets/projectImages/membersOnly.png";
import blogImg from "../assets/projectImages/blog.png";
import colorectalImg from "../assets/projectImages/colorectalSurgeon.png";
import cvBuilderImg from "../assets/projectImages/cvBuilder.png";
import memoryImg from "../assets/projectImages/memory.png";
import todoImg from "../assets/projectImages/todo.png";
import weatherImg from "../assets/projectImages/weather.png";

export const projects = [
  {
    name: "Metro Guest House",
    description:
      "Application to securely record visitor data and documents, with admins managing user roles and staff handling data entry.",
    tools: ["mongo", "react", "node"],
    image: metroImg,
    url: "https://metroguesthouses.com",
  },
  {
    name: "Annapurna Medi Equip",
    description:
      "The site manages medical equipment categories and products, allowing admins to add, edit, delete, and oversee them.",
    tools: ["mongo", "react", "node"],
    image: annapurna,
    url: "https://annapurnamediequip.com",
  },
  {
    name: "Blog",
    description:
      "The blog is a full-stack application with JWT authentication, Passport.js Google OAuth, and Express-session for user authorization.",
    tools: ["mongo", "react", "node"],
    image: blogImg,
    url: "https://main--bloguserclient.netlify.app/",
    code: "https://github.com/Nima6666/Blog",
  },
  // {
  //   name: "Pediatric Surgeon Nepal",
  //   description:
  //     "PediatricSurgeon is a full-stack application with NodeMailer for email verification, and the message is recorded as verified upon successful verification.",
  //   tools: ["mongo", "react",  "node"],
  //   image: blogImg,
  //   url: "https://pediatricsurgeon.netlify.app"
  // },
  {
    name: "Colorectal Surgeon Nepal",
    description:
      "The Colorectal Surgeon Nepal site is a React application that integrates Calendly for booking appointments and was developed as part of a team.",
    tools: ["react"],
    image: colorectalImg,
    url: "https://colorectalsurgeonnepal.com",
  },
  {
    name: "MembersOnly",
    description:
      "Used Passport.js with Express-session for authentication; requires a key for membership; rendered views from Express app.",
    tools: ["mongo", "node"],
    image: membersOnlyImg,
    url: "https://membersonlyy.adaptable.app",
    code: "https://github.com/Nima6666/membersOnly",
  },
  // {
  //   name: "National Colorectal Surgeon",
  //   description: "React Application; Worked as a team.",
  //   tools: ["mongo", "react",  "node"],
  //   image: ,
  // },
  {
    name: "Weather",
    description:
      "Uses Geolocation API for current location, Fetches weather information from Weather API, Includes async loading screen.",
    tools: ["vanillaJS"],
    image: weatherImg,
    url: "https://github.com/nima6666/Weather",
    code: "https://nima6666.github.io/Weather",
  },
  {
    name: "Todos",
    description:
      "Vanilla JavaScript; Set, delete, mark tasks complete; Includes priority options.",
    tools: ["vanillaJS"],
    image: todoImg,
    url: "https://github.com/nima6666/todo-list",
    code: "https://nima6666.github.io/todo-list",
  },
  {
    name: "Memory Game",
    description:
      "Fetches images from Giphy API; Cool hover effects; Tracks current and high scores.",
    tools: ["react"],
    image: memoryImg,
    url: "https://nima6666.github.io/Memory",
    code: "https://github.com/nima6666/memory",
  },
  {
    name: "CV Builder",
    description:
      "Fetches images from Giphy API; Cool hover effects; Tracks current and high scores.",
    tools: ["react"],
    image: cvBuilderImg,
    url: "https://nima6666.github.io/CV-app-React/",
    code: "https://github.com/Nima6666/CV-app-React",
  },
];
