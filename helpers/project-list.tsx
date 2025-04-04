import img from "/imgs/test-proj.png";
import indilator from "/imgs/proj_indilator.png";
import vbbot from "/imgs/proj_vbbot.png";
import weatherapp from "/imgs/proj_weatherapp.png";
import bookstore from "/imgs/proj_bookstore.png";

const projects = {
  proj_1: {
    name: "Indilator",
    tools: "NextJS, MongoDB",
    desc: "A web app that translates words between English, Ojibway, and Mohawk that aims to preserve the language of Indigenous communities.",
    img: indilator.src,
    link: "https://github.com/joeelmahallawy/rec-repo",
  },
  proj_2: {
    name: "Volleyball Drop-In Bot",
    tools: "discord.py, Firebase",
    desc: "A Discord bot that automates volleyball drop-in court selections, bookings, and event reminders.",
    img: vbbot.src,
    link: "https://github.com/RossEnriquez/volleyball-runs-discord-bot",
  },
  proj_3: {
    name: "Weather App",
    tools: "NextJS",
    desc: "A web app that fetches the weather forecast for the next six days using the user’s location and displays it on a modern UI.",
    img: weatherapp.src,
    link: "https://github.com/RossEnriquez/weather-app",
  },
  proj_4: {
    name: "General Processing Unit",
    tools: "VHDL",
    desc: "A functional General Processing Unit (GPU) implemented using latches, 4x16 decoders, FSMs, and an ALU to output 15 user-defined functions.",
    img: img.src,
    link: "#",
  },
  proj_5: {
    name: "Bookstore Application",
    tools: "JavaFX",
    desc: "An application that stores and manages bookstore inventory, including books and registered users. Supports functionality for admins and customers.",
    img: bookstore.src,
    link: "https://github.com/ahmadtkhan/BookStore-Application",
  },
};

export default projects;
