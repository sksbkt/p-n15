function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  await sleep(2000); // 2 second fake delay

  return (
    <main className="flex justify-center">
      <h3>HOME</h3>
    </main>
  );
}
