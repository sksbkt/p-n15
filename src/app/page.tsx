import { Typography } from "@mui/material";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  await sleep(2000); // 2 second fake delay

  return (
    <main className="flex justify-center">
      <Typography variant="h2">Portfolio page</Typography>
    </main>
  );
}
