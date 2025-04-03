/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Andrew Lizon",
  title: "Hi all, I'm Andrew!",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience in building Web applications with JavaScript / Python / Reactjs / Redux / Nodejs / Flask / and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Alizon121",
  linkedin: "https://www.linkedin.com/in/andrew-lizon-5b6ab8342",
  gmail: "andrew.lizon12@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER WHO WANTS TO CONTINUE LEARNING AND CHALLENGE HIMSELF",
  skills: [
    emoji(
      "⚡ Develop highly interactive frontend and backend for web applications"
    ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of packages and libraries to create robust and user-friendly applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      image: require("./assets/images/html5.png")
    },
    {
      skillName: "css3",
      image: require("./assets/images/css3.png")
    },
    {
      skillName: "JavaScript",
      image: require("./assets/images/js.png")
    },
    {
      skillName: "reactjs",
      image: require("./assets/images/reactjs.png")
    },
    {
      skillName: "Redux",
      image: require("./assets/images/redux.png")
    },
    {
      skillName: "nodejs",
      image: require("./assets/images/nodejs.png")
    },
    {
      skillName: "SQLite3",
      image: require("./assets/images/sqlite.png")
    },
    {
      skillName: "postgreSQL",
      image: require("./assets/images/postgreSQL.png")
    },
    {
      skillName: "npm",
      image: require("./assets/images/npm.png")
    },
    {
      skillName: "Git",
      image: require("./assets/images/git.png")
    },
    {
      skillName: "python",
      image: require("./assets/images/python.png")
    },
    {
      skillName: "Flask",
      image: require("./assets/images/flask.png")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "AppAcademy",
      logo: require("./assets/images/appacademylogo.png"),
      subHeader: "Certificate in Software Engineering",
      duration: "March 2024 - April 2025"
    },
    {
      schoolName: "Georgetown University",
      logo: require("./assets/images/georgetownunivseritylogo.webp"),
      subHeader: "Master of Science in Global Health",
      duration: "August 2019 - May 2021"
    },
    {
      schoolName: "Boston College",
      logo: require("./assets/images/bostoncollegelogo.png"),
      subHeader: "Bachelor of Arts in Italian Studies",
      duration: "August 2014 - May 2016"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Environmental Health Specialist I",
      company: "Southern Nevada Health District",
      companylogo: require("./assets/images/SNHD.jpeg"),
      date: "November 2021 - February 2024",
      descBullets: [
        "Conducted detailed regulatory assessments, demonstrating analytical thinking and attention to detail—key skills for debugging and quality assurance in software development.",
        "Collaborated within a dynamic team to problem-solve and communicate effectively, mirroring Agile development and cross-functional teamwork in software engineering.",
        "Acted as a Spanish translator, improving accessibility and communication—comparable to writing clear documentation and enhancing user experience."
              ]
    },
    {
      role: "Patient Access Associate",
      company: "INOVA Health System",
      companylogo: require("./assets/images/inova.webp"),
      date: "September 2018 – March 2020",
      descBullets: [
        "Interfaced with patients and families in high-pressure situations, strengthening problem-solving and customer-centric thinking, which are valuable in user-focused development.",
        "Managed patient data with EPIC systems, gaining experience in database entry and management, a foundation for working with SQL and data structures.",
        "Ensured accuracy in demographic and insurance data, honing precision and attention to detail—critical for writing efficient and error-free code."

      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS THAT I MADE",
  projects: [
    {
      image: require("./assets/images/destinationlocator.png"),
      projectName: "DestinationLocator",
      projectDesc:
        "A full-stack application that allows users to create listings for customers seeking accommodations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://destination-locator.onrender.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cashwithfriend.png"),
      projectName: "Cash with Friends",
      projectDesc:
        "A full-stack application that allows users to split expenses with friends.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cash-with-friends-app.onrender.com"
        }
      ]
    },
    {
      image: require("./assets/images/betaoverflow1.png"),
      projectName: "BetaOverflow",
      projectDesc:
        "A full-stack application that allows users to post questions and generate responses for all things rock climbing.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://beta-overflow.onrender.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-847-858-4850",
  email_address: "andrew.lizon12@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
