import weatherImg from "../assets/projectImages/weather.png";
import infinityImg from "../assets/projectImages/infinity.png";

export const projects = [
  {
    name: "Infinity Airlines",
    description:
      "Full-stack application with JWT authentication and Authorization, with Stripe payment.",
    tools: ["mongo", "react", "node"],
    image: infinityImg,
    url: "https://assignmentserver-0wk9.onrender.com",
    code: "https://github.com/Nima6666/assignmentServer",
  },
  {
    name: "Weather",
    description:
      "Uses Geolocation API for current location, Fetches weather information from Weather API, Includes async loading screen.",
    tools: ["vanillaJS"],
    image: weatherImg,
    url: "https://nima6666.github.io/Weather",
    code: "https://github.com/nima6666/Weather",
  },
];
