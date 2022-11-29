const constants = {
  dlAssignments: [
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
  ],
  fitAssignments: [
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
  ],
  dsAssignments: [
    {
      number: 1,
      name: "Implementing Set Operations",
      selected: true,
    },
  ],
  names: {
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
  },
};

export default constants;
