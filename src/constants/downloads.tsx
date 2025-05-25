import { useDevCppDownloadDialogStore } from "../store";

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
