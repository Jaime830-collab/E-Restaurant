import { Card } from "./card";

export function ListView() {
  return (
    <>
      <main className="flex justify-center gap-6 py-8 px-7 flex-wrap">
        <Card />
        <Card />
        <Card />
      </main>
    </>
  );
}
