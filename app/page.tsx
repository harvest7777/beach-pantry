import Title from "./_components/Title";
import Restock from "./_landing_components/Restock";
import PantrySchedule from "./_landing_components/Schedule";
import Image from "next/image";

export default function Home() {
  const nextStock = new Date();
  nextStock.setHours(20);
  nextStock.setMinutes(0);

  const lastStock = new Date();
  lastStock.setHours(13);
  lastStock.setMinutes(30);
  lastStock.setDate(lastStock.getDate() - 1);

  return (
    <>
      <Title>Beach Pantry Stock</Title>
      {/* entire page */}
      <section className="flex gap-x-20 justify-center">
        <section className="w-1/2 flex flex-col">
          <Restock lastStock={lastStock} nextStock={nextStock} />
          <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl">
            <Image
              className="object-cover"
              src="/pantry_map.png"
              alt="beach pantry on the map"
              fill
            />
          </div>
        </section>
        <section className="w-1/3">
          <PantrySchedule />
        </section>
      </section>

    </>
  );
}
