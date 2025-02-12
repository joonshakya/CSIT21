import { useDevCppDownloadDialogStore } from "../src/store";

export const compilerAssignments = [
  { number: 1, name: "Tokenizing the Source Code" },
  {
    number: 2,
    name: "Removing whitespaces and comments",
  },
  {
    number: 3,
    name: "Detection of Lexical Errors",
  },
  {
    number: 4,
    name: "Implementation of DFA",
  },
  {
    number: 5,
    name: "Find FIRST and FOLLOW of the given grammar",
  },
  {
    number: 6,
    name: "Construction of LL(1) Parser",
  },
  {
    number: 7,
    name: "Design LALR Bottom Up Parser",
    selected: true,
  },
];

export const nccAssignments = [
  { number: 1, name: "C# Basics - Part 1" },
  { number: 2, name: "C# Basics - Part 2" },
  { number: 3, name: "ASP.NET Core MVC Basics" },
  {
    number: 4,
    name: "ASP.NET Core MVC CRUD Operations",
  },
  {
    number: 5,
    name: "ASP.NET Core MVC Dependency Injection",
  },
  {
    number: 6,
    name: "ASP.NET Core Repository: ADO.NET & EF Core",
    selected: true,
  },
];

export const webTechAssignments = [
  {
    number: 1,
    name: "To familiarize with creating basic HTML pages with heading, paragraph, lists, forms, tables, links and canvas",
  },
  {
    number: 2,
    name: "Working with CSS",
  },
  {
    number: 3,
    name: "Working with CSS positioning and media queries",
  },
  {
    number: 4,
    name: "Working with JS",
  },
  {
    number: 5,
    name: "Working with JS Lab 2",
  },
  {
    number: 6,
    name: "Working with PHP Lab 1",
  },
  {
    number: 7,
    name: "Working with PHP Forms",
  },
  {
    number: 8,
    name: "Working with database",
  },
  {
    number: 9,
    name: "Working with AJAX",
  },
  {
    number: 10,
    name: "Working with XML",
    selected: true,
  },
];

export const simulationAssignments = [
  {
    number: 1,
    name: "To determine the value of PI using Monte Carlo simulation",
  },
  {
    number: 2,
    name: "To determine the area under the curve y = x^2 over the interval (1 to 4)",
  },
  {
    number: 3,
    name: "To determine the area under the curve x = y^2 over the interval (1 to 4)",
  },
  {
    number: 4,
    name: "To Model an M / M / 1 Queuing system where λ = 5 and μ = 6 and using simulation",
  },
  {
    number: 5,
    name: "To predict the weather of a particular day i.e.: after 2 days, after 3 days up to 20 days",
  },
  {
    number: 6,
    name: "To implement game of dice that generate discrete random variables using rand function using C/C++ Program.",
  },
  {
    number: 7,
    name: "To implement Linear Congruential Method for Generating Pseudo Random Number using C/C++ Program.",
  },
  {
    number: 8,
    name: "To implement Random Walk Model with and without drift value",
  },
  {
    number: 9,
    name: "Manufacturing Shop Model - 1",
  },
  {
    number: 10,
    name: "Manufacturing Shop Model - 2",
  },
  {
    number: 11,
    name: "Manufacturing Shop Model - 3",
  },
  {
    number: 12,
    name: "Manufacturing Shop Model - 4",
  },
  {
    number: 13,
    name: "Manufacturing Shop Model - 5",
    selected: true,
  },
];

export const materials = {
  sem6: {
    books: [],
    materials: [
      {
        name: (
          <>
            Pratik
            <br />
            Jung Karki
          </>
        ),
        link: "https://drive.google.com/drive/folders/1en35lArehz1xUA7l7ZHsjpoZZik13plI?usp=drive_link",
        bgColor: "#6c55cb",
        bgImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 100%)",
      },
      {
        name: (
          <>
            Ankit
            <br />
            Pangeni
          </>
        ),
        link: "https://drive.google.com/drive/folders/10t3wS_w5dBya9rKsObj6yVtwx-91OAGU",
        bgColor: "#548982",
        bgImage: "linear-gradient(90deg, #585c5b 0%, #44b8ab 100%)",
      },
    ],
  },
  sem5: {
    books: [
      {
        name: (
          <>
            SAD
            <br />
          </>
        ),
        link: "https://drive.google.com/file/d/19HPF413qJgLRbceB4jQjRVzOKF7Zr5vR/view?usp=sharing",
        bgColor: "#283e54",
        bgImage: "linear-gradient(340deg, #283e54 50%, #ba0707 100%)",
      },
      {
        name: (
          <>
            Crypto
            <br />
            Slides
          </>
        ),
        link: "https://drive.google.com/drive/folders/1eC2-wpUg6jYy2Zv3dHHV-Ult3yZTUTl0?usp=drive_link",
        bgColor: "#55a3bf",
        bgImage: "linear-gradient(62deg, #5682c4 0%, #52d0b8 100%)",
      },
    ],
    materials: [
      {
        name: (
          <>
            Pratik
            <br />
            Jung Karki
          </>
        ),
        link: "https://drive.google.com/drive/folders/1QzVrD2qWDzemVEUD4tQwIPNHhOQLwixq?usp=sharing",
        bgColor: "#6c55cb",
        bgImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 100%)",
      },
      {
        name: (
          <>
            Ankit
            <br />
            Pangeni
          </>
        ),
        link: "https://drive.google.com/drive/folders/1fhkU4pVANv9uVzlYKwWn5PCBjR3LXl3_",
        bgColor: "#548982",
        bgImage: "linear-gradient(90deg, #585c5b 0%, #44b8ab 100%)",
      },
      {
        name: (
          <>
            SXC
            <br />
            Old Qs
          </>
        ),
        link: "https://drive.google.com/drive/folders/1FXWDXF_X0oDFMs6lj2JMgAuFl0l0LcPY?usp=drive_link",
        bgColor: "#FBAB7E",
        bgImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      },
    ],
  },
  sem4: {
    books: [],
    materials: [
      {
        name: (
          <>
            Pratik
            <br />
            Jung Karki
          </>
        ),
        link: "https://drive.google.com/drive/folders/1pq5gvZTAE8ouByQzw5nso0cqTfLf9Jfe?usp=sharing",
        bgColor: "#6c55cb",
        bgImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 100%)",
      },
      {
        name: (
          <>
            OS
            <br />
            Slides
          </>
        ),
        link: "https://drive.google.com/drive/folders/1O4zMlPNaO_zlCQ4loBewK1Wy-XsMaaPL?usp=drive_link",
        bgColor: "#55a3bf",
        bgImage: "linear-gradient(62deg, #5682c4 0%, #52d0b8 100%)",
      },
      {
        name: (
          <>
            SXC
            <br />
            Old Qs
          </>
        ),
        link: "https://drive.google.com/drive/folders/1Tmf4_yMqhvpljxTzrkolZBAuH_mIP0kT?usp=drive_link",
        bgColor: "#FBAB7E",
        bgImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      },
    ],
  },
  sem3: {
    books: [
      {
        name: "Stats II",
        link: "https://drive.google.com/drive/folders/1JyJGIM2VcD5K02uOV9DllQsC4kli9pwX?usp=sharing",
        bgColor: "#657d8a",
        bgImage: "linear-gradient(12deg, #294c5f 0%, #a2afb6 100%)",
      },
      {
        name: "CA",
        link: "https://drive.google.com/file/d/1mBi5REwgrzAbuSr-eNyQZXlTRtU0dcfJ/view?usp=sharing",
        bgColor: "#60809d",
        bgImage: "linear-gradient(12deg, #929ea4 0%, #155592 100%)",
      },
      {
        name: "NM",
        link: "https://drive.google.com/drive/folders/1j22zeweR3IFWVELvtRnMUgaKc0YGnGG2?usp=sharing",
        bgColor: "#283e54",
        bgImage: "linear-gradient(340deg, #283e54 50%, #ba0707 100%)",
      },
    ],
    materials: [
      // {
      //   name: (
      //     <>
      //       Stats II
      //       <br />
      //       Tables (Mid term)
      //     </>
      //   ),
      //   link: "/files/Stats II ko mid term samma chahine table haru.pdf",
      //   bgColor: "#FBAB7E",
      //   bgImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      // },
      {
        name: (
          <>
            Stats II
            <br />
            Ex. Copy
          </>
        ),
        link: "https://drive.google.com/drive/folders/1w-EiumutdnmJzPkLPdpsDcpnnuaxps5Y?usp=sharing",
        bgColor: "#c39883",
        bgImage:
          "linear-gradient(123deg, #eecc61 0%, #a86855 20%, #c9a38e 80%, #f4be38 100%)",
      },
      {
        name: (
          <>
            Pratik
            <br />
            Jung Karki
          </>
        ),
        link: "https://drive.google.com/drive/folders/1r6Ngh55bGcxEDZmisllGzMKfO5_9agU0?usp=sharing",
        bgColor: "#6c55cb",
        bgImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 100%)",
      },
      {
        name: (
          <>
            SXC
            <br />
            Old Qs
          </>
        ),
        link: "https://drive.google.com/drive/folders/1231LJG10XQ-xhLDFpbM2nh7ZA9T8Uvmx?usp=sharing",
        bgColor: "#FBAB7E",
        bgImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      },
    ],
  },
  sem2: {
    books: [
      {
        name: "Maths II",
        link: "https://drive.google.com/file/d/1rKmnbHftNWflZOgtMewyohmkVGipWVHZ/view?usp=sharing",
        bgColor: "#6bc6cd",
        bgImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      },
      {
        name: "Stats I",
        link: "https://drive.google.com/drive/folders/1Ym1v7Aj3tX1rAL1CncO_-gxjTXjAfeML?usp=sharing",
        bgColor: "#2d8968",
        bgImage: "linear-gradient(42deg, #187a67 0%, #6ab26a 100%)",
      },
      {
        name: "DS CSIT",
        link: "https://drive.google.com/drive/folders/1Zn4Bmxb8F9QT-GMHVOqKK9Y94vJGC7yc?usp=sharing",
        bgColor: "#319ee3",
        bgImage: "linear-gradient(175deg, #afdbff 0%, #2297df 100%)",
      },
      {
        name: "MP CSIT",
        link: "https://drive.google.com/file/d/1qSlG7t9-eghH7t4fphStuyT90TmNfJjW/view?usp=sharing",
        bgColor: "#6eb944",
        bgImage: "linear-gradient(175deg, #92de85 0%, #6bb843 100%)",
      },
      {
        name: "DS Rosen",
        link: "https://drive.google.com/file/d/1cq2ZgbxcC63OtVTkBqYVVdP53HR1Clhz/view?usp=sharing",
        bgColor: "#9b97a1",
        bgImage: "linear-gradient(200deg, #383c84 0%, #a49fa4 100%)",
      },
      {
        name: "OOP Lafore",
        link: "https://drive.google.com/file/d/1HogQlyLeo2QRNaFGe-ng36Wdx4l9ni2X/view?usp=sharing",
        bgColor: "#714294",
        bgImage: "linear-gradient(43deg, #773BB8 0%, #655147 100%)",
      },
    ],
    materials: [
      {
        name: (
          <>
            Stats I
            <br />
            Ex. Copy
          </>
        ),
        link: "https://drive.google.com/drive/folders/1dlQeeP7dhB_upNMiiKEmXOL4nlPEMSGs?usp=sharing",
        bgColor: "#c39883",
        bgImage:
          "linear-gradient(123deg, #eecc61 0%, #a86855 20%, #c9a38e 80%, #f4be38 100%)",
      },
      {
        name: (
          <>
            Pratik
            <br />
            Jung Karki
          </>
        ),
        link: "https://drive.google.com/drive/folders/1eypTAyhDoSx5CEZXsYnQtcaD_mur2udM?usp=sharing",
        bgColor: "#6c55cb",
        bgImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 100%)",
      },
      {
        name: (
          <>
            SXC
            <br />
            Old Qs
          </>
        ),
        link: "https://drive.google.com/drive/folders/18sO0qaZbYCoo-Thae8TKDl3gL5OmDEtb?usp=sharing",
        bgColor: "#FBAB7E",
        bgImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      },
      {
        name: "DS PPT",
        link: "https://drive.google.com/drive/folders/1hx7dQ0lO7Y-93sSc2L5tqDJerwPM0oP1?usp=sharing",
        bgColor: "#55a3bf",
        bgImage: "linear-gradient(62deg, #5682c4 0%, #52d0b8 100%)",
      },
      {
        name: (
          <>
            Stats
            <br />
            Videos
          </>
        ),
        link: "https://www.youtube.com/watch?v=7yGljDNiofM&list=PLHiNd6FzL90J2t7KCFLG8EjuuInE8uI5N&index=1",
        bgColor: "#e03b33",
        bgImage: "linear-gradient(62deg, #ec4b4b 0%, #c91e07 100%)",
      },
      {
        name: (
          <>
            Stats
            <br />
            Lab
          </>
        ),
        link: "./files/JoonStatsLabV1.3.zip",
        bgColor: "#348f5d",
        bgImage: "linear-gradient(62deg, #217346 0%, #57c287 100%)",
      },
    ],
  },
  sem1: {
    books: [],
    materials: [],
  },
};

export const downloads = [
  {
    name: (
      <>
        SWI
        <br />
        Prolog
      </>
    ),
    link: "https://github.com/joonshakyawebsites/upload-some-files-to-download/releases/download/add-swi-prolog/SWI-Prolog-Setup.exe",
    bgColor: "#df7c1f",
    bgImage: "linear-gradient(320deg, #a11116 0%, #f8a623 100%)",
  },
  {
    name: "SPSS",
    link: "https://youtu.be/h6mysceNFqg",
    bgColor: "#72a0ce",
    bgImage: "linear-gradient(120deg, #bcd8f0 0%, #4b83bc 100%)",
  },
  {
    name: (
      <>
        VHDL
        <br />
        Sonata
      </>
    ),
    link: "https://github.com/joonshakyawebsites/upload-some-files-to-download/releases/download/main-release/SonataSetup.exe",
    bgColor: "#00ba45",
    bgImage: "linear-gradient(160deg, #0000ff 0%, #00ff00 100%)",
  },
  {
    name: (
      <>
        DevC++
        <br />
        graphics.h
        <br />
        OpenGL
      </>
    ),
    onClick: () => {
      useDevCppDownloadDialogStore.getState().setOpen(true);
    },
    bgColor: "#2938a4",
    bgImage: "linear-gradient(180deg, #3c3d7b 0%, #032ef5 100%)",
  },
];

export const subjects = {
  sem6: {
    NCC: {
      name: "NET Centric Computing",
      shortName: "NCC",
      microSyllabus:
        "https://drive.google.com/file/d/1hkT51S15N1jq7Y1T-Qm6U8AJX5m-HyLg/view?usp=drive_link",
    },
    SE: {
      name: "Software Engineering",
      shortName: "SE",
      microSyllabus:
        "https://drive.google.com/file/d/19rOlgTtKckOcqA-PMvsOz9kzbQhv2KEH/view?usp=drive_link",
    },
    EGov: {
      name: "E-Governance",
      shortName: "E-Gov",
      microSyllabus:
        "https://drive.google.com/file/d/19udV5_kjZvovp3yK8HEvUnSWqgVkS2WG/view?usp=drive_link",
    },
    ECom: {
      name: "E-Commerce",
      shortName: "E-Com",
      microSyllabus:
        "https://drive.google.com/file/d/1Jiy5HylCSMqciWYpSebIdenlr7GGoWFB/view?usp=drive_link",
    },
    Compiler: {
      name: "Compiler Design and Construction",
      shortName: "Compiler",
      microSyllabus:
        "https://drive.google.com/file/d/1QTtI65r_T5c7p67mw5hILZ0Ewk4lJnDX/view?usp=drive_link",
    },
    TW: {
      name: "Technical Writing",
      shortName: "TW",
      microSyllabus:
        "https://drive.google.com/file/d/1dDRvBZMqLCxBFjCBt1v-itOPlvGCUGb3/view?usp=drive_link",
    },
  },
  sem5: {
    "Web Tech": {
      name: "Web Technology",
      shortName: "Web Tech",
      microSyllabus:
        "https://drive.google.com/file/d/1gXp-bh087842e57ROCkZQoSkU5z8qG0V/view?usp=drive_link",
    },
    DAA: {
      name: "Design and Analysis of Algorithms",
      shortName: "DAA",
      microSyllabus:
        "https://drive.google.com/file/d/1xZ_1S_Nny3dzctfEdV8MaR8R6IkcoR8B/view?usp=drive_link",
    },
    Simulation: {
      name: "Simulation and Modeling",
      shortName: "Simulation",
      microSyllabus:
        "https://drive.google.com/file/d/1HQG_q-iR-o-Bj_564pZcwfQzsGjLJ9Mx/view?usp=drive_link",
    },
    Crypto: {
      name: "Cryptography",
      shortName: "Crypto",
      microSyllabus:
        "https://drive.google.com/file/d/1FxND026KaYM_y_TW_j5AkPPsB21Oan8L/view?usp=drive_link",
    },
    MM: {
      name: "Multimedia",
      shortName: "MM",
      microSyllabus:
        "https://drive.google.com/file/d/1IoJc_P_gG4Gle648UhYoJM7BeNC0-Lh1/view?usp=drive_link",
    },
    IP: {
      name: "Image Processing",
      shortName: "IP",
      microSyllabus:
        "https://drive.google.com/file/d/1XE-OuQi1pIBOltTSVY3r_36o1-NzBG6V/view?usp=drive_link",
    },
    SAD: {
      name: "System Analysis and Design",
      shortName: "SAD",
      microSyllabus:
        "https://drive.google.com/file/d/1OVNyU_TCpP7tQNfZ_tB2jon-jAsFfg3D/view?usp=drive_link",
    },
  },
  sem4: {
    TOC: {
      name: "Theory of Computation",
      shortName: "TOC",
      microSyllabus:
        "https://drive.google.com/file/d/1WjQKlZjNYopJBgxNQxgToDtU593BmD_Y/view?usp=drive_link",
    },
    CN: {
      name: "Computer Networking",
      shortName: "CN",
      microSyllabus:
        "https://drive.google.com/file/d/111cf1R_1bVxr26TVohRiUjeKc6QIUigk/view?usp=drive_link",
    },
    OS: {
      name: "Operating System",
      shortName: "OS",
      microSyllabus:
        "https://drive.google.com/file/d/1ltJ9G11kKj-v66r5OFDK8NeSX_l0Et61/view?usp=drive_link",
    },
    DBMS: {
      name: "Database Management System",
      shortName: "DBMS",
      microSyllabus:
        "https://drive.google.com/file/d/1YZmgUD9OCgEoYcysyweiVzyvKYAjeSac/view?usp=drive_link",
    },
    AI: {
      name: "Artificial Intelligence",
      shortName: "AI",
      microSyllabus:
        "https://drive.google.com/file/d/1G2ZukFy_gvjwrB-Sh6AU1gA3w_qRpFdE/view?usp=drive_link",
    },
  },
  sem3: {
    NM: {
      name: "Numerical Method",
      shortName: "NM",
      microSyllabus:
        "https://drive.google.com/file/d/1sw9W10lpKWyNVCJIl_KezsoxdZh3GR0X/view?usp=sharing",
    },
    DSA: {
      name: "Data Structures and Algorithms",
      shortName: "DSA",
      microSyllabus:
        "https://drive.google.com/file/d/1xPyWp6Jdt6CvqECp-fv5cHVYE0O68tGZ/view?usp=sharing",
    },
    CA: {
      name: "Computer Architecture",
      shortName: "CA",
      microSyllabus:
        "https://drive.google.com/file/d/1f-4nxi7B8sHv6a6FUI0gsXAe_3cHjfU1/view?usp=sharing",
    },
    CG: {
      name: "Computer Graphics",
      shortName: "CG",
      microSyllabus:
        "https://drive.google.com/file/d/1E6rp8U-ILcdZrVyY8CXUJBns1M7bHDQN/view?usp=sharing",
    },
    Stats2: {
      name: "Statistics II",
      shortName: "Stats II",
      microSyllabus:
        "https://drive.google.com/file/d/1D_6qw3_9KtpkeZtWQmRTI8ABGmVrkCdg/view?usp=sharing",
    },
  },
  sem2: {
    Maths2: {
      name: "Mathematics II",
      shortName: "Maths II",
    },
    OOP: {
      name: "Object Oriented Programming",
      shortName: "OOP",
    },
    DS: {
      name: "Discrete Structure",
      shortName: "DS",
    },
    MP: {
      name: "Microprocessor",
      shortName: "MP",
    },
    Stats1: {
      name: "Statistics I",
      shortName: "Stats I",
    },
  },
  sem1: {
    Maths1: {
      name: "Mathematics I",
      shortName: "Maths I",
    },
    Physics: {
      name: "Physics",
      shortName: "Physics",
    },
    DL: {
      name: "Digital Logic",
      shortName: "DL",
    },
    C: {
      name: "C Programming",
      shortName: "C",
    },
    IIT: {
      name: "Introduction to Information Technology",
      shortName: "IIT",
    },
  },
};

export const classRoutine = {
  sem6: [
    {
      day: "Sun",
      a: [
        [subjects.sem6.NCC, "Lab B"],
        [subjects.sem6.EGov, "315"],
        [subjects.sem6.SE, "315"],
        ["*", ""],
      ],
      b: [
        [subjects.sem6.ECom, "321"],
        [subjects.sem6.NCC, "Lab C"],
        [subjects.sem6.Compiler, "Lab B"],
        ["*", ""],
      ],
    },
    {
      day: "Mon",
      a: [
        [subjects.sem6.NCC, "315"],
        [subjects.sem6.SE, "Lab F"],
        [subjects.sem6.Compiler, "Lab C"],
        ["*", ""],
      ],
      b: [
        [subjects.sem6.ECom, "321"],
        [subjects.sem6.NCC, "321"],
        [subjects.sem6.EGov, "321"],
        ["*", ""],
      ],
    },
    {
      day: "Tue",
      a: [
        [subjects.sem6.NCC, "315"],
        [subjects.sem6.SE, "315"],
        [subjects.sem6.EGov, "Lab D"],
        [subjects.sem6.Compiler, "Lab C"],
      ],
      b: [
        [subjects.sem6.ECom, "Lab C"],
        [subjects.sem6.NCC, "321"],
        [subjects.sem6.Compiler, "Lab C"],
        [subjects.sem6.EGov, "321"],
      ],
    },
    {
      day: "Wed",
      a: [
        [subjects.sem6.ECom, "315"],
        [subjects.sem6.TW, "315"],
        [subjects.sem6.Compiler, "Lab D"],
        ["*", ""],
      ],
      b: [
        [subjects.sem6.TW, "321"],
        [subjects.sem6.SE, "321"],
        [subjects.sem6.EGov, "Lab C"],
        ["*", ""],
      ],
    },
    {
      day: "Thu",
      a: [
        [subjects.sem6.EGov, "315"],
        [subjects.sem6.TW, "315"],
        [subjects.sem6.ECom, "Lab F"],
        ["*", ""],
      ],
      b: [
        [subjects.sem6.TW, "321"],
        [subjects.sem6.SE, "Lab F"],
        [subjects.sem6.Compiler, "Lab C"],
        ["*", ""],
      ],
    },
    {
      day: "Fri",
      a: [
        [subjects.sem6.ECom, "315"],
        [subjects.sem6.TW, "315"],
        ["*", ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem6.TW, "321"],
        [subjects.sem6.SE, "321"],
        ["*", ""],
        ["*", ""],
      ],
    },
  ],
  sem5: [
    {
      day: "Sun",
      a: [
        [subjects.sem5.Crypto, "16"],
        [subjects.sem5.DAA, "Lab D"],
        [subjects.sem5.SAD, "Lab A"],
        [subjects.sem5.Simulation, "16"],
      ],
      b: [
        [subjects.sem5.Simulation, "Lab D"],
        [subjects.sem5.Crypto, "18"],
        [subjects.sem5.SAD, "Lab A"],
        [subjects.sem5.DAA, "Lab A"],
      ],
    },
    {
      day: "Mon",
      a: [
        [subjects.sem5.Crypto, "Lab G"],
        [subjects.sem5.DAA, "16"],
        ["*", ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem5.Simulation, "18"],
        [subjects.sem5.Crypto, "Lab G"],
        [subjects.sem5.DAA, "18"],
        ["*", ""],
      ],
    },
    {
      day: "Tue",
      a: [
        [subjects.sem5.Crypto, "16"],
        [subjects.sem5.DAA, "16"],
        [subjects.sem5.SAD, "Lab A"],
        ["*", ""],
      ],
      b: [
        [subjects.sem5.Simulation, "18"],
        [subjects.sem5.Crypto, "18"],
        [subjects.sem5.SAD, "Lab A"],
        ["*", ""],
      ],
    },
    {
      day: "Wed",
      a: [
        [subjects.sem5.MM, "Lab E"],
        [subjects.sem5["Web Tech"], "16"],
        [subjects.sem5.SAD, "Lab A"],
        [subjects.sem5.Simulation, "Lab A"],
      ],
      b: [
        [subjects.sem5["Web Tech"], "18"],
        [subjects.sem5.MM, "Lab D"],
        [subjects.sem5.SAD, "Lab A"],
        [subjects.sem5.DAA, "18"],
      ],
    },
    {
      day: "Thu",
      a: [
        [subjects.sem5.MM, "16"],
        [subjects.sem5["Web Tech"], "Lab G"],
        [subjects.sem5.Simulation, "16"],
        ["*", ""],
      ],
      b: [
        [subjects.sem5["Web Tech"], "Lab F"],
        [subjects.sem5.MM, "18"],
        ["*", ""],
        ["*", ""],
      ],
    },
    {
      day: "Fri",
      a: [
        [subjects.sem5.MM, "16"],
        [subjects.sem5["Web Tech"], "16"],
        ["*", ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem5["Web Tech"], "18"],
        [subjects.sem5.MM, "18"],
        ["*", ""],
        ["*", ""],
      ],
    },
  ],
  sem4: [
    {
      day: "Sun",
      a: [
        [subjects.sem4.TOC, ""],
        [subjects.sem4.DBMS, ""],
        ["*", ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem4.DBMS, ""],
        [subjects.sem4.TOC, ""],
        [subjects.sem4.OS, ""],
        ["*", ""],
      ],
    },
    {
      day: "Mon",
      a: [
        [subjects.sem4.CN, ""],
        [subjects.sem4.DBMS, ""],
        [subjects.sem4.OS, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem4.DBMS, ""],
        [subjects.sem4.OS, ""],
        [subjects.sem4.TOC, ""],
        ["*", ""],
      ],
    },
    {
      day: "Tue",
      a: [
        [subjects.sem4.AI, ""],
        [subjects.sem4.TOC, ""],
        ["*", ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem4.CN, ""],
        [subjects.sem4.AI, ""],
        [subjects.sem4.OS, ""],
        ["*", ""],
      ],
    },
    {
      day: "Wed",
      a: [
        [subjects.sem4.AI, ""],
        [subjects.sem4.TOC, ""],
        [subjects.sem4.OS, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem4.CN, ""],
        [subjects.sem4.AI, ""],
        ["*", ""],
        ["*", ""],
      ],
    },
    {
      day: "Thu",
      a: [
        [subjects.sem4.CN, ""],
        [subjects.sem4.DBMS, ""],
        [subjects.sem4.OS, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem4.DBMS, ""],
        [subjects.sem4.TOC, ""],
        ["*", ""],
        ["*", ""],
      ],
    },
    {
      day: "Fri",
      a: [
        [subjects.sem4.AI, ""],
        [subjects.sem4.CN, ""],
        ["*", ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem4.CN, ""],
        [subjects.sem4.AI, ""],
        ["*", ""],
        ["*", ""],
      ],
    },
  ],
  // sem4: [
  //   {
  //     day: "Sun",
  //     a: [
  //       [subjects.sem4.AI, ""],
  //       [subjects.sem4.OS, ""],
  //       [subjects.sem4.CN, "314"],
  //     ],
  //     b: [
  //       [subjects.sem4.AI, ""],
  //       [subjects.sem4.OS, ""],
  //       [subjects.sem4.DBMS, "316"],
  //     ],
  //   },
  //   {
  //     day: "Mon",
  //     a: [
  //       [subjects.sem4.DBMS, "314"],
  //       [subjects.sem4.CN, "314"],
  //       ["*", ""],
  //     ],
  //     b: [
  //       [subjects.sem4.CN, "316"],
  //       [subjects.sem4.TOC, "316"],
  //       [subjects.sem4.DBMS, "316"],
  //     ],
  //   },
  //   {
  //     day: "Tue",
  //     a: [
  //       [subjects.sem4.TOC, "314"],
  //       [subjects.sem4.AI, ""],
  //       [subjects.sem4.DBMS, "314"],
  //     ],
  //     b: [
  //       [subjects.sem4.CN, "316"],
  //       [subjects.sem4.AI, ""],
  //       ["*", ""],
  //     ],
  //   },
  //   {
  //     day: "Wed",
  //     a: [
  //       [subjects.sem4.TOC, "314"],
  //       [subjects.sem4.OS, "314"],
  //       ["*", ""],
  //     ],
  //     b: [
  //       [subjects.sem4.OS, "316"],
  //       [subjects.sem4.CN, "316"],
  //       [subjects.sem4.TOC, "316"],
  //     ],
  //   },
  //   {
  //     day: "Thu",
  //     a: [
  //       [subjects.sem4.OS, "314"],
  //       [subjects.sem4.TOC, "314"],
  //       [subjects.sem4.DBMS, "314"],
  //     ],
  //     b: [
  //       [subjects.sem4.TOC, "316"],
  //       [subjects.sem4.DBMS, "316"],
  //       ["*", ""],
  //     ],
  //   },
  //   {
  //     day: "Fri",
  //     a: [
  //       [subjects.sem4.CN, "314"],
  //       [subjects.sem4.AI, ""],
  //       ["*", ""],
  //     ],
  //     b: [
  //       [subjects.sem4.OS, "316"],
  //       [subjects.sem4.AI, ""],
  //       ["*", ""],
  //     ],
  //   },
  // ],
  sem3: [
    {
      day: "Sun",
      a: [
        [subjects.sem3.NM, ""],
        [subjects.sem3.CG, ""],
        [subjects.sem3.DSA, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem3.CG, ""],
        [subjects.sem3.Stats2, ""],
        ["*", ""],
      ],
    },
    {
      day: "Mon",
      a: [
        [subjects.sem3.CG, ""],
        [subjects.sem3.Stats2, ""],
        [subjects.sem3.DSA, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem3.DSA, ""],
        [subjects.sem3.CG, ""],
        [subjects.sem3.Stats2, ""],
        ["*", ""],
      ],
    },
    {
      day: "Tue",
      a: [
        [subjects.sem3.CG, ""],
        [subjects.sem3.NM, ""],
        [subjects.sem3.Stats2, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem3.DSA, ""],
        [subjects.sem3.Stats2, ""],
        [subjects.sem3.NM, ""],
        ["*", ""],
      ],
    },
    {
      day: "Wed",
      a: [
        [subjects.sem3.CA, ""],
        [subjects.sem3.Stats2, ""],
        ["*", ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem3.NM, ""],
        [subjects.sem3.CA, ""],
        [subjects.sem3.Stats2, ""],
        ["*", ""],
      ],
    },
    {
      day: "Thu",
      a: [
        [subjects.sem3.CA, ""],
        [subjects.sem3.NM, ""],
        [subjects.sem3.DSA, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem3.DSA, ""],
        [subjects.sem3.CA, ""],
        [subjects.sem3.CG, ""],
        ["*", ""],
      ],
    },
    {
      day: "Fri",
      a: [
        [subjects.sem3.CA, ""],
        [subjects.sem3.Stats2, ""],
        ["*", ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem3.NM, ""],
        [subjects.sem3.CA, ""],
        ["*", ""],
        ["*", ""],
      ],
    },
  ],
  sem2: [
    {
      day: "Sun",
      a: [
        [subjects.sem2.OOP, ""],
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.DS, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem2.MP, ""],
        [subjects.sem2.OOP, ""],
        [subjects.sem2.Stats1, ""],
        ["*", ""],
      ],
    },
    {
      day: "Mon",
      a: [
        [subjects.sem2.OOP, ""],
        [subjects.sem2.DS, ""],
        [subjects.sem2.MP, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.Stats1, ""],
        [subjects.sem2.OOP, ""],
        ["*", ""],
      ],
    },
    {
      day: "Tue",
      a: [
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.Stats1, ""],
        [subjects.sem2.MP, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.OOP, ""],
        [subjects.sem2.DS, ""],
        ["*", ""],
      ],
    },
    {
      day: "Wed",
      a: [
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.MP, ""],
        [subjects.sem2.Maths2, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.MP, ""],
        [subjects.sem2.DS, ""],
        ["*", ""],
      ],
    },
    {
      day: "Thu",
      a: [
        [subjects.sem2.Stats1, ""],
        [subjects.sem2.DS, ""],
        [subjects.sem2.OOP, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem2.DS, ""],
        [subjects.sem2.Stats1, ""],
        [subjects.sem2.MP, ""],
        ["*", ""],
      ],
    },
    {
      day: "Fri",
      a: [
        [subjects.sem2.DS, ""],
        [subjects.sem2.Stats1, ""],
        ["*", ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem2.DS, ""],
        [subjects.sem2.Maths2, ""],
        ["*", ""],
        ["*", ""],
      ],
    },
  ],
};

export const examTypes = {
  mid: "Mid Term",
  pre: "Pre Board",
  board: "Board",
  prac: "Practical",
};

export const questionPapers = {
  sem1: {
    [subjects.sem1.Maths1.shortName]: [],
    [subjects.sem1.Physics.shortName]: [],
    [subjects.sem1.DL.shortName]: [],
    [subjects.sem1.C.shortName]: [],
    [subjects.sem1.IIT.shortName]: [],
  },
  sem2: {
    [subjects.sem2.DS.shortName]: [
      {
        examType: examTypes.mid,
        batch: 2020,
        link: "https://drive.google.com/file/d/1x7Jyr03XOa2Dmbz027FDwiBdwuWJJxOT/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2021,
        link: "https://drive.google.com/file/d/1HDDVG42CasoGK6s9tem0XkR2tMYV3c1D/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2022,
        link: "https://drive.google.com/file/d/1aEPAKal2x75BavDDHCUDT69V1w80oZh5/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2020,
        link: "https://drive.google.com/file/d/1xwcM3OSqdp0bY841bcjQ03AUR9wSbGYD/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2021,
        link: "https://drive.google.com/file/d/16O2zI_vrZaKGQRxWZFEqDuGOdOJf8cB8/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2022,
        link: "https://drive.google.com/file/d/1p-NnuX7b956dlus-XFX-0i5RgRupuOj-/view?usp=sharing",
      },
      {
        examType: examTypes.board,
        batch: 2020,
        link: "https://drive.google.com/file/d/1Oq1S5t9DfyHbgwZwV-hGdLjAIvAwDv0h/view?usp=sharing",
      },
    ],
    [subjects.sem2.OOP.shortName]: [
      {
        examType: examTypes.mid,
        batch: 2020,
        link: "https://drive.google.com/file/d/1qLivCf8bjgRCTBQfOq1yUxL5ZkxoyWaN/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2021,
        link: "https://drive.google.com/file/d/1EsqimrnoEAy4Q-7bSbgu32iwTlQKM27O/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2022,
        link: "https://drive.google.com/file/d/1IAaXGM2j4gjKsoJ5ULPFLWpcQE4bQj8S/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2020,
        link: "https://drive.google.com/file/d/1jQMXGUxqHetKEzO5xmt3Eha2NywlUUFQ/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2021,
        link: "https://drive.google.com/file/d/1kQAuNvZN-wtOydnV3R_d1_yUgfwB1Thg/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2022,
        link: "https://drive.google.com/file/d/1gAh2LrnR8BIzM2c18QMJb_YPMgHkihGU/view?usp=sharing",
      },
      {
        examType: examTypes.board,
        batch: 2020,
        link: "https://drive.google.com/file/d/1Vw_09Yu8UR3fyj4HTfh9l8rnQV2y8q0V/view?usp=sharing",
      },
    ],
    [subjects.sem2.MP.shortName]: [
      {
        examType: examTypes.mid,
        batch: 2020,
        link: "https://drive.google.com/file/d/1bhTlKNl18zIKEnogHMlVAzoKxmJyE3Z5/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2021,
        link: "https://drive.google.com/file/d/10YZH7hOduUDUYuEEGU8uVGA6X5AWvPTd/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2022,
        link: "https://drive.google.com/file/d/1aogMfgrI__PCdgNREiA9EDhW0dT5Hdl5/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2020,
        link: "https://drive.google.com/file/d/1yYDVKykul4AH5OOTVZOzBvG2UQrCEGbm/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2021,
        link: "https://drive.google.com/file/d/1rev8bLaWn_QF8s61WmG6n_i-H75YwpcS/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2022,
        link: "https://drive.google.com/file/d/1KQf0Yp4Oez5iAPhWXSA16lVyb9RUmd2b/view?usp=sharing",
      },
      {
        examType: examTypes.board,
        batch: 2020,
        link: "https://drive.google.com/file/d/1AvSpFuEfuqWfrS5jszcVnk7VzncE1KjC/view?usp=sharing",
      },
    ],
    [subjects.sem2.Maths2.shortName]: [
      {
        examType: examTypes.mid,
        batch: 2020,
        link: "https://drive.google.com/file/d/1mbVWqYZrJcnyw7CCfpx4rlMT_EjJ66uP/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2021,
        link: "https://drive.google.com/file/d/1JaBlO_GwuxQ-W_a2ILvGrzTsJv8aMoby/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2022,
        link: "https://drive.google.com/file/d/1cja7seNECQav0XHdyCtzivNaUOq2aP69/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2020,
        link: "https://drive.google.com/file/d/1vOIAzTXv9ulxHNjvkVxs6D_jsfPlHxFf/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2021,
        link: "https://drive.google.com/file/d/1XA4wat2weieOtz4w9YV06_QlOCxUhgzq/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2022,
        link: "https://drive.google.com/file/d/1Y9Orz4p4J2f-v2papNetSmNcp8csd9ma/view?usp=sharing",
      },
      {
        examType: examTypes.board,
        batch: 2020,
        link: "https://drive.google.com/file/d/13Rg-Tf0JTpkLg0zvROTpyWdKdUP0oEPv/view?usp=sharing",
      },
    ],
    [subjects.sem2.Stats1.shortName]: [
      {
        examType: examTypes.mid,
        batch: 2020,
        link: "https://drive.google.com/file/d/1Ft5_bgYtivlAAAIdK0DySEAMnX26mu8s/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2021,
        link: "https://drive.google.com/file/d/1m4F0fm92AaKMDhzw92nsB1f5Y555tR9Q/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2022,
        link: "https://drive.google.com/file/d/1-NLSGA5xoMzo1C5vPLuSru7cmeUl8Owt/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2020,
        link: "https://drive.google.com/file/d/19x68p_P1cyxjktaRR6CDmpKZqAkezjvX/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2021,
        link: "https://drive.google.com/file/d/15MUANysXDXlqa0fumKrFjUJADpG-i_eh/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2022,
        link: "https://drive.google.com/file/d/1XzE6iPG086GEZeMTBEB-41HA5uW9_lW3/view?usp=sharing",
      },
      {
        examType: examTypes.board,
        batch: 2020,
        link: "https://drive.google.com/file/d/18HKz_Vy80ptDKSsHAU6rHk-DOWD_YoGJ/view?usp=sharing",
      },
    ],
  },
  sem3: {
    [subjects.sem3.DSA.shortName]: [
      {
        examType: examTypes.mid,
        batch: 2020,
        link: "https://drive.google.com/file/d/1b8gJ0FM_ehJHOkRpxjzBAy3o0kiJc82S/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2021,
        link: "https://drive.google.com/file/d/1U64Rq0InJCUD9lgMdmpVVdhOgU1LUSoI/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2020,
        link: "https://drive.google.com/file/d/1LG18b70rYqpeRPuEM0zh5R0PTqV3XIFZ/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2021,
        link: "https://drive.google.com/file/d/1DKJT0-dPVwh2zST6u3DSWNJNo2HDDKsx/view?usp=sharing",
      },
      {
        examType: examTypes.board,
        batch: 2020,
        link: "https://drive.google.com/file/d/1l-xE087Zq-HyEJP043gELVZO03q6XMZM/view?usp=sharing",
      },
    ],
    [subjects.sem3.NM.shortName]: [
      {
        examType: examTypes.mid,
        batch: 2020,
        link: "https://drive.google.com/file/d/1CgN11HSayGkWT-582B7hSZ1o0DMf0nVw/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2021,
        link: "https://drive.google.com/file/d/1Rsev3NqHbo12kj4k0c3uHP4WfqgcZkvj/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2020,
        link: "https://drive.google.com/file/d/1sJlIs9Sosj-4fErCg7V16kA2220-jeaY/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2021,
        link: "https://drive.google.com/file/d/1qOkO6tkaQj8jmDCCq-L6CfqaIIVD9UpE/view?usp=sharing",
      },
      {
        examType: examTypes.board,
        batch: 2020,
        link: "https://drive.google.com/file/d/1amrHYREsFetDaO8h3ppxGTtU-D0oQdO9/view?usp=sharing",
      },
    ],
    [subjects.sem3.CA.shortName]: [
      {
        examType: examTypes.mid,
        batch: 2020,
        link: "https://drive.google.com/file/d/13DeDGGm3NXlJQh4vkZiXQtfmfIbAEFG-/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2021,
        link: "https://drive.google.com/file/d/1xNvHf46TXv3bogS-VtXW60AQrCTyiEEl/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2020,
        link: "https://drive.google.com/file/d/1PilfaCtgLJqksj1ZVNJpzS-Ohze3kVtK/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2021,
        link: "https://drive.google.com/file/d/13SiisXbpBFrirhKdQCMlcU7V3B8qbgZs/view?usp=sharing",
      },
      {
        examType: examTypes.board,
        batch: 2020,
        link: "https://drive.google.com/file/d/1LD8oFR9X3A_-0Cex0ENhOI9_lQIX0A1m/view?usp=sharing",
      },
    ],
    [subjects.sem3.CG.shortName]: [
      {
        examType: examTypes.mid,
        batch: 2020,
        link: "https://drive.google.com/file/d/1HpsllQHs3wGWNb5BIzNsfj6J6xsw_Py1/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2021,
        link: "https://drive.google.com/file/d/1JBsbdQtc4FFjBl09dWh68FoNbvNnjvX4/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2020,
        link: "https://drive.google.com/file/d/1cZyI-IPa__snAb-L3HKbBwnZ2l2Cb5aD/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2021,
        link: "https://drive.google.com/file/d/16-89THl9IAcr8tbW0Zn0SQyK1WevGT4U/view?usp=sharing",
      },
      {
        examType: examTypes.board,
        batch: 2020,
        link: "https://drive.google.com/file/d/1c99bZmqeHOJ0vtqQZyYJQqZ-ZsuKfz70/view?usp=sharing",
      },
    ],
    [subjects.sem3.Stats2.shortName]: [
      {
        examType: examTypes.mid,
        batch: 2020,
        link: "https://drive.google.com/file/d/1UA8TakfIJ4qmGKvJ4B-eisT52UQH1Gx1/view?usp=sharing",
      },
      {
        examType: examTypes.mid,
        batch: 2021,
        link: "https://drive.google.com/file/d/1etcLTBh_RywbjqRslbDkErO0h7stsTOE/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2020,
        link: "https://drive.google.com/file/d/1HtifVPG8QRC319iPiycUW2yP8awZqrFA/view?usp=sharing",
      },
      {
        examType: examTypes.pre,
        batch: 2021,
        link: "https://drive.google.com/file/d/12bYoKeNUHz6Sp-GeOx6zq4oXD05M9pxp/view?usp=sharing",
      },
      {
        examType: examTypes.board,
        batch: 2020,
        link: "https://drive.google.com/file/d/1vpE578wVtbcbBmfsg2PEKW8i4c8qIIXI/view?usp=sharing",
      },
    ],
  },
};

export const examRoutine = {
  sem1: {},
  sem2: {
    [examTypes.pre]: [
      {
        day: "Mon",
        subject: subjects.sem2.DS,
        date: "2023/09/25",
        friendlyDate: (
          <>
            25<sup>th</sup> September
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem2.OOP,
        date: "2023/09/26",
        friendlyDate: (
          <>
            26<sup>th</sup> September
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem2.MP,
        date: "2023/09/27",
        friendlyDate: (
          <>
            27<sup>th</sup> September
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem2.Maths2,
        date: "2023/09/28",
        friendlyDate: (
          <>
            28<sup>th</sup> September
          </>
        ),
      },
      {
        day: "Fri",
        subject: subjects.sem2.Stats1,
        date: "2023/09/29",
        friendlyDate: (
          <>
            29<sup>th</sup> September
          </>
        ),
      },
    ],
    [examTypes.prac]: [
      {
        day: "Wed",
        subject: subjects.sem2.DS,
        date: "2023/10/11",
        time: "7:00 AM",
        friendlyDate: (
          <>
            11<sup>th</sup> October
          </>
        ),
      },
      {
        day: "Fri",
        subject: subjects.sem2.Stats1,
        date: "2023/10/13",
        time: "7:00 AM",
        friendlyDate: (
          <>
            13<sup>th</sup> October
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem2.OOP,
        date: "2023/10/16",
        time: "7:00 AM",
        friendlyDate: (
          <>
            16<sup>th</sup> October
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem2.MP,
        date: "2023/10/17",
        time: "11:30 AM",
        friendlyDate: (
          <>
            17<sup>th</sup> October
          </>
        ),
      },
    ],
    [examTypes.board]: [
      {
        day: "Tue",
        subject: subjects.sem2.DS,
        date: "2023/11/28",
        friendlyDate: (
          <>
            28<sup>th</sup> November
            <br />
            12<sup>th</sup> Mangsir
          </>
        ),
        source: "https://iost.tu.edu.np/notices/1410",
        sourceName: "TU Notice",
      },
      {
        day: "Fri",
        date: "2023/12/01",
        subject: subjects.sem2.OOP,
        friendlyDate: (
          <>
            1<sup>st</sup> December
            <br />
            15<sup>th</sup> Mangsir
          </>
        ),
      },
      {
        day: "Mon",
        date: "2023/12/04",
        subject: subjects.sem2.MP,
        friendlyDate: (
          <>
            4<sup>th</sup> December
            <br />
            18<sup>th</sup> Mangsir
          </>
        ),
      },
      {
        day: "Thu",
        date: "2023/12/07",
        subject: subjects.sem2.Maths2,
        friendlyDate: (
          <>
            7<sup>th</sup> December
            <br />
            21<sup>st</sup> Mangsir
          </>
        ),
      },
      {
        day: "Sun",
        date: "2023/12/10",
        subject: subjects.sem2.Stats1,
        friendlyDate: (
          <>
            10<sup>th</sup> December
            <br />
            24<sup>th</sup> Mangsir
          </>
        ),
      },
    ],
  },
  sem3: {
    [examTypes.mid]: [
      {
        day: "Tue",
        subject: subjects.sem3.NM,
        date: "2023/07/18",
        friendlyDate: (
          <>
            18<sup>th</sup> July
            <br />2<sup>nd</sup> Shrawan
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem3.DSA,
        date: "2023/07/19",
        friendlyDate: (
          <>
            19<sup>th</sup> July
            <br />3<sup>rd</sup> Shrawan
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem3.CG,
        date: "2023/07/20",
        friendlyDate: (
          <>
            20<sup>th</sup> July
            <br />4<sup>th</sup> Shrawan
          </>
        ),
      },
      {
        day: "Fri",
        subject: subjects.sem3.Stats2,
        date: "2023/07/21",
        friendlyDate: (
          <>
            21<sup>st</sup> July
            <br />5<sup>th</sup> Shrawan
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem3.CA,
        date: "2023/07/25",
        friendlyDate: (
          <>
            25<sup>th</sup> July
            <br />9<sup>th</sup> Shrawan
          </>
        ),
      },
    ],
    [examTypes.pre]: [
      {
        day: "Tue",
        subject: subjects.sem3.CA,
        date: "2023/08/29",
        friendlyDate: (
          <>
            29<sup>th</sup> August
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem3.NM,
        date: "2023/08/30",
        friendlyDate: (
          <>
            30<sup>th</sup> August
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem3.DSA,
        date: "2023/09/04",
        friendlyDate: (
          <>
            4<sup>th</sup> September
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem3.CG,
        date: "2023/09/05",
        friendlyDate: (
          <>
            5<sup>th</sup> September
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem3.Stats2,
        date: "2023/09/06",
        friendlyDate: (
          <>
            6<sup>th</sup> September
          </>
        ),
      },
    ],
    [examTypes.board]: [
      {
        day: "Fri",
        subject: subjects.sem3.DSA,
        date: "2023/09/29",
        friendlyDate: (
          <>
            29<sup>th</sup> September
            <br />
            12<sup>th</sup> Ashoj
          </>
        ),
        source: "https://iost.tu.edu.np/notices/831",
        sourceName: "TU Notice",
      },
      {
        day: "Mon",
        date: "2023/10/02",
        subject: subjects.sem3.NM,
        friendlyDate: (
          <>
            2<sup>nd</sup> October
            <br />
            15<sup>th</sup> Ashoj
          </>
        ),
      },
      {
        day: "Thu",
        date: "2023/10/05",
        subject: subjects.sem3.CA,
        friendlyDate: (
          <>
            5<sup>th</sup> October
            <br />
            18<sup>th</sup> Ashoj
          </>
        ),
      },
      {
        day: "Sun",
        date: "2023/10/08",
        subject: subjects.sem3.CG,
        friendlyDate: (
          <>
            8<sup>th</sup> October
            <br />
            21<sup>st</sup> Ashoj
          </>
        ),
      },
      {
        day: "Wed",
        date: "2023/10/11",
        subject: subjects.sem3.Stats2,
        friendlyDate: (
          <>
            11<sup>th</sup> October
            <br />
            24<sup>th</sup> Ashoj
          </>
        ),
      },
    ],
    [examTypes.prac]: [
      {
        day: "Thu",
        subject: subjects.sem3.CG,
        date: "2023/10/12",
        time: "10:00 AM",
        friendlyDate: (
          <>
            12<sup>th</sup> October
          </>
        ),
      },
      {
        day: "Fri",
        subject: subjects.sem3.DSA,
        date: "2023/10/13",
        time: (
          <>
            7:00 AM
            <br />
            PTA Lab
          </>
        ),
        friendlyDate: (
          <>
            13<sup>th</sup> October
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem3.NM,
        date: "2023/10/16",
        time: (
          <>
            7:00 AM
            <br />
            PTA Lab
          </>
        ),
        friendlyDate: (
          <>
            16<sup>th</sup> October
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem3.CA,
        date: "2023/10/17",
        time: "10:00 AM",
        friendlyDate: (
          <>
            17<sup>th</sup> October
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem3.Stats2,
        date: "2023/10/19",
        time: "7:00 AM",
        friendlyDate: (
          <>
            19<sup>th</sup> October
          </>
        ),
      },
    ],
  },
  sem4: {
    [examTypes.mid]: [
      {
        day: "Sun",
        subject: subjects.sem4.TOC,
        date: "2024/08/11",
        friendlyDate: (
          <>
            11<sup>th</sup> August
            <br />
            27<sup>th</sup> Shrawan
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem4.CN,
        date: "2024/08/12",
        friendlyDate: (
          <>
            12<sup>th</sup> August
            <br />
            28<sup>th</sup> Shrawan
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem4.OS,
        date: "2024/08/13",
        friendlyDate: (
          <>
            13<sup>th</sup> August
            <br />
            29<sup>th</sup> Shrawan
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem4.DBMS,
        date: "2024/08/14",
        friendlyDate: (
          <>
            14<sup>th</sup> August
            <br />
            30<sup>th</sup> Shrawan
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem4.AI,

        date: "2024/08/15",
        friendlyDate: (
          <>
            15<sup>th</sup> August
            <br />
            31<sup>st</sup> Shrawan
          </>
        ),
      },
    ],
    [examTypes.pre]: [
      {
        day: "Sun",
        subject: subjects.sem4.TOC,
        date: "2024/09/15",
        friendlyDate: (
          <>
            15<sup>th</sup> September
            <br />
            30<sup>th</sup> Bhadra
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem4.CN,
        date: "2024/09/16",
        friendlyDate: (
          <>
            16<sup>th</sup> September
            <br />
            31<sup>st</sup> Bhadra
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem4.OS,
        date: "2024/09/18",
        friendlyDate: (
          <>
            18<sup>th</sup> September
            <br />2<sup>nd</sup> Asoj
          </>
        ),
      },
      {
        day: "Fri",
        subject: subjects.sem4.DBMS,
        date: "2024/09/20",
        friendlyDate: (
          <>
            20<sup>th</sup> September
            <br />4<sup>th</sup> Asoj
          </>
        ),
      },
      {
        day: "Sun",
        subject: subjects.sem4.AI,
        date: "2024/09/22",
        friendlyDate: (
          <>
            22<sup>nd</sup> September
            <br />6<sup>th</sup> Asoj
          </>
        ),
      },
    ],
    [examTypes.board]: [
      {
        day: "Fri",
        subject: subjects.sem4.TOC,
        date: "2024/11/29",
        friendlyDate: (
          <>
            29<sup>th</sup> November
            <br />
            14<sup>th</sup> Mangsir
          </>
        ),
        source:
          "https://portal.tu.edu.np/notice/4880/B.Sc.CSIT%20&%20BIT%204%20routine.pdf",
        sourceName: "TU Notice",
      },
      {
        day: "Mon",
        date: "2024/12/02",
        subject: subjects.sem4.CN,
        friendlyDate: (
          <>
            2<sup>nd</sup> December
            <br />
            17<sup>th</sup> Mangsir
          </>
        ),
      },
      {
        day: "Thu",
        date: "2024/12/05",
        subject: subjects.sem4.OS,
        friendlyDate: (
          <>
            5<sup>th</sup> December
            <br />
            20<sup>th</sup> Mangsir
          </>
        ),
      },
      {
        day: "Sun",
        date: "2024/12/08",
        subject: subjects.sem4.DBMS,
        friendlyDate: (
          <>
            8<sup>th</sup> December
            <br />
            23<sup>rd</sup> Mangsir
          </>
        ),
      },
      {
        day: "Wed",
        date: "2024/12/11",
        subject: subjects.sem4.AI,
        friendlyDate: (
          <>
            11<sup>th</sup> December
            <br />
            26<sup>th</sup> Mangsir
          </>
        ),
      },
    ],
    [examTypes.prac]: [
      {
        day: "Tue",
        subject: subjects.sem4.DBMS,
        date: "2024/04/16",
        time: "7:00 AM",
        friendlyDate: (
          <>
            16<sup>th</sup> April
            <br />4<sup>th</sup> Baisakh
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem4.CN,
        date: "2024/04/18",
        time: "7:00 AM",
        friendlyDate: (
          <>
            18<sup>th</sup> April
            <br />6<sup>th</sup> Baisakh
          </>
        ),
      },
      {
        day: "Fri",
        subject: subjects.sem4.TOC,
        date: "2024/04/19",
        time: "8:00 AM",
        friendlyDate: (
          <>
            19<sup>th</sup> April
            <br />7<sup>th</sup> Baisakh
          </>
        ),
      },
      {
        day: "Sun",
        subject: subjects.sem4.AI,
        date: "2024/04/21",
        time: "8:00 AM",
        friendlyDate: (
          <>
            21<sup>st</sup> April
            <br />9<sup>th</sup> Baisakh
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem4.OS,
        date: "2024/04/22",
        time: "7:00 AM",
        friendlyDate: (
          <>
            22<sup>nd</sup> April
            <br />
            10<sup>th</sup> Baisakh
          </>
        ),
      },
    ],
  },
  sem5: {
    ["lab"]: [
      {
        day: "Sun",
        subject: subjects.sem5.Crypto,
        date: "2024/08/25",
        friendlyDate: (
          <>
            25<sup>th</sup> August
            <br />9<sup>th</sup> Bhadra
          </>
        ),
      },
      {
        day: "Sun",
        subject: subjects.sem5.SAD,
        date: "2024/08/25",
        friendlyDate: (
          <>
            25<sup>th</sup> August
            <br />9<sup>th</sup> Bhadra
          </>
        ),
      },
    ],
    [examTypes.mid]: [
      {
        day: "Sun",
        subject: subjects.sem5.DAA,
        date: "2024/06/16",
        friendlyDate: (
          <>
            16<sup>th</sup> June
            <br />2<sup>nd</sup> Ashad
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem5.SAD,
        date: "2024/06/17",
        friendlyDate: (
          <>
            17<sup>th</sup> June
            <br />3<sup>rd</sup> Ashad
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem5.Crypto,
        date: "2024/06/18",
        friendlyDate: (
          <>
            18<sup>th</sup> June
            <br />4<sup>th</sup> Ashad
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem5.Simulation,
        date: "2024/06/19",
        friendlyDate: (
          <>
            19<sup>th</sup> June
            <br />5<sup>th</sup> Ashad
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem5["Web Tech"],
        date: "2024/06/20",
        friendlyDate: (
          <>
            20<sup>th</sup> June
            <br />6<sup>th</sup> Ashad
          </>
        ),
      },
      {
        day: "Fri",
        subject: subjects.sem5.MM,
        date: "2024/06/21",
        friendlyDate: (
          <>
            21<sup>st</sup> June
            <br />7<sup>th</sup> Ashad
          </>
        ),
      },
    ],
    [examTypes.pre]: [
      {
        day: "Sun",
        subject: subjects.sem5.DAA,
        date: "2024/08/11",
        friendlyDate: (
          <>
            11<sup>th</sup> August
            <br />
            27<sup>th</sup> Shrawan
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem5.SAD,
        date: "2024/08/12",
        friendlyDate: (
          <>
            12<sup>th</sup> August
            <br />
            28<sup>th</sup> Shrawan
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem5.Crypto,
        date: "2024/08/13",
        friendlyDate: (
          <>
            13<sup>th</sup> August
            <br />
            29<sup>th</sup> Shrawan
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem5.Simulation,
        date: "2024/08/14",
        friendlyDate: (
          <>
            14<sup>th</sup> August
            <br />
            30<sup>th</sup> Shrawan
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem5["Web Tech"],
        date: "2024/08/15",
        friendlyDate: (
          <>
            15<sup>th</sup> August
            <br />
            31<sup>st</sup> Shrawan
          </>
        ),
      },
      {
        day: "Sun",
        subject: subjects.sem5.MM,
        date: "2024/08/18",
        friendlyDate: (
          <>
            18<sup>th</sup> August
            <br />2<sup>nd</sup> Bhadra
          </>
        ),
      },
    ],
    [examTypes.board]: [
      {
        day: "Fri",
        subject: subjects.sem5.DAA,
        date: "2024/09/13",
        friendlyDate: (
          <>
            13<sup>th</sup> Sept
            <br />
            28<sup>th</sup> Bhadra
          </>
        ),
        source: "https://iost.tu.edu.np/notices/3878",
        sourceName: "TU Notice",
      },
      {
        day: "Mon",
        date: "2024/09/16",
        subject: subjects.sem5.SAD,
        friendlyDate: (
          <>
            16<sup>th</sup> Sept
            <br />
            31<sup>st</sup> Bhadra
          </>
        ),
      },
      {
        day: "Fri",
        date: "2024/09/20",
        subject: subjects.sem5.Crypto,
        friendlyDate: (
          <>
            20<sup>th</sup> Sept
            <br />4<sup>th</sup> Ashoj
          </>
        ),
      },
      {
        day: "Tue",
        date: "2024/09/24",
        subject: subjects.sem5.Simulation,
        friendlyDate: (
          <>
            24<sup>th</sup> Sept
            <br />8<sup>th</sup> Ashoj
          </>
        ),
      },
      {
        day: "Fri",
        date: "2024/09/27",
        subject: subjects.sem5["Web Tech"],
        friendlyDate: (
          <>
            27<sup>th</sup> Sept
            <br />
            11<sup>th</sup> Ashoj
          </>
        ),
      },
      {
        day: "Mon",
        date: "2024/09/30",
        subject: subjects.sem5.MM,
        friendlyDate: (
          <>
            30<sup>th</sup> Sept
            <br />
            14<sup>th</sup> Ashoj
          </>
        ),
      },
    ],
    [examTypes.prac]: [
      {
        day: "Mon",
        subject: subjects.sem5["Web Tech"],
        time: "7:00 AM",
        date: "2024/11/11",
        friendlyDate: (
          <>
            11<sup>th</sup> November
            <br />
            26<sup>th</sup> Kartik
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem5.DAA,
        time: "8:00 AM",
        date: "2024/11/12",
        friendlyDate: (
          <>
            12<sup>th</sup> November
            <br />
            27<sup>th</sup> Kartik
          </>
        ),
      },
      {
        day: "Wed",
        time: "6:30 AM",
        date: "2024/11/13",
        subject: subjects.sem5.MM,
        friendlyDate: (
          <>
            13<sup>th</sup> November
            <br />
            28<sup>th</sup> Kartik
          </>
        ),
      },
      {
        day: "Fri",
        date: "2024/11/15",
        time: "6:20 AM",
        subject: subjects.sem5.SAD,
        friendlyDate: (
          <>
            15<sup>th</sup> November
            <br />
            30<sup>th</sup> Kartik
          </>
        ),
      },
      {
        day: "Sun",
        time: "7:00 AM",
        date: "2024/11/17",
        subject: subjects.sem5.Crypto,
        friendlyDate: (
          <>
            17<sup>th</sup> November
            <br />2<sup>nd</sup> Mangsir
          </>
        ),
      },
      {
        day: "Mon",
        time: "8:00 AM",
        date: "2024/11/18",
        subject: subjects.sem5.Simulation,
        friendlyDate: (
          <>
            18<sup>th</sup> November
            <br />3<sup>rd</sup> Mangsir
          </>
        ),
      },
    ],
  },
  sem6: {
    [examTypes.mid]: [
      {
        day: "Thu",
        subject: subjects.sem6.Compiler,
        date: "2025/01/30",
        time: "6:35 AM",
        friendlyDate: (
          <>
            30<sup>th</sup> January
            <br />
            17<sup>th</sup> Magh
          </>
        ),
      },
      {
        day: "Fri",
        subject: subjects.sem6.EGov,
        date: "2025/01/31",
        time: "6:35 AM",
        friendlyDate: (
          <>
            31<sup>st</sup> January
            <br />
            18<sup>th</sup> Magh
          </>
        ),
      },
      {
        day: "Sun",
        subject: subjects.sem6.NCC,
        date: "2025/02/02",
        time: "6:15 AM",
        friendlyDate: (
          <>
            2<sup>nd</sup> February
            <br />
            20<sup>th</sup> Magh
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem6.TW,
        date: "2025/02/03",
        time: "6:15 AM",
        friendlyDate: (
          <>
            3<sup>rd</sup> February
            <br />
            21<sup>st</sup> Magh
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem6.ECom,
        date: "2025/02/04",
        time: "6:15 AM",
        friendlyDate: (
          <>
            4<sup>th</sup> February
            <br />
            22<sup>nd</sup> Magh
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem6.SE,
        date: "2025/02/05",
        time: "6:15 AM",
        friendlyDate: (
          <>
            5<sup>th</sup> February
            <br />
            23<sup>rd</sup> Magh
          </>
        ),
      },
    ],
  },
};

export const currentJoonSem = "sem6";

export const classRoutineSem2 = [
  {
    day: "Mon",
    a: [
      ["Math (DKP)", "416"],
      ["DS", "416"],
      ["MP", "416"],
      ["*", ""],
    ],
    b: [
      ["Stat", "419"],
      ["Math (BHS)", "419"],
      ["OOP", "419"],
      ["*", ""],
    ],
  },
  {
    day: "Tue",
    a: [
      ["Math (RK)", "416"],
      ["DS (Lab)", "Lab E"],
      ["Stat", "416"],
      ["OOP", "Lab B"],
    ],
    b: [
      ["DS", "419"],
      ["Math (AMS)", "419"],
      ["MP", "419"],
      ["Stat", "Lab B"],
    ],
  },
  {
    day: "Wed",
    a: [
      ["Math (BHS)", "416"],
      ["DS", "416"],
      ["MP (Lab)", "Lab B"],
      ["Stat", "Lab B"],
    ],
    b: [
      ["Math (DKP)", "419"],
      ["MP (Lab)", "Lab B"],
      ["DS (Lab)", "Lab D"],
      ["OOP (Lab)", "Lab D"],
    ],
  },
  {
    day: "Thu",
    a: [
      ["OOP (Lab)", "Lab F"],
      ["Math (AMS)", "416"],
      ["MP", "416"],
      ["*", ""],
    ],
    b: [
      ["MP", "419"],
      ["Stat", "Lab F"],
      ["OOP", "419"],
      ["*", ""],
    ],
  },
  {
    day: "Fri",
    a: [
      ["MP (Lab)", "416"],
      ["Stat", "416"],
      ["OOP", "Lab F"],
      ["*", ""],
    ],
    b: [
      ["Math (RK)", "419"],
      ["MP (Lab)", "419"],
      ["DS", "419"],
      ["*", ""],
    ],
  },
];

export const names = {
  sem6: {
    1: ["Aakash Shrestha", "021BSCIT001", "A"],
    2: ["Aayam Pokharel", "021BSCIT002", "A"],
    3: ["Aayush Poudel", "021BSCIT003", "A"],
    4: ["Aayush Shrestha", "021BSCIT004", "A"],
    5: ["Abhishek Uprety", "021BSCIT005", "A"],
    6: ["Ashraya Jung Sijapati", "021BSCIT006", "A"],
    7: ["Binaya Paudel", "021BSCIT007", "A"],
    8: ["Binaya Shrestha", "021BSCIT008", "A"],
    9: ["Dhiraj Sah", "021BSCIT009", "A"],
    10: ["Gaurav Bhatt", "021BSCIT010", "A"],
    11: ["Gaurav Kafle", "021BSCIT011", "A"],
    12: ["Joon Shakya", "021BSCIT012", "A"],
    13: ["Nischal Shrestha", "021BSCIT013", "A"],
    14: ["Nitika Pradhananga", "021BSCIT014", "A"],
    15: ["Pralov Malla", "021BSCIT015", "A"],
    16: ["Rasna Bhasima", "021BSCIT016", "A"],
    17: ["Redikshya Phuyal", "021BSCIT017", "A"],
    18: ["Rhizu Joshi", "021BSCIT018", "A"],
    19: ["Riwaj Prasai", "021BSCIT019", "A"],
    20: ["Ruby Shrestha", "021BSCIT020", "A"],
    21: ["Rupesh Bashyal", "021BSCIT021", "A"],
    22: ["Sahara Khatri", "021BSCIT022", "A"],
    23: ["Sahil Lamsal", "021BSCIT023", "A"],
    24: ["Saisab Karki", "021BSCIT024", "A"],
    25: ["Sajina Basnet", "021BSCIT025", "B"],
    26: ["Samarpan Bhandari", "021BSCIT026", "B"],
    27: ["Sameer Shrestha", "021BSCIT027", "B"],
    28: ["Sashwat Maharjan", "021BSCIT028", "B"],
    29: ["Satish Maharjan", "021BSCIT029", "B"],
    30: ["Saugat Dahal", "021BSCIT030", "B"],
    31: ["Saurabh Baral", "021BSCIT031", "B"],
    32: ["Saurav Bista", "021BSCIT032", "B"],
    33: ["Selina Maharjan", "021BSCIT033", "B"],
    34: ["Shamant Kharel", "021BSCIT034", "B"],
    35: ["Shasin Regmi", "021BSCIT035", "B"],
    36: ["Shreeya Nepal", "021BSCIT036", "B"],
    37: ["Shristi Shakya", "021BSCIT037", "B"],
    38: ["Shubham Belbase", "021BSCIT038", "B"],
    39: ["Siddhanta Shrestha", "021BSCIT039", "B"],
    40: ["Sijan Khatri", "021BSCIT040", "B"],
    41: ["Spandan Shakya", "021BSCIT041", "B"],
    42: ["Sudip Shrestha", "021BSCIT042", "B"],
    43: ["Suhana Shrestha", "021BSCIT043", "B"],
    44: ["Sujal Bajracharya", "021BSCIT044", "B"],
    45: ["Susmita Majhi", "021BSCIT045", "B"],
    46: ["Swoyesh Shrestha", "021BSCIT046", "B"],
    47: ["Yogesh Rijal", "021BSCIT047", "B"],
    48: ["Yubraj Khatiwada", "021BSCIT048", "B"],
    49: ["Laviz Pandey", "021BSCIT049", "B"],
    50: ["Nirajan Acharya", "021BSCIT050", "B"],
  },
  sem5: {
    1: ["Aakash Shrestha", "021BSCIT001", "A"],
    2: ["Aayam Pokharel", "021BSCIT002", "A"],
    3: ["Aayush Poudel", "021BSCIT003", "A"],
    4: ["Aayush Shrestha", "021BSCIT004", "A"],
    5: ["Abhishek Uprety", "021BSCIT005", "A"],
    6: ["Ashraya Jung Sijapati", "021BSCIT006", "A"],
    7: ["Binaya Paudel", "021BSCIT007", "A"],
    8: ["Binaya Shrestha", "021BSCIT008", "A"],
    9: ["Dhiraj Sah", "021BSCIT009", "A"],
    10: ["Gaurav Bhatt", "021BSCIT010", "A"],
    11: ["Gaurav Kafle", "021BSCIT011", "A"],
    12: ["Joon Shakya", "021BSCIT012", "A"],
    13: ["Nischal Shrestha", "021BSCIT013", "A"],
    14: ["Nitika Pradhananga", "021BSCIT014", "A"],
    15: ["Pralov Malla", "021BSCIT015", "A"],
    16: ["Rasna Bhasima", "021BSCIT016", "A"],
    17: ["Redikshya Phuyal", "021BSCIT017", "A"],
    18: ["Rhizu Joshi", "021BSCIT018", "A"],
    19: ["Riwaj Prasai", "021BSCIT019", "A"],
    20: ["Ruby Shrestha", "021BSCIT020", "A"],
    21: ["Rupesh Bashyal", "021BSCIT021", "A"],
    22: ["Sahara Khatri", "021BSCIT022", "A"],
    23: ["Sahil Lamsal", "021BSCIT023", "A"],
    24: ["Saisab Karki", "021BSCIT024", "A"],
    25: ["Sajina Basnet", "021BSCIT025", "B"],
    26: ["Samarpan Bhandari", "021BSCIT026", "B"],
    27: ["Sameer Shrestha", "021BSCIT027", "B"],
    28: ["Sashwat Maharjan", "021BSCIT028", "B"],
    29: ["Satish Maharjan", "021BSCIT029", "B"],
    30: ["Saugat Dahal", "021BSCIT030", "B"],
    31: ["Saurabh Baral", "021BSCIT031", "B"],
    32: ["Saurav Bista", "021BSCIT032", "B"],
    33: ["Selina Maharjan", "021BSCIT033", "B"],
    34: ["Shamant Kharel", "021BSCIT034", "B"],
    35: ["Shasin Regmi", "021BSCIT035", "B"],
    36: ["Shreeya Nepal", "021BSCIT036", "B"],
    37: ["Shristi Shakya", "021BSCIT037", "B"],
    38: ["Shubham Belbase", "021BSCIT038", "B"],
    39: ["Siddhanta Shrestha", "021BSCIT039", "B"],
    40: ["Sijan Khatri", "021BSCIT040", "B"],
    41: ["Spandan Shakya", "021BSCIT041", "B"],
    42: ["Sudip Shrestha", "021BSCIT042", "B"],
    43: ["Suhana Shrestha", "021BSCIT043", "B"],
    44: ["Sujal Bajracharya", "021BSCIT044", "B"],
    45: ["Susmita Majhi", "021BSCIT045", "B"],
    46: ["Swoyesh Shrestha", "021BSCIT046", "B"],
    47: ["Yogesh Rijal", "021BSCIT047", "B"],
    48: ["Yubraj Khatiwada", "021BSCIT048", "B"],
    49: ["Laviz Pandey", "021BSCIT049", "B"],
    50: ["Nirajan Acharya", "021BSCIT050", "B"],
  },
  sem4: {
    1: ["Aarjan Mani", "022BSCIT001", "A"],
    2: ["Aaryan Bista", "022BSCIT002", "A"],
    3: ["Aasvi Lamsal", "022BSCIT003", "A"],
    4: ["Aayush Acharya", "022BSCIT004", "A"],
    5: ["Adarsha Baskota", "022BSCIT005", "A"],
    6: ["Alis Maharjan", "022BSCIT006", "A"],
    7: ["Barsha Regmi", "022BSCIT007", "A"],
    8: ["Binish Shrestha", "022BSCIT008", "A"],
    9: ["Deepika Gautam", "022BSCIT009", "A"],
    10: ["Devesh Phaiju", "022BSCIT010", "A"],
    11: ["Devesh Shrestha", "022BSCIT011", "A"],
    12: ["Dipan Kharel", "022BSCIT012", "A"],
    13: ["Dipesh Kumar Kushwaha", "022BSCIT013", "A"],
    14: ["Jenish Shrestha", "022BSCIT014", "A"],
    15: ["Kamal Dhami", "022BSCIT015", "A"],
    16: ["Karuna Silwal", "022BSCIT016", "A"],
    17: ["Mamata Pokharel", "022BSCIT017", "A"],
    18: ["Niharika Khanal", "022BSCIT018", "A"],
    19: ["Niharika Shrestha", "022BSCIT019", "A"],
    20: ["Nilima Shrestha", "022BSCIT020", "A"],
    21: ["Nilisha Shakya", "022BSCIT021", "A"],
    22: ["Nirajan Kumar Yadav", "022BSCIT022", "A"],
    23: ["Nirajan Paudel", "022BSCIT023", "A"],
    24: ["Nirjal Maharjan", "022BSCIT024", "A"],
    25: ["Nischal Gyawali", "022BSCIT025", "B"],
    26: ["Nisum Yonghang", "022BSCIT026", "B"],
    27: ["Parikshit Maharjan", "022BSCIT027", "B"],
    28: ["Piyush K.C.", "022BSCIT028", "B"],
    29: ["Prakriti Shrestha", "022BSCIT029", "B"],
    30: ["Prasamsha Pudasaini", "022BSCIT030", "B"],
    31: ["Pratistha Maharjan", "022BSCIT031", "B"],
    32: ["Puspa Bhusal", "022BSCIT032", "B"],
    33: ["Raman Shakya", "022BSCIT033", "B"],
    34: ["Rayan Karki", "022BSCIT034", "B"],
    35: ["Sabin Dahal", "022BSCIT035", "B"],
    36: ["Samragi Dhakal", "022BSCIT036", "B"],
    37: ["Samridh Kandel", "022BSCIT037", "B"],
    38: ["Satish Dhakal", "022BSCIT038", "B"],
    39: ["Saugat Thapa", "022BSCIT039", "B"],
    40: ["Sejal Ghimire", "022BSCIT040", "B"],
    41: ["Smriti Pant", "022BSCIT041", "B"],
    42: ["Spandan Shah", "022BSCIT042", "B"],
    43: ["Srijal Manandhar", "022BSCIT043", "B"],
    44: ["Subham Sharma", "022BSCIT044", "B"],
    45: ["Sumit Kumar Sah", "022BSCIT045", "B"],
    46: ["Supreme Khadka", "022BSCIT046", "B"],
    47: ["Swornim Raj Dangol", "022BSCIT047", "B"],
    48: ["Utsav Adhikari", "022BSCIT048", "B"],
  },
  sem3: {
    1: ["Aayush Paudel", "023BSCIT001", "A"],
    2: ["Abheet Budhathoki", "023BSCIT002", "A"],
    3: ["Abhishek Barali", "023BSCIT003", "A"],
    4: ["Anjal Rajchal", "023BSCIT004", "A"],
    5: ["Ankit Aryal", "023BSCIT005", "A"],
    6: ["Arun Basnet", "023BSCIT006", "A"],
    7: ["Ashlesa Amatya", "023BSCIT007", "A"],
    8: ["Bijay Raila", "023BSCIT008", "A"],
    9: ["Binesh Bhatta", "023BSCIT009", "A"],
    10: ["Biraj Dahal", "023BSCIT010", "A"],
    11: ["Biraj Shrestha", "023BSCIT011", "A"],
    12: ["Chirag Shahi", "023BSCIT012", "A"],
    13: ["Darpan Basnet", "023BSCIT013", "A"],
    14: ["Eyuzik Chhunju", "023BSCIT014", "A"],
    15: ["Grishmika Adhikari", "023BSCIT015", "A"],
    16: ["Iqra Idrishi", "023BSCIT016", "A"],
    17: ["Jasmine Neupane", "023BSCIT017", "A"],
    18: ["Kamal Chad", "023BSCIT018", "A"],
    19: ["Keshav Bahadur Bk", "023BSCIT019", "A"],
    20: ["Koshish Khadka", "023BSCIT020", "A"],
    21: ["Kripesh Parajuli", "023BSCIT021", "A"],
    22: ["Nidhi Pradhan", "023BSCIT022", "A"],
    23: ["Niraj Thapa", "023BSCIT023", "A"],
    24: ["Prajwal Shrestha", "023BSCIT024", "A"],
    25: ["Praphulla Prakash Pradhananga", "023BSCIT025", "B"],
    26: ["Prasanna Raj Silwal", "023BSCIT026", "B"],
    27: ["Ridham Shrestha", "023BSCIT027", "B"],
    28: ["Riyaj Kuikel", "023BSCIT028", "B"],
    29: ["Rochak Khatiwada", "023BSCIT029", "B"],
    30: ["Roshan Tripathi", "023BSCIT030", "B"],
    31: ["Rupesh Pathak", "023BSCIT031", "B"],
    32: ["Rushal Shrestha", "023BSCIT032", "B"],
    33: ["Sachet Kayastha", "023BSCIT033", "B"],
    34: ["Sajjan Kumar Karn", "023BSCIT034", "B"],
    35: ["Samikshya Osti", "023BSCIT035", "B"],
    36: ["Sandesh Bhandari", "023BSCIT036", "B"],
    37: ["Sandesh Neupane", "023BSCIT037", "B"],
    38: ["Saphal Kumar Khatri", "023BSCIT038", "B"],
    39: ["Satyam Shrestha", "023BSCIT039", "B"],
    40: ["Saujanya Bhattarai", "023BSCIT040", "B"],
    41: ["Sawal Gautam", "023BSCIT041", "B"],
    42: ["Shrabya Dhungana", "023BSCIT042", "B"],
    43: ["Shreya Wagle", "023BSCIT043", "B"],
    44: ["Srijana Adhikari", "023BSCIT044", "B"],
    45: ["Subham Bimali", "023BSCIT045", "B"],
    46: ["Suravi Poudel", "023BSCIT046", "B"],
    47: ["Suvashish Tuladhar", "023BSCIT047", "B"],
    48: ["Swornima Shakya", "023BSCIT048", "B"],
    49: ["Abhigya Rai", "023BSCIT049", "A"],
    50: ["Aadarsha Jha", "023BSCIT050", "A"],
    51: ["Grishma Gurung", "023BSCIT051", "B"],
  },
  sem2: {
    1: ["Aayush Paudel", "023BSCIT001", "A"],
    2: ["Abheet Budhathoki", "023BSCIT002", "A"],
    3: ["Abhishek Barali", "023BSCIT003", "A"],
    4: ["Anjal Rajchal", "023BSCIT004", "A"],
    5: ["Ankit Aryal", "023BSCIT005", "A"],
    6: ["Arun Basnet", "023BSCIT006", "A"],
    7: ["Ashlesa Amatya", "023BSCIT007", "A"],
    8: ["Bijay Raila", "023BSCIT008", "A"],
    9: ["Binesh Bhatta", "023BSCIT009", "A"],
    10: ["Biraj Dahal", "023BSCIT010", "A"],
    11: ["Biraj Shrestha", "023BSCIT011", "A"],
    12: ["Chirag Shahi", "023BSCIT012", "A"],
    13: ["Darpan Basnet", "023BSCIT013", "A"],
    14: ["Eyuzik Chhunju", "023BSCIT014", "A"],
    15: ["Grishmika Adhikari", "023BSCIT015", "A"],
    16: ["Iqra Idrishi", "023BSCIT016", "A"],
    17: ["Jasmine Neupane", "023BSCIT017", "A"],
    18: ["Kamal Chad", "023BSCIT018", "A"],
    19: ["Keshav Bahadur Bk", "023BSCIT019", "A"],
    20: ["Koshish Khadka", "023BSCIT020", "A"],
    21: ["Kripesh Parajuli", "023BSCIT021", "A"],
    22: ["Nidhi Pradhan", "023BSCIT022", "A"],
    23: ["Niraj Thapa", "023BSCIT023", "A"],
    24: ["Prajwal Shrestha", "023BSCIT024", "A"],
    25: ["Praphulla Prakash Pradhananga", "023BSCIT025", "B"],
    26: ["Prasanna Raj Silwal", "023BSCIT026", "B"],
    27: ["Ridham Shrestha", "023BSCIT027", "B"],
    28: ["Riyaj Kuikel", "023BSCIT028", "B"],
    29: ["Rochak Khatiwada", "023BSCIT029", "B"],
    30: ["Roshan Tripathi", "023BSCIT030", "B"],
    31: ["Rupesh Pathak", "023BSCIT031", "B"],
    32: ["Rushal Shrestha", "023BSCIT032", "B"],
    33: ["Sachet Kayastha", "023BSCIT033", "B"],
    34: ["Sajjan Kumar Karn", "023BSCIT034", "B"],
    35: ["Samikshya Osti", "023BSCIT035", "B"],
    36: ["Sandesh Bhandari", "023BSCIT036", "B"],
    37: ["Sandesh Neupane", "023BSCIT037", "B"],
    38: ["Saphal Kumar Khatri", "023BSCIT038", "B"],
    39: ["Satyam Shrestha", "023BSCIT039", "B"],
    40: ["Saujanya Bhattarai", "023BSCIT040", "B"],
    41: ["Sawal Gautam", "023BSCIT041", "B"],
    42: ["Shrabya Dhungana", "023BSCIT042", "B"],
    43: ["Shreya Wagle", "023BSCIT043", "B"],
    44: ["Srijana Adhikari", "023BSCIT044", "B"],
    45: ["Subham Bimali", "023BSCIT045", "B"],
    46: ["Suravi Poudel", "023BSCIT046", "B"],
    47: ["Suvashish Tuladhar", "023BSCIT047", "B"],
    48: ["Swornima Shakya", "023BSCIT048", "B"],
    49: ["Abhigya Rai", "023BSCIT049", "A"],
    50: ["Aadarsha Jha", "023BSCIT050", "A"],
    51: ["Grishma Gurung", "023BSCIT051", "B"],
  },
  sem1: {
    1: ["Aayush Paudel", "023BSCIT001", "A"],
    2: ["Abheet Budhathoki", "023BSCIT002", "A"],
    3: ["Abhishek Barali", "023BSCIT003", "A"],
    4: ["Anjal Rajchal", "023BSCIT004", "A"],
    5: ["Ankit Aryal", "023BSCIT005", "A"],
    6: ["Arun Basnet", "023BSCIT006", "A"],
    7: ["Ashlesa Amatya", "023BSCIT007", "A"],
    8: ["Bijay Raila", "023BSCIT008", "A"],
    9: ["Binesh Bhatta", "023BSCIT009", "A"],
    10: ["Biraj Dahal", "023BSCIT010", "A"],
    11: ["Biraj Shrestha", "023BSCIT011", "A"],
    12: ["Chirag Shahi", "023BSCIT012", "A"],
    13: ["Darpan Basnet", "023BSCIT013", "A"],
    14: ["Eyuzik Chhunju", "023BSCIT014", "A"],
    15: ["Grishmika Adhikari", "023BSCIT015", "A"],
    16: ["Iqra Idrishi", "023BSCIT016", "A"],
    17: ["Jasmine Neupane", "023BSCIT017", "A"],
    18: ["Kamal Chad", "023BSCIT018", "A"],
    19: ["Keshav Bahadur Bk", "023BSCIT019", "A"],
    20: ["Koshish Khadka", "023BSCIT020", "A"],
    21: ["Kripesh Parajuli", "023BSCIT021", "A"],
    22: ["Nidhi Pradhan", "023BSCIT022", "A"],
    23: ["Niraj Thapa", "023BSCIT023", "A"],
    24: ["Prajwal Shrestha", "023BSCIT024", "A"],
    25: ["Praphulla Prakash Pradhananga", "023BSCIT025", "B"],
    26: ["Prasanna Raj Silwal", "023BSCIT026", "B"],
    27: ["Ridham Shrestha", "023BSCIT027", "B"],
    28: ["Riyaj Kuikel", "023BSCIT028", "B"],
    29: ["Rochak Khatiwada", "023BSCIT029", "B"],
    30: ["Roshan Tripathi", "023BSCIT030", "B"],
    31: ["Rupesh Pathak", "023BSCIT031", "B"],
    32: ["Rushal Shrestha", "023BSCIT032", "B"],
    33: ["Sachet Kayastha", "023BSCIT033", "B"],
    34: ["Sajjan Kumar Karn", "023BSCIT034", "B"],
    35: ["Samikshya Osti", "023BSCIT035", "B"],
    36: ["Sandesh Bhandari", "023BSCIT036", "B"],
    37: ["Sandesh Neupane", "023BSCIT037", "B"],
    38: ["Saphal Kumar Khatri", "023BSCIT038", "B"],
    39: ["Satyam Shrestha", "023BSCIT039", "B"],
    40: ["Saujanya Bhattarai", "023BSCIT040", "B"],
    41: ["Sawal Gautam", "023BSCIT041", "B"],
    42: ["Shrabya Dhungana", "023BSCIT042", "B"],
    43: ["Shreya Wagle", "023BSCIT043", "B"],
    44: ["Srijana Adhikari", "023BSCIT044", "B"],
    45: ["Subham Bimali", "023BSCIT045", "B"],
    46: ["Suravi Poudel", "023BSCIT046", "B"],
    47: ["Suvashish Tuladhar", "023BSCIT047", "B"],
    48: ["Swornima Shakya", "023BSCIT048", "B"],
    49: ["Abhigya Rai", "023BSCIT049", "A"],
    50: ["Aadarsha Jha", "023BSCIT050", "A"],
    51: ["Grishma Gurung", "023BSCIT051", "B"],
  },
};

export const opCodes = [
  {
    label: "ACI Data",
    opCode: "CE",
  },
  {
    label: "ADC A",
    opCode: "8F",
  },
  {
    label: "ADC B",
    opCode: "88",
  },
  {
    label: "ADC C",
    opCode: "89",
  },
  {
    label: "ADC D",
    opCode: "8A",
  },
  {
    label: "ADC E",
    opCode: "8B",
  },
  {
    label: "ADC H",
    opCode: "8C",
  },
  {
    label: "ADC L",
    opCode: "8D",
  },
  {
    label: "ADC M",
    opCode: "8E",
  },
  {
    label: "ADD A",
    opCode: "87",
  },
  {
    label: "ADD B",
    opCode: "80",
  },
  {
    label: "ADD C",
    opCode: "81",
  },
  {
    label: "ADD D",
    opCode: "82",
  },
  {
    label: "ADD E",
    opCode: "83",
  },
  {
    label: "ADD H",
    opCode: "84",
  },
  {
    label: "ADD L",
    opCode: "85",
  },
  {
    label: "ADD M",
    opCode: "86",
  },
  {
    label: "ADI Data",
    opCode: "C6",
  },
  {
    label: "ANA A",
    opCode: "A7",
  },
  {
    label: "ANA B",
    opCode: "A0",
  },
  {
    label: "ANA C",
    opCode: "A1",
  },
  {
    label: "ANA D",
    opCode: "A2",
  },
  {
    label: "ANA E",
    opCode: "A3",
  },
  {
    label: "ANA H",
    opCode: "A4",
  },
  {
    label: "ANA L",
    opCode: "A5",
  },
  {
    label: "ANA M",
    opCode: "A6",
  },
  {
    label: "ANI Data",
    opCode: "E6",
  },
  {
    label: "CALL Label",
    opCode: "CD",
  },
  {
    label: "CC Label",
    opCode: "DC",
  },
  {
    label: "CM Label",
    opCode: "FC",
  },
  {
    label: "CMA",
    opCode: "2F",
  },
  {
    label: "CMC",
    opCode: "3F",
  },
  {
    label: "CMP A",
    opCode: "BF",
  },
  {
    label: "CMP B",
    opCode: "B8",
  },
  {
    label: "CMP C",
    opCode: "B9",
  },
  {
    label: "CMP D",
    opCode: "BA",
  },
  {
    label: "CMP E",
    opCode: "BB",
  },
  {
    label: "CMP H",
    opCode: "BC",
  },
  {
    label: "CMP L",
    opCode: "BD",
  },
  {
    label: "CMP M",
    opCode: "BE",
  },
  {
    label: "CNC Label",
    opCode: "D4",
  },
  {
    label: "CNZ Label",
    opCode: "C4",
  },
  {
    label: "CP Label",
    opCode: "F4",
  },
  {
    label: "CPE Label",
    opCode: "EC",
  },
  {
    label: "CPI Data",
    opCode: "FE",
  },
  {
    label: "CPO Label",
    opCode: "E4",
  },
  {
    label: "CZ Label",
    opCode: "CC",
  },
  {
    label: "DAA",
    opCode: "27",
  },
  {
    label: "DAD B",
    opCode: "09",
  },
  {
    label: "DAD D",
    opCode: "19",
  },
  {
    label: "DAD H",
    opCode: "29",
  },
  {
    label: "DAD SP",
    opCode: "39",
  },
  {
    label: "DCR A",
    opCode: "3D",
  },
  {
    label: "DCR B",
    opCode: "05",
  },
  {
    label: "DCR C",
    opCode: "0D",
  },
  {
    label: "DCR D",
    opCode: "15",
  },
  {
    label: "DCR E",
    opCode: "1D",
  },
  {
    label: "DCR H",
    opCode: "25",
  },
  {
    label: "DCR L",
    opCode: "2D",
  },
  {
    label: "DCR M",
    opCode: "35",
  },
  {
    label: "DCX B",
    opCode: "0B",
  },
  {
    label: "DCX D",
    opCode: "1B",
  },
  {
    label: "DCX H",
    opCode: "2B",
  },
  {
    label: "DCX SP",
    opCode: "3B",
  },
  {
    label: "DI",
    opCode: "F3",
  },
  {
    label: "EI",
    opCode: "FB",
  },
  {
    label: "HLT",
    opCode: "EF/76",
  },
  {
    label: "IN Port-address",
    opCode: "DB",
  },
  {
    label: "INR A",
    opCode: "3C",
  },
  {
    label: "INR B",
    opCode: "04",
  },
  {
    label: "INR C",
    opCode: "0C",
  },
  {
    label: "INR D",
    opCode: "14",
  },
  {
    label: "INR E",
    opCode: "1C",
  },
  {
    label: "INR H",
    opCode: "24",
  },
  {
    label: "INR L",
    opCode: "2C",
  },
  {
    label: "INR M",
    opCode: "34",
  },
  {
    label: "INX B",
    opCode: "03",
  },
  {
    label: "INX D",
    opCode: "13",
  },
  {
    label: "INX H",
    opCode: "23",
  },
  {
    label: "INX SP",
    opCode: "33",
  },
  {
    label: "JC Label",
    opCode: "DA",
  },
  {
    label: "JM Label",
    opCode: "FA",
  },
  {
    label: "JMP Label",
    opCode: "C3",
  },
  {
    label: "JNC Label",
    opCode: "D2",
  },
  {
    label: "JNZ Label",
    opCode: "C2",
  },
  {
    label: "JP Label",
    opCode: "F2",
  },
  {
    label: "JPE Label",
    opCode: "EA",
  },
  {
    label: "JPO Label",
    opCode: "E2",
  },
  {
    label: "JZ Label",
    opCode: "CA",
  },
  {
    label: "LDA Address",
    opCode: "3A",
  },
  {
    label: "LDAX B",
    opCode: "0A",
  },
  {
    label: "LDAX D",
    opCode: "1A",
  },
  {
    label: "LHLD Address",
    opCode: "2A",
  },
  {
    label: "LXI B",
    opCode: "01",
  },
  {
    label: "LXI D",
    opCode: "11",
  },
  {
    label: "LXI H",
    opCode: "21",
  },
  {
    label: "LXI SP",
    opCode: "31",
  },
  {
    label: "MOV A, A",
    opCode: "7F",
  },
  {
    label: "MOV A, B",
    opCode: "78",
  },
  {
    label: "MOV A, C",
    opCode: "79",
  },
  {
    label: "MOV A, D",
    opCode: "7A",
  },
  {
    label: "MOV A, E",
    opCode: "7B",
  },
  {
    label: "MOV A, H",
    opCode: "7C",
  },
  {
    label: "MOV A, L",
    opCode: "7D",
  },
  {
    label: "MOV A, M",
    opCode: "7E",
  },
  {
    label: "MOV B, A",
    opCode: "47",
  },
  {
    label: "MOV B, B",
    opCode: "40",
  },
  {
    label: "MOV B, C",
    opCode: "41",
  },
  {
    label: "MOV B, D",
    opCode: "42",
  },
  {
    label: "MOV B, E",
    opCode: "43",
  },
  {
    label: "MOV B, H",
    opCode: "44",
  },
  {
    label: "MOV B, L",
    opCode: "45",
  },
  {
    label: "MOV B, M",
    opCode: "46",
  },
  {
    label: "MOV C, A",
    opCode: "4F",
  },
  {
    label: "MOV C, B",
    opCode: "48",
  },
  {
    label: "MOV C, C",
    opCode: "49",
  },
  {
    label: "MOV C, D",
    opCode: "4A",
  },
  {
    label: "MOV C, E",
    opCode: "4B",
  },
  {
    label: "MOV C, H",
    opCode: "4C",
  },
  {
    label: "MOV C, L",
    opCode: "4D",
  },
  {
    label: "MOV C, M",
    opCode: "4E",
  },
  {
    label: "MOV D, A",
    opCode: "57",
  },
  {
    label: "MOV D, B",
    opCode: "50",
  },
  {
    label: "MOV D, C",
    opCode: "51",
  },
  {
    label: "MOV D, D",
    opCode: "52",
  },
  {
    label: "MOV D, E",
    opCode: "53",
  },
  {
    label: "MOV D, H",
    opCode: "54",
  },
  {
    label: "MOV D, L",
    opCode: "55",
  },
  {
    label: "MOV D, M",
    opCode: "56",
  },
  {
    label: "MOV E, A",
    opCode: "5F",
  },
  {
    label: "MOV E, B",
    opCode: "58",
  },
  {
    label: "MOV E, C",
    opCode: "59",
  },
  {
    label: "MOV E, D",
    opCode: "5A",
  },
  {
    label: "MOV E, E",
    opCode: "5B",
  },
  {
    label: "MOV E, H",
    opCode: "5C",
  },
  {
    label: "MOV E, L",
    opCode: "5D",
  },
  {
    label: "MOV E, M",
    opCode: "5E",
  },
  {
    label: "MOV H, A",
    opCode: "67",
  },
  {
    label: "MOV H, B",
    opCode: "60",
  },
  {
    label: "MOV H, C",
    opCode: "61",
  },
  {
    label: "MOV H, D",
    opCode: "62",
  },
  {
    label: "MOV H, E",
    opCode: "63",
  },
  {
    label: "MOV H, H",
    opCode: "64",
  },
  {
    label: "MOV H, L",
    opCode: "65",
  },
  {
    label: "MOV H, M",
    opCode: "66",
  },
  {
    label: "MOV L, A",
    opCode: "6F",
  },
  {
    label: "MOV L, B",
    opCode: "68",
  },
  {
    label: "MOV L, C",
    opCode: "69",
  },
  {
    label: "MOV L, D",
    opCode: "6A",
  },
  {
    label: "MOV L, E",
    opCode: "6B",
  },
  {
    label: "MOV L, H",
    opCode: "6C",
  },
  {
    label: "MOV L, L",
    opCode: "6D",
  },
  {
    label: "MOV L, M",
    opCode: "6E",
  },
  {
    label: "MOV M, A",
    opCode: "77",
  },
  {
    label: "MOV M, B",
    opCode: "70",
  },
  {
    label: "MOV M, C",
    opCode: "71",
  },
  {
    label: "MOV M, D",
    opCode: "72",
  },
  {
    label: "MOV M, E",
    opCode: "73",
  },
  {
    label: "MOV M, H",
    opCode: "74",
  },
  {
    label: "MOV M, L",
    opCode: "75",
  },
  {
    label: "MVI A, Data",
    opCode: "3E",
  },
  {
    label: "MVI B, Data",
    opCode: "06",
  },
  {
    label: "MVI C, Data",
    opCode: "0E",
  },
  {
    label: "MVI D, Data",
    opCode: "16",
  },
  {
    label: "MVI E, Data",
    opCode: "1E",
  },
  {
    label: "MVI H, Data",
    opCode: "26",
  },
  {
    label: "MVI L, Data",
    opCode: "2E",
  },
  {
    label: "MVI M, Data",
    opCode: "36",
  },
  {
    label: "NOP",
    opCode: "00",
  },
  {
    label: "ORA A",
    opCode: "B7",
  },
  {
    label: "ORA B",
    opCode: "B0",
  },
  {
    label: "ORA C",
    opCode: "B1",
  },
  {
    label: "ORA D",
    opCode: "B2",
  },
  {
    label: "ORA E",
    opCode: "B3",
  },
  {
    label: "ORA H",
    opCode: "B4",
  },
  {
    label: "ORA L",
    opCode: "B5",
  },
  {
    label: "ORA M",
    opCode: "B6",
  },
  {
    label: "ORI Data",
    opCode: "F6",
  },
  {
    label: "OUT Port-Address",
    opCode: "D3",
  },
  {
    label: "PCHL",
    opCode: "E9",
  },
  {
    label: "POP B",
    opCode: "C1",
  },
  {
    label: "POP D",
    opCode: "D1",
  },
  {
    label: "POP H",
    opCode: "E1",
  },
  {
    label: "POP PSW",
    opCode: "F1",
  },
  {
    label: "PUSH B",
    opCode: "C5",
  },
  {
    label: "PUSH D",
    opCode: "D5",
  },
  {
    label: "PUSH H",
    opCode: "E5",
  },
  {
    label: "PUSH PSW",
    opCode: "F5",
  },
  {
    label: "RAL",
    opCode: "17",
  },
  {
    label: "RAR",
    opCode: "1F",
  },
  {
    label: "RC",
    opCode: "D8",
  },
  {
    label: "RET",
    opCode: "C9",
  },
  {
    label: "RIM",
    opCode: "20",
  },
  {
    label: "RLC",
    opCode: "07",
  },
  {
    label: "RM",
    opCode: "F8",
  },
  {
    label: "RNC",
    opCode: "D0",
  },
  {
    label: "RNZ",
    opCode: "C0",
  },
  {
    label: "RP",
    opCode: "F0",
  },
  {
    label: "RPE",
    opCode: "E8",
  },
  {
    label: "RPO",
    opCode: "E0",
  },
  {
    label: "RRC",
    opCode: "0F",
  },
  {
    label: "RST 0",
    opCode: "C7",
  },
  {
    label: "RST 1",
    opCode: "CF",
  },
  {
    label: "RST 2",
    opCode: "D7",
  },
  {
    label: "RST 3",
    opCode: "DF",
  },
  {
    label: "RST 4",
    opCode: "E7",
  },
  {
    label: "RST 5",
    opCode: "EF",
  },
  {
    label: "RST 6",
    opCode: "F7",
  },
  {
    label: "RST 7",
    opCode: "FF",
  },
  {
    label: "RZ",
    opCode: "C8",
  },
  {
    label: "SBB A",
    opCode: "9F",
  },
  {
    label: "SBB B",
    opCode: "98",
  },
  {
    label: "SBB C",
    opCode: "99",
  },
  {
    label: "SBB D",
    opCode: "9A",
  },
  {
    label: "SBB E",
    opCode: "9B",
  },
  {
    label: "SBB H",
    opCode: "9C",
  },
  {
    label: "SBB L",
    opCode: "9D",
  },
  {
    label: "SBB M",
    opCode: "9E",
  },
  {
    label: "SBI Data",
    opCode: "DE",
  },
  {
    label: "SHLD Address",
    opCode: "22",
  },
  {
    label: "SIM",
    opCode: "30",
  },
  {
    label: "SPHL",
    opCode: "F9",
  },
  {
    label: "STA Address",
    opCode: "32",
  },
  {
    label: "STAX B",
    opCode: "02",
  },
  {
    label: "STAX D",
    opCode: "12",
  },
  {
    label: "STC",
    opCode: "37",
  },
  {
    label: "SUB A",
    opCode: "97",
  },
  {
    label: "SUB B",
    opCode: "90",
  },
  {
    label: "SUB C",
    opCode: "91",
  },
  {
    label: "SUB D",
    opCode: "92",
  },
  {
    label: "SUB E",
    opCode: "93",
  },
  {
    label: "SUB H",
    opCode: "94",
  },
  {
    label: "SUB L",
    opCode: "95",
  },
  {
    label: "SUB M",
    opCode: "96",
  },
  {
    label: "SUI Data",
    opCode: "D6",
  },
  {
    label: "XCHG",
    opCode: "EB",
  },
  {
    label: "XRA A",
    opCode: "AF",
  },
  {
    label: "XRA B",
    opCode: "A8",
  },
  {
    label: "XRA C",
    opCode: "A9",
  },
  {
    label: "XRA D",
    opCode: "AA",
  },
  {
    label: "XRA E",
    opCode: "AB",
  },
  {
    label: "XRA H",
    opCode: "AC",
  },
  {
    label: "XRA L",
    opCode: "AD",
  },
  {
    label: "XRA M",
    opCode: "AE",
  },
  {
    label: "XRI Data",
    opCode: "EE",
  },
  {
    label: "XTHL",
    opCode: "E3",
  },
];

export const cnAssignments = [
  {
    number: 1,
    name: "Familiarizing with DOS Commands for Networking",
  },
  {
    number: 2,
    name: "Clamping RJ45 Connector to CAT5e UTP Cable",
  },
  {
    number: 3,
    name: "Creating various LAN topologies using Cisco Packet Tracer",
  },
  {
    number: 4,
    name: "Implementation of DHCP server",
  },
  {
    number: 5,
    name: "Static Routing Implementation",
  },

  {
    number: 6,
    name: "Dynamic Routing Implementation using RIP",
  },
  {
    number: 7,
    name: "Setting up VLAN",
  },
  {
    number: 8,
    name: "Setting up Email Server",
  },
  {
    number: 9,
    name: "Setting up DNS Server",
    selected: true,
  },
];

export const dbmsAssignments = [
  {
    number: 1,
    name: "To familiarize with Structured Query Language DDL statements and Data Types",
  },
  {
    number: 2,
    name: "To learn about Data Manipulation Language",
  },
  {
    number: 3,
    name: "To learn about Data Manipulation Language",
  },
  {
    number: 4,
    name: "To familiarize with BETWEEN operator, SQL Wildcard (LIKE operator), GROUP BY, HAVING clause to group results",
  },
  {
    number: 5,
    name: "To understand about JOIN operation and nested queries",
    selected: true,
  },
];

export const tocAssignments = [
  {
    number: 1,
    name: "To validate the strings using C/C++ programming",
  },
  {
    number: 2,
    name: "To implement DFA over {a, b} that identifies all the strings having sub string 'aa'",
  },
  {
    number: 3,
    name: "To implement DFA Over {0, 1} that identifies all strings having 0's with multiple of 3",
  },
  {
    number: 4,
    name: "To implement NFA Over {0, 1} having two consecutive 0's or 1's.",
  },
  {
    number: 5,
    name: 'To implement Moore Machine which counts the occurrence of sub string "aab"',
  },
  {
    number: 6,
    name: "To implement Mealy Machine which works as a binary incrementer",
  },
  {
    number: 7,
    name: "To implement a program that identifies C-identifiers",
  },
  {
    number: 8,
    name: "To implement a program that identifies C-keyword",
  },
  {
    number: 9,
    name: "To implement a program that identifies valid MAC address",
  },
  {
    number: 10,
    name: "To implement a program that identifies valid Gmail address",
  },
  {
    number: 11,
    name: "To implement a R.E. that identifies the structure of the input: ab*b+aa*b over {a, b}",
  },
  {
    number: 12,
    name: "To implement PDA {a, b} having equal no. of a's and b's",
  },
  {
    number: 13,
    name: "To implement TM over {a, b} that recognizes string of languages L = {a^n b^n c^n | n >= 1}",
    selected: true,
  },
];

export const nmAssignments = [
  {
    number: 1,
    name: "Solution of Nonlinear Equation",
  },
  {
    number: 2,
    name: "Interpolation and Regression",
  },
  {
    number: 3,
    name: "Differentiation and Integration",
  },
  {
    number: 4,
    name: "Solution of Linear Equations",
  },
  {
    number: 5,
    name: "Solution of Ordinary Differential Equation",
  },
  {
    number: 6,
    name: "Solution of Partial Differential Equation",
    selected: true,
  },
];

export const dsaAssignments = [
  {
    number: 1,
    name: "Stack Operations",
  },
  {
    number: 2,
    name: "Infix to Postfix Conversion Using Stack",
  },
  {
    number: 3,
    name: "Queue Operations",
  },
  {
    number: 4,
    name: "Circular Queue Operations",
  },
  {
    number: 5,
    name: "Linked List Insertion Operations",
  },
  {
    number: 6,
    name: "Linked List Deletion, Search and Display Operations",
  },
  {
    number: 7,
    name: "Doubly Linked List Operations",
  },
  {
    number: 8,
    name: "Circular Doubly Linked List Operations",
  },
  {
    number: 9,
    name: "Bubble Sort, Insertion Sort, Quick Sort and Merge Sort",
    selected: true,
  },
];

export const caAssignments = [
  {
    number: 1,
    name: "Familiarization with VHDL programming",
  },
  {
    number: 2,
    name: "Design Half Adder and 2x4 Decoder using VHDL",
  },
  {
    number: 3,
    name: "Design Circuit using Data Flow style and Behavioral style",
  },
  {
    number: 4,
    name: "Computer Arithmetic",
    selected: true,
  },
];

export const dsAssignments = [
  {
    number: 1,
    name: "Implementing Set Operations",
  },
  {
    number: 2,
    name: "Implementing Fuzzy Set Operations",
  },
  {
    number: 3,
    name: "Finding Cartesian Product of Multiple Sets",
  },
  {
    number: 4,
    name: "Implementing Encryption/Decryption of Alphabets",
  },
  {
    number: 5,
    name: "Implementing Extended Euclidean Algorithm",
  },
  {
    number: 6,
    name: "Implementing Integer Arithmetic",
  },
  {
    number: 7,
    name: "Implementing Prime Number Checking",
  },
  {
    number: 8,
    name: "Random Integer Generation from a Range",
  },
  {
    number: 9,
    name: "Implementing Boolean Matrix Operations",
  },
  {
    number: 10,
    name: "Truth Table Generation",
  },
  {
    number: 11,
    name: "Program for checking equivalence of two logical expressions",
  },
  {
    number: 12,
    name: "Implementing recursive algorithm for Euclidean and extended Euclidean algorithm",
  },
  {
    number: 13,
    name: "Recursive program for generating n Fibonacci numbers",
  },
  {
    number: 14,
    name: "Recursive program for Tower of Hanoi problem",
  },
  {
    number: 15,
    name: "Program for generating permutations",
  },
  {
    number: 16,
    name: "Program for generating combinations",
  },
  {
    number: 17,
    name: "Program for DFS graph traversal",
  },
  {
    number: 18,
    name: "Program for BFS graph traversal",
  },
  {
    number: 19,
    name: "Program for Prim's MST",
  },
  {
    number: 20,
    name: "Program for Kruskal's MST",
  },
  {
    number: 21,
    name: "Program for Dijkstra's shortest path algorithm",
    selected: true,
  },
];

export const oopAssignments = [
  {
    number: 1,
    name: "To familiarize with C++ Program Structure and C++ Operators",
  },
  {
    number: 2,
    name: "To understand and implement the concept of Function Overloading, Pass by Reference and Default Argument",
  },
  {
    number: 3,
    name: "To understand concepts of Pointer, Dynamic Memory Allocation",
  },
  {
    number: 4,
    name: "To understand the concepts of Classes and Objects",
  },
  {
    number: 5,
    name: "To understand the concept of Inheritance",
  },
  {
    number: 6,
    name: "To understand the concept of Operator Overloading",
  },
  {
    number: 7,
    name: "To understand the concepts of Virtual Function and Polymorphism",
  },
  {
    number: 8,
    name: "To understand the concept of Template, Exception Handling and File Handling",
    selected: true,
  },
];

export const dlAssignments = [
  {
    group: "0",
    number: 1,
    name: "To verify the operations of Basic Gates",
  },
  {
    group: "0",
    number: 2,
    name: "To verify the operations of Derived Gates",
  },
  {
    group: "0",
    number: 3,
    name: "To verify the operation of 3 input AND and OR gates using Multiple Gates",
  },
  {
    group: "0",
    number: 4,
    name: "To verify the universality of NAND Gate and NOR Gate",
  },
  {
    group: "0",
    number: 5,
    name: "To verify 2 and 3 variable De-Morgan's law",
  },
  {
    group: "0",
    number: 6,
    name: "To verify the Laws of Boolean Algebra",
  },
  {
    group: "0",
    number: 7,
    name: "To verify the steps for Combinational Logic Design",
  },
  {
    group: "1",
    number: 8,
    name: `To verify the operations for Half Adder circuit.
To verify the operations for Full Adder circuit.
To construct a Full Adder using 2 Half Adders and verify the operations.`,
  },
  {
    group: "1",
    number: 9,
    name: `To verify the operations for Half Subtractor circuit.
To verify the operations for Full Subtractor circuit.`,
  },
  {
    group: "2",
    number: 10,
    name: `To verify the operation of 2x4 decoder.
To verify the operation of 3x8 decoder.
To verify the operation of 4x16 decoder.`,
  },
  {
    group: "3",
    number: 11,
    name: `To design BCD to Excess 3 code converter.`,
  },
  {
    group: "3",
    number: 12,
    name: `To design 3-bit parity generator.
To design 4-bit parity checker.`,
  },
  {
    group: "4",
    number: 13,
    name: `To verify the operation of BCD to decimal decoder.`,
  },
  {
    group: "4",
    number: 14,
    name: `To construct a full adder using required decoders.
To construct a full subtractor using required decoders.`,
  },
  {
    group: "5",
    number: 15,
    name: `To verify the operation of 2x1 Encoder.
To verify the operation of 4x2 Encoder.
To verify the operation of 8x3 Encoder.
To verify the operation of 16x4 Encoder.`,
  },
  {
    group: "5",
    number: 16,
    name: `To construct 4x1 multiplexer.
To construct 8x1 multiplexer using smaller blocks.
To construct 16x1 multiplexer using smaller blocks.`,
  },
  {
    group: "5",
    number: 17,
    name: `To construct 1x4 demultiplexer.
To construct 1x8 demultiplexer using smaller blocks.
To construct 1x16 demultiplexer using smaller blocks.`,
  },
  {
    group: "6",
    number: 18,
    name: `To construct a 2-bit asynchronous counter.
To construct a 4-bit asynchronous counter.`,
    selected: true,
  },
  {
    group: "6",
    number: 19,
    name: `To construct a BCD asynchronous counter.`,
  },
  {
    group: "6",
    number: 20,
    name: `To construct a 2-bit synchronous counter.
To construct a 4-bit synchronous counter.`,
  },
  {
    group: "6",
    number: 21,
    name: `To construct a BCD synchronous counter.`,
  },
  {
    group: "6",
    number: 22,
    name: `To construct Serial In Serial Out Shift Register.
To construct Serial In Parallel Out Shift Register.
To construct Parallel In Serial Out Shift Register.
To construct Parallel In Parallel Out Shift Register.`,
  },
];

export const fitAssignments = [
  {
    number: 1,
    name: "VLookup and Mail Merge",
  },
  {
    number: 5,
    name: "Computer Network",
  },
  {
    number: 7,
    name: "Computer Software",
    selected: true,
  },
];
