const opcodes = [
  {
    instruction: "ACI Data",
    opcode: "CE",
  },
  {
    instruction: "ADC A",
    opcode: "8F",
  },
  {
    instruction: "ADC B",
    opcode: "88",
  },
  {
    instruction: "ADC C",
    opcode: "89",
  },
  {
    instruction: "ADC D",
    opcode: "8A",
  },
  {
    instruction: "ADC E",
    opcode: "8B",
  },
  {
    instruction: "ADC H",
    opcode: "8C",
  },
  {
    instruction: "ADC L",
    opcode: "8D",
  },
  {
    instruction: "ADC M",
    opcode: "8E",
  },
  {
    instruction: "ADD A",
    opcode: "87",
  },
  {
    instruction: "ADD B",
    opcode: "80",
  },
  {
    instruction: "ADD C",
    opcode: "81",
  },
  {
    instruction: "ADD D",
    opcode: "82",
  },
  {
    instruction: "ADD E",
    opcode: "83",
  },
  {
    instruction: "ADD H",
    opcode: "84",
  },
  {
    instruction: "ADD L",
    opcode: "85",
  },
  {
    instruction: "ADD M",
    opcode: "86",
  },
  {
    instruction: "ADI Data",
    opcode: "C6",
  },
  {
    instruction: "ANA A",
    opcode: "A7",
  },
  {
    instruction: "ANA B",
    opcode: "A0",
  },
  {
    instruction: "ANA C",
    opcode: "A1",
  },
  {
    instruction: "ANA D",
    opcode: "A2",
  },
  {
    instruction: "ANA E",
    opcode: "A3",
  },
  {
    instruction: "ANA H",
    opcode: "A4",
  },
  {
    instruction: "ANA L",
    opcode: "A5",
  },
  {
    instruction: "ANA M",
    opcode: "A6",
  },
  {
    instruction: "ANI Data",
    opcode: "E6",
  },
  {
    instruction: "CALL Label",
    opcode: "CD",
  },
  {
    instruction: "CC Label",
    opcode: "DC",
  },
  {
    instruction: "CM Label",
    opcode: "FC",
  },
  {
    instruction: "CMA",
    opcode: "2F",
  },
  {
    instruction: "CMC",
    opcode: "3F",
  },
  {
    instruction: "CMP A",
    opcode: "BF",
  },
  {
    instruction: "CMP B",
    opcode: "B8",
  },
  {
    instruction: "CMP C",
    opcode: "B9",
  },
  {
    instruction: "CMP D",
    opcode: "BA",
  },
  {
    instruction: "CMP E",
    opcode: "BB",
  },
  {
    instruction: "CMP H",
    opcode: "BC",
  },
  {
    instruction: "CMP L",
    opcode: "BD",
  },
  {
    instruction: "CMP M",
    opcode: "BD",
  },
  {
    instruction: "CNC Label",
    opcode: "D4",
  },
  {
    instruction: "CNZ Label",
    opcode: "C4",
  },
  {
    instruction: "CP Label",
    opcode: "F4",
  },
  {
    instruction: "CPE Label",
    opcode: "EC",
  },
  {
    instruction: "CPI Data",
    opcode: "FE",
  },
  {
    instruction: "CPO Label",
    opcode: "E4",
  },
  {
    instruction: "CZ Label",
    opcode: "CC",
  },
  {
    instruction: "DAA",
    opcode: "27",
  },
  {
    instruction: "DAD B",
    opcode: "09",
  },
  {
    instruction: "DAD D",
    opcode: "19",
  },
  {
    instruction: "DAD H",
    opcode: "29",
  },
  {
    instruction: "DAD SP",
    opcode: "39",
  },
  {
    instruction: "DCR A",
    opcode: "3D",
  },
  {
    instruction: "DCR B",
    opcode: "05",
  },
  {
    instruction: "DCR C",
    opcode: "0D",
  },
  {
    instruction: "DCR D",
    opcode: "15",
  },
  {
    instruction: "DCR E",
    opcode: "1D",
  },
  {
    instruction: "DCR H",
    opcode: "25",
  },
  {
    instruction: "DCR L",
    opcode: "2D",
  },
  {
    instruction: "DCR M",
    opcode: "35",
  },
  {
    instruction: "DCX B",
    opcode: "0B",
  },
  {
    instruction: "DCX D",
    opcode: "1B",
  },
  {
    instruction: "DCX H",
    opcode: "2B",
  },
  {
    instruction: "DCX SP",
    opcode: "3B",
  },
  {
    instruction: "DI",
    opcode: "F3",
  },
  {
    instruction: "EI",
    opcode: "FB",
  },
  {
    instruction: "HLT",
    opcode: "76",
  },
  {
    instruction: "IN Port-address",
    opcode: "DB",
  },
  {
    instruction: "INR A",
    opcode: "3C",
  },
  {
    instruction: "INR B",
    opcode: "04",
  },
  {
    instruction: "INR C",
    opcode: "0C",
  },
  {
    instruction: "INR D",
    opcode: "14",
  },
  {
    instruction: "INR E",
    opcode: "1C",
  },
  {
    instruction: "INR H",
    opcode: "24",
  },
  {
    instruction: "INR L",
    opcode: "2C",
  },
  {
    instruction: "INR M",
    opcode: "34",
  },
  {
    instruction: "INX B",
    opcode: "03",
  },
  {
    instruction: "INX D",
    opcode: "13",
  },
  {
    instruction: "INX H",
    opcode: "23",
  },
  {
    instruction: "INX SP",
    opcode: "33",
  },
  {
    instruction: "JC Label",
    opcode: "DA",
  },
  {
    instruction: "JM Label",
    opcode: "FA",
  },
  {
    instruction: "JMP Label",
    opcode: "C3",
  },
  {
    instruction: "JNC Label",
    opcode: "D2",
  },
  {
    instruction: "JNZ Label",
    opcode: "C2",
  },
  {
    instruction: "JP Label",
    opcode: "F2",
  },
  {
    instruction: "JPE Label",
    opcode: "EA",
  },
  {
    instruction: "JPO Label",
    opcode: "E2",
  },
  {
    instruction: "JZ Label",
    opcode: "CA",
  },
  {
    instruction: "LDA Address",
    opcode: "3A",
  },
  {
    instruction: "LDAX B",
    opcode: "0A",
  },
  {
    instruction: "LDAX D",
    opcode: "1A",
  },
  {
    instruction: "LHLD Address",
    opcode: "2A",
  },
  {
    instruction: "LXI B",
    opcode: "01",
  },
  {
    instruction: "LXI D",
    opcode: "11",
  },
  {
    instruction: "LXI H",
    opcode: "21",
  },
  {
    instruction: "LXI SP",
    opcode: "31",
  },
  {
    instruction: "MOV A, A",
    opcode: "7F",
  },
  {
    instruction: "MOV A, B",
    opcode: "78",
  },
  {
    instruction: "MOV A, C",
    opcode: "79",
  },
  {
    instruction: "MOV A, D",
    opcode: "7A",
  },
  {
    instruction: "MOV A, E",
    opcode: "7B",
  },
  {
    instruction: "MOV A, H",
    opcode: "7C",
  },
  {
    instruction: "MOV A, L",
    opcode: "7D",
  },
  {
    instruction: "MOV A, M",
    opcode: "7E",
  },
  {
    instruction: "MOV B, A",
    opcode: "47",
  },
  {
    instruction: "MOV B, B",
    opcode: "40",
  },
  {
    instruction: "MOV B, C",
    opcode: "41",
  },
  {
    instruction: "MOV B, D",
    opcode: "42",
  },
  {
    instruction: "MOV B, E",
    opcode: "43",
  },
  {
    instruction: "MOV B, H",
    opcode: "44",
  },
  {
    instruction: "MOV B, L",
    opcode: "45",
  },
  {
    instruction: "MOV B, M",
    opcode: "46",
  },
  {
    instruction: "MOV C, A",
    opcode: "4F",
  },
  {
    instruction: "MOV C, B",
    opcode: "48",
  },
  {
    instruction: "MOV C, C",
    opcode: "49",
  },
  {
    instruction: "MOV C, D",
    opcode: "4A",
  },
  {
    instruction: "MOV C, E",
    opcode: "4B",
  },
  {
    instruction: "MOV C, H",
    opcode: "4C",
  },
  {
    instruction: "MOV C, L",
    opcode: "4D",
  },
  {
    instruction: "MOV C, M",
    opcode: "4E",
  },
  {
    instruction: "MOV D, A",
    opcode: "57",
  },
  {
    instruction: "MOV D, B",
    opcode: "50",
  },
  {
    instruction: "MOV D, C",
    opcode: "51",
  },
  {
    instruction: "MOV D, D",
    opcode: "52",
  },
  {
    instruction: "MOV D, E",
    opcode: "53",
  },
  {
    instruction: "MOV D, H",
    opcode: "54",
  },
  {
    instruction: "MOV D, L",
    opcode: "55",
  },
  {
    instruction: "MOV D, M",
    opcode: "56",
  },
  {
    instruction: "MOV E, A",
    opcode: "5F",
  },
  {
    instruction: "MOV E, B",
    opcode: "58",
  },
  {
    instruction: "MOV E, C",
    opcode: "59",
  },
  {
    instruction: "MOV E, D",
    opcode: "5A",
  },
  {
    instruction: "MOV E, E",
    opcode: "5B",
  },
  {
    instruction: "MOV E, H",
    opcode: "5C",
  },
  {
    instruction: "MOV E, L",
    opcode: "5D",
  },
  {
    instruction: "MOV E, M",
    opcode: "5E",
  },
  {
    instruction: "MOV H, A",
    opcode: "67",
  },
  {
    instruction: "MOV H, B",
    opcode: "60",
  },
  {
    instruction: "MOV H, C",
    opcode: "61",
  },
  {
    instruction: "MOV H, D",
    opcode: "62",
  },
  {
    instruction: "MOV H, E",
    opcode: "63",
  },
  {
    instruction: "MOV H, H",
    opcode: "64",
  },
  {
    instruction: "MOV H, L",
    opcode: "65",
  },
  {
    instruction: "MOV H, M",
    opcode: "66",
  },
  {
    instruction: "MOV L, A",
    opcode: "6F",
  },
  {
    instruction: "MOV L, B",
    opcode: "68",
  },
  {
    instruction: "MOV L, C",
    opcode: "69",
  },
  {
    instruction: "MOV L, D",
    opcode: "6A",
  },
  {
    instruction: "MOV L, E",
    opcode: "6B",
  },
  {
    instruction: "MOV L, H",
    opcode: "6C",
  },
  {
    instruction: "MOV L, L",
    opcode: "6D",
  },
  {
    instruction: "MOV L, M",
    opcode: "6E",
  },
  {
    instruction: "MOV M, A",
    opcode: "77",
  },
  {
    instruction: "MOV M, B",
    opcode: "70",
  },
  {
    instruction: "MOV M, C",
    opcode: "71",
  },
  {
    instruction: "MOV M, D",
    opcode: "72",
  },
  {
    instruction: "MOV M, E",
    opcode: "73",
  },
  {
    instruction: "MOV M, H",
    opcode: "74",
  },
  {
    instruction: "MOV M, L",
    opcode: "75",
  },
  {
    instruction: "MVI A, Data",
    opcode: "3E",
  },
  {
    instruction: "MVI B, Data",
    opcode: "06",
  },
  {
    instruction: "MVI C, Data",
    opcode: "0E",
  },
  {
    instruction: "MVI D, Data",
    opcode: "16",
  },
  {
    instruction: "MVI E, Data",
    opcode: "1E",
  },
  {
    instruction: "MVI H, Data",
    opcode: "26",
  },
  {
    instruction: "MVI L, Data",
    opcode: "2E",
  },
  {
    instruction: "MVI M, Data",
    opcode: "36",
  },
  {
    instruction: "NOP",
    opcode: "00",
  },
  {
    instruction: "ORA A",
    opcode: "B7",
  },
  {
    instruction: "ORA B",
    opcode: "B0",
  },
  {
    instruction: "ORA C",
    opcode: "B1",
  },
  {
    instruction: "ORA D",
    opcode: "B2",
  },
  {
    instruction: "ORA E",
    opcode: "B3",
  },
  {
    instruction: "ORA H",
    opcode: "B4",
  },
  {
    instruction: "ORA L",
    opcode: "B5",
  },
  {
    instruction: "ORA M",
    opcode: "B6",
  },
  {
    instruction: "ORI Data",
    opcode: "F6",
  },
  {
    instruction: "OUT Port-Address",
    opcode: "D3",
  },
  {
    instruction: "PCHL",
    opcode: "E9",
  },
  {
    instruction: "POP B",
    opcode: "C1",
  },
  {
    instruction: "POP D",
    opcode: "D1",
  },
  {
    instruction: "POP H",
    opcode: "E1",
  },
  {
    instruction: "POP PSW",
    opcode: "F1",
  },
  {
    instruction: "PUSH B",
    opcode: "C5",
  },
  {
    instruction: "PUSH D",
    opcode: "D5",
  },
  {
    instruction: "PUSH H",
    opcode: "E5",
  },
  {
    instruction: "PUSH PSW",
    opcode: "F5",
  },
  {
    instruction: "RAL",
    opcode: "17",
  },
  {
    instruction: "RAR",
    opcode: "1F",
  },
  {
    instruction: "RC",
    opcode: "D8",
  },
  {
    instruction: "RET",
    opcode: "C9",
  },
  {
    instruction: "RIM",
    opcode: "20",
  },
  {
    instruction: "RLC",
    opcode: "07",
  },
  {
    instruction: "RM",
    opcode: "F8",
  },
  {
    instruction: "RNC",
    opcode: "D0",
  },
  {
    instruction: "RNZ",
    opcode: "C0",
  },
  {
    instruction: "RP",
    opcode: "F0",
  },
  {
    instruction: "RPE",
    opcode: "E8",
  },
  {
    instruction: "RPO",
    opcode: "E0",
  },
  {
    instruction: "RRC",
    opcode: "0F",
  },
  {
    instruction: "RST 0",
    opcode: "C7",
  },
  {
    instruction: "RST 1",
    opcode: "CF",
  },
  {
    instruction: "RST 2",
    opcode: "D7",
  },
  {
    instruction: "RST 3",
    opcode: "DF",
  },
  {
    instruction: "RST 4",
    opcode: "E7",
  },
  {
    instruction: "RST 5",
    opcode: "EF",
  },
  {
    instruction: "RST 6",
    opcode: "F7",
  },
  {
    instruction: "RST 7",
    opcode: "FF",
  },
  {
    instruction: "RZ",
    opcode: "C8",
  },
  {
    instruction: "SBB A",
    opcode: "9F",
  },
  {
    instruction: "SBB B",
    opcode: "98",
  },
  {
    instruction: "SBB C",
    opcode: "99",
  },
  {
    instruction: "SBB D",
    opcode: "9A",
  },
  {
    instruction: "SBB E",
    opcode: "9B",
  },
  {
    instruction: "SBB H",
    opcode: "9C",
  },
  {
    instruction: "SBB L",
    opcode: "9D",
  },
  {
    instruction: "SBB M",
    opcode: "9E",
  },
  {
    instruction: "SBI Data",
    opcode: "DE",
  },
  {
    instruction: "SHLD Address",
    opcode: "22",
  },
  {
    instruction: "SIM",
    opcode: "30",
  },
  {
    instruction: "SPHL",
    opcode: "F9",
  },
  {
    instruction: "STA Address",
    opcode: "32",
  },
  {
    instruction: "STAX B",
    opcode: "02",
  },
  {
    instruction: "STAX D",
    opcode: "12",
  },
  {
    instruction: "STC",
    opcode: "37",
  },
  {
    instruction: "SUB A",
    opcode: "97",
  },
  {
    instruction: "SUB B",
    opcode: "90",
  },
  {
    instruction: "SUB C",
    opcode: "91",
  },
  {
    instruction: "SUB D",
    opcode: "92",
  },
  {
    instruction: "SUB E",
    opcode: "93",
  },
  {
    instruction: "SUB H",
    opcode: "94",
  },
  {
    instruction: "SUB L",
    opcode: "95",
  },
  {
    instruction: "SUB M",
    opcode: "96",
  },
  {
    instruction: "SUI Data",
    opcode: "D6",
  },
  {
    instruction: "XCHG",
    opcode: "EB",
  },
  {
    instruction: "XRA A",
    opcode: "AF",
  },
  {
    instruction: "XRA B",
    opcode: "A8",
  },
  {
    instruction: "XRA C",
    opcode: "A9",
  },
  {
    instruction: "XRA D",
    opcode: "AA",
  },
  {
    instruction: "XRA E",
    opcode: "AB",
  },
  {
    instruction: "XRA H",
    opcode: "AC",
  },
  {
    instruction: "XRA L",
    opcode: "AD",
  },
  {
    instruction: "XRA M",
    opcode: "AE",
  },
  {
    instruction: "XRI Data",
    opcode: "EE",
  },
  {
    instruction: "XTHL",
    opcode: "E3",
  },
];
// find index of mvi a
console.log(
  opcodes.findIndex((instruction) => instruction.instruction === "MVI A, Data")
);
