import { useBaseStore } from "../store";

export async function checkCollegeEmail(authuser: string) {
  const img = document.createElement("img");
  img.src =
    "https://drive.google.com/thumbnail?id=1f0uYyaFOd_oI4Gda5FFmtao-obpz9HVT&authuser=" +
    authuser;
  img.style.display = "none";
  document.body.appendChild(img);
  img.onload = function () {
    console.log("loaded on college email", authuser);
    useBaseStore.setState({
      authuser,
    });
  };
  img.onerror = function () {
    // console.log(`failed on college email`, authuser);
  };
}
