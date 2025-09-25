import { subjects } from "./subjects";

export const classRoutine = {
  sem8: [
    {
      day: "Sun",
      a: [
        [subjects.sem8.ADB, ""],
        [subjects.sem8.IBM, ""],
      ],
      b: [
        [subjects.sem8.ADB, ""],
        [subjects.sem8.IBM, ""],
      ],
    },
    {
      day: "Mon",
      a: [
        [subjects.sem8.ADB, ""],
        [subjects.sem8.CC, ""],
      ],
      b: [
        [subjects.sem8.ADB, ""],
        [subjects.sem8.CC, ""],
      ],
    },
    {
      day: "Tue",
      a: [
        [subjects.sem8.IBM, ""],
        [subjects.sem8.DN, ""],
      ],
      b: [
        [subjects.sem8.IBM, ""],
        [subjects.sem8.DN, ""],
      ],
    },
    {
      day: "Wed",
      a: [
        [subjects.sem8.ADB, ""],
        [subjects.sem8.CC, ""],
      ],
      b: [
        [subjects.sem8.ADB, ""],
        [subjects.sem8.CC, ""],
      ],
    },
    {
      day: "Thu",
      a: [
        [subjects.sem8.DN, ""],
        [subjects.sem8.CC, ""],
      ],
      b: [
        [subjects.sem8.DN, ""],
        [subjects.sem8.CC, ""],
      ],
    },
    {
      day: "Fri",
      a: [
        // [subjects.sem8.DN, ""],
        [subjects.sem8.IBM, ""],
      ],
      b: [
        // [subjects.sem8.DN, ""],
        [subjects.sem8.IBM, ""],
      ],
    },
  ],
  sem7: [
    {
      day: "Sun",
      a: [
        [subjects.sem7.DWDM, "315"],
        [subjects.sem7.PoM, "315"],
      ],
      b: [
        [subjects.sem7.PoM, "321"],
        [subjects.sem7.Java, "PTA Lab"],
      ],
    },
    {
      day: "Mon",
      a: [
        [subjects.sem7.DWDM, "Lab C"],
        [subjects.sem7.PoM, "315"],
      ],
      b: [
        [subjects.sem7.PoM, "321"],
        [subjects.sem7.Java, "PTA Lab"],
      ],
    },
    //    {
    //   day: "Tue",
    //   a: [
    //     [subjects.sem7.Java, "PTA Lab"],
    //     [subjects.sem7.PoM, "315"],
    //   ],
    //   b: [
    //     [subjects.sem7.Java, "PTA Lab"],
    //     [subjects.sem7.PoM, "321"],
    //   ],
    // },
    {
      day: "Tue",
      a: [
        [subjects.sem7.Java, "PTA Lab"],
        [subjects.sem7.PoM, "PTA Lab"],
      ],
      b: [
        [subjects.sem7.Java, "PTA Lab"],
        [subjects.sem7.PoM, "PTA Lab"],
      ],
    },
    {
      day: "Wed",
      a: [
        [
          [subjects.sem7.SPM, "lab E"],
          [subjects.sem7.IR, "Lab C"],
        ],
        [subjects.sem7.Java, "PTA Lab"],
      ],
      b: [
        [
          [subjects.sem7.SPM, "lab E"],
          [subjects.sem7.IR, "Lab C"],
        ],
        [subjects.sem7.DWDM, "321"],
      ],
    },
    {
      day: "Thu",
      a: [
        [
          [subjects.sem7.SPM, "321"],
          [subjects.sem7.IR, "315"],
        ],
        [subjects.sem7.Java, "PTA Lab"],
      ],
      b: [
        [
          [subjects.sem7.SPM, "321"],
          [subjects.sem7.IR, "315"],
        ],
        [subjects.sem7.DWDM, "321"],
      ],
    },
    {
      day: "Fri",
      a: [
        [
          [subjects.sem7.SPM, "321"],
          [subjects.sem7.IR, "315"],
        ],
        [subjects.sem7.Java, "PTA Lab"],
      ],
      b: [
        [
          [subjects.sem7.SPM, "321"],
          [subjects.sem7.IR, "315"],
        ],
        [subjects.sem7.DWDM, "Lab C"],
      ],
    },
  ],
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
        [subjects.sem4.AI, ""],
        [subjects.sem4.OS, ""],
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
      day: "Mon",
      a: [
        [subjects.sem4.TOC, ""],
        [subjects.sem4.DBMS, ""],
        ["*", ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem4.DBMS, ""],
        [subjects.sem4.CN, ""],
        [subjects.sem4.OS, ""],
        ["*", ""],
      ],
    },
    {
      day: "Tue",
      a: [
        [subjects.sem4.TOC, ""],
        [subjects.sem4.AI, ""],
        [subjects.sem4.CN, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem4.AI, ""],
        [subjects.sem4.OS, ""],
        ["*", ""],
        ["*", ""],
      ],
    },
    {
      day: "Wed",
      a: [
        [subjects.sem4.TOC, ""],
        [subjects.sem4.DBMS, ""],
        [subjects.sem4.OS, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem4.CN, ""],
        [subjects.sem4.TOC, ""],
        ["*", ""],
        ["*", ""],
      ],
    },
    {
      day: "Thu",
      a: [
        [subjects.sem4.CN, ""],
        [subjects.sem4.AI, ""],
        [subjects.sem4.OS, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem4.AI, ""],
        [subjects.sem4.DBMS, ""],
        [subjects.sem4.TOC, ""],
        ["*", ""],
      ],
    },
    {
      day: "Fri",
      a: [
        [subjects.sem4.CN, ""],
        [subjects.sem4.DBMS, ""],
        ["*", ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem4.DBMS, ""],
        [subjects.sem4.TOC, ""],
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
        [subjects.sem2.MP, ""],
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.DS, ""],
      ],
      b: [
        [subjects.sem2.DS, ""],
        [subjects.sem2.OOP, ""],
        [subjects.sem2.Stats1, ""],
      ],
    },
    {
      day: "Mon",
      a: [
        [subjects.sem2.MP, ""],
        [subjects.sem2.DS, ""],
        [subjects.sem2.OOP, ""],
      ],
      b: [
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.Stats1, ""],
        [subjects.sem2.DS, ""],
      ],
    },
    {
      day: "Tue",
      a: [
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.Stats1, ""],
        [subjects.sem2.OOP, ""],
      ],
      b: [
        [subjects.sem2.OOP, ""],
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.DS, ""],
      ],
    },
    {
      day: "Wed",
      a: [
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.Stats1, ""],
        [subjects.sem2.MP, ""],
      ],
      b: [
        [subjects.sem2.Maths2, ""],
        [subjects.sem2.MP, ""],
        [subjects.sem2.OOP, ""],
      ],
    },
    {
      day: "Thu",
      a: [
        [subjects.sem2.Stats1, ""],
        [subjects.sem2.DS, ""],
        [subjects.sem2.Maths2, ""],
      ],
      b: [
        [subjects.sem2.DS, ""],
        [subjects.sem2.MP, ""],
        [subjects.sem2.Stats1, ""],
      ],
    },
    {
      day: "Fri",
      a: [
        [subjects.sem2.DS, ""],
        [subjects.sem2.OOP, ""],
        ["*", ""],
      ],
      b: [
        [subjects.sem2.MP, ""],
        [subjects.sem2.Maths2, ""],
        ["*", ""],
      ],
    },
  ],
};
