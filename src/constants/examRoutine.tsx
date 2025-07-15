import { examTypes } from ".";
import { subjects } from "./subjects";

export const examRoutine = {
  sem7: {
    [examTypes.mid]: [
      {
        day: "Tue",
        subject: subjects.sem7.Java,
        date: "2025/06/24",
        friendlyDate: (
          <>
            24<sup>th</sup> June
            <br />
            10<sup>th</sup> Ashad
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem7.DWDM,
        date: "2025/06/25",
        friendlyDate: (
          <>
            25<sup>th</sup> June
            <br />
            11<sup>th</sup> Ashad
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem7.PoM,
        date: "2025/06/26",
        friendlyDate: (
          <>
            26<sup>th</sup> June
            <br />
            12<sup>th</sup> Ashad
          </>
        ),
      },
      {
        day: "Fri",
        subject: [subjects.sem7.IR, subjects.sem7.SPM],
        date: "2025/06/27",
        friendlyDate: (
          <>
            27<sup>th</sup> June
            <br />
            13<sup>th</sup> Ashad
          </>
        ),
      },
    ],
    [examTypes.pre]: [],
    [examTypes.board]: [
      {
        day: "Tue",
        subject: subjects.sem7.Java,
        date: "2025/08/12",
        friendlyDate: (
          <>
            12<sup>th</sup> August
            <br />
            27<sup>th</sup> Shrawan
          </>
        ),
        // source: "https://iost.tu.edu.np/notices/6370",
        // sourceName: "TU Notice",
      },
      {
        day: "Fri",
        subject: subjects.sem7.DWDM,
        date: "2025/08/15",
        friendlyDate: (
          <>
            15<sup>th</sup> August
            <br />
            30<sup>th</sup> Shrawan
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem7.PoM,
        date: "2025/08/19",
        friendlyDate: (
          <>
            19<sup>th</sup> August
            <br />3<sup>rd</sup> Bhadra
          </>
        ),
      },
      {
        day: "Fri",
        subject: [subjects.sem7.IR, subjects.sem7.SPM],
        date: "2025/08/22",
        friendlyDate: (
          <>
            22<sup>nd</sup> August
            <br />6<sup>th</sup> Bhadra
          </>
        ),
      },
    ],
    [examTypes.prac]: [],
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
    [examTypes.pre]: [
      {
        day: "Thu",
        subject: subjects.sem6.Compiler,
        date: "2025/02/27",
        friendlyDate: (
          <>
            27<sup>th</sup> February
            <br />
            15<sup>th</sup> Falgun
          </>
        ),
      },
      {
        day: "Sun",
        subject: subjects.sem6.NCC,
        date: "2025/03/02",
        friendlyDate: (
          <>
            2<sup>nd</sup> March
            <br />
            18<sup>th</sup> Falgun
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem6.EGov,
        date: "2025/03/03",
        friendlyDate: (
          <>
            3<sup>rd</sup> March
            <br />
            19<sup>th</sup> Falgun
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem6.SE,
        date: "2025/03/04",
        friendlyDate: (
          <>
            4<sup>th</sup> March
            <br />
            20<sup>th</sup> Falgun
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem6.TW,
        date: "2025/03/05",
        friendlyDate: (
          <>
            5<sup>th</sup> March
            <br />
            21<sup>st</sup> Falgun
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem6.ECom,
        date: "2025/03/06",
        friendlyDate: (
          <>
            6<sup>th</sup> March
            <br />
            22<sup>nd</sup> Falgun
          </>
        ),
      },
    ],
    [examTypes.board]: [
      {
        day: "Fri",
        subject: subjects.sem6.SE,
        date: "2025/03/21",
        friendlyDate: (
          <>
            21<sup>st</sup> March
            <br />8<sup>th</sup> Chaitra
          </>
        ),
        source: "https://iost.tu.edu.np/notices/6370",
        sourceName: "TU Notice",
      },
      {
        day: "Tue",
        subject: subjects.sem6.Compiler,
        date: "2025/03/25",
        friendlyDate: (
          <>
            25<sup>th</sup> March
            <br />
            12<sup>th</sup> Chaitra
          </>
        ),
      },
      {
        day: "Fri",
        subject: subjects.sem6.EGov,
        date: "2025/03/28",
        friendlyDate: (
          <>
            28<sup>th</sup> March
            <br />
            15<sup>th</sup> Chaitra
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem6.NCC,
        date: "2025/03/31",
        friendlyDate: (
          <>
            31<sup>st</sup> March
            <br />
            18<sup>th</sup> Chaitra
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem6.TW,
        date: "2025/04/03",
        friendlyDate: (
          <>
            3<sup>rd</sup> April
            <br />
            21<sup>st</sup> Chaitra
          </>
        ),
      },
      {
        day: "Sun",
        subject: subjects.sem6.ECom,
        date: "2025/04/06",
        friendlyDate: (
          <>
            6<sup>th</sup> April
            <br />
            24<sup>th</sup> Chaitra
          </>
        ),
      },
    ],
    [examTypes.prac]: [
      {
        day: "Wed",
        subject: subjects.sem6.SE,
        time: "8:30 AM",
        date: "2025/05/14",
        friendlyDate: (
          <>
            14<sup>th</sup> May
            <br />
            31<sup>st</sup> Baisakh
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem6.Compiler,
        time: "7:30 AM",
        date: "2025/05/15",
        friendlyDate: (
          <>
            15<sup>th</sup> May
            <br />1<sup>st</sup> Jestha
          </>
        ),
      },
      {
        day: "Fri",
        time: "6:30 AM",
        date: "2025/05/16",
        subject: subjects.sem6.ECom,
        friendlyDate: (
          <>
            16<sup>th</sup> May
            <br />2<sup>nd</sup> Jestha
          </>
        ),
      },
      {
        day: "Sun",
        date: "2025/05/18",
        time: "7:00 AM",
        subject: subjects.sem6.NCC,
        friendlyDate: (
          <>
            18<sup>th</sup> May
            <br />4<sup>th</sup> Jestha
          </>
        ),
      },
      {
        day: "Mon",
        time: "7:00 AM",
        date: "2025/05/19",
        subject: subjects.sem6.EGov,
        friendlyDate: (
          <>
            19<sup>th</sup> May
            <br />5<sup>th</sup> Jestha
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
    [examTypes.mid]: [
      {
        day: "Sun",
        subject: subjects.sem2.DS,
        date: "2025/06/29",
        friendlyDate: (
          <>
            29<sup>th</sup> June
            <br />
            15<sup>th</sup> Ashad
          </>
        ),
      },
      {
        day: "Mon",
        subject: subjects.sem2.OOP,
        date: "2025/06/30",
        friendlyDate: (
          <>
            30<sup>th</sup> June
            <br />
            16<sup>th</sup> Ashad
          </>
        ),
      },
      {
        day: "Tue",
        subject: subjects.sem2.MP,
        date: "2025/07/01",
        friendlyDate: (
          <>
            1<sup>st</sup> July
            <br />
            17<sup>th</sup> Ashad
          </>
        ),
      },
      {
        day: "Wed",
        subject: subjects.sem2.Maths2,
        date: "2025/07/02",
        friendlyDate: (
          <>
            2<sup>nd</sup> July
            <br />
            18<sup>th</sup> Ashad
          </>
        ),
      },
      {
        day: "Thu",
        subject: subjects.sem2.Stats1,
        date: "2025/07/03",
        friendlyDate: (
          <>
            3<sup>rd</sup> July
            <br />
            19<sup>th</sup> Ashad
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
  sem1: {},
};
