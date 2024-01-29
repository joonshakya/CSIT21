const { exec, spawn } = require("child_process");
const jExec = async (command) => {
  const spawnCommand = command.split(" ")[0];
  const spawnArgs = command.split(" ").slice(1);
  await new Promise((resolve) => {
    let std = spawn(spawnCommand, spawnArgs || [], {
      shell: true,
      stdio: "inherit",
    });
    std.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });
    std.on("error", (error) => {
      console.log(`error: ${error.message}`);
    });
    std.on("close", () => {
      resolve();
    });
  });
};

(async () => {
  try {
    exec("pwd");
  } catch (e) {
    console.log("Please use Git Bash to run this script");
    process.exit();
  }

  const message = process.argv[2];

  if (!message) {
    console.log("Please enter a commit message");
  } else {
    console.log("\npnpm build");
    await jExec(`pnpm build`);
    console.log("\nCommitting Static HTML...");
    await jExec(
      `cd out && git init && git remote add static-html https://github.com/joonshakya/CSIT21-Next-Static.git && git add . && git branch -M static && git commit -m "Deploy from local" && git push static-html static --force`
    );
    console.log("\nCommitting code...");
    await jExec(
      `git add . && git commit -m "${message} [skip ci]" && git push`
    );
  }
})();
