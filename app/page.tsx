import Title from "./_components/Title";
import Restock from "./_landing_components/Restock";
import PantrySchedule from "./_landing_components/Schedule";
import Image from "next/image";

export default function Home() {
  let date = new Date();
  date.setHours(14);
  const nextStock = date;
  date.setDate(date.getDate() - 1);
  const lastStock = date;

  return (
    <>
      <Title>Beach Pantry Stock</Title>
      {/* entire page */}
      <section className="flex">
        <section className="w-1/2 flex flex-col">
          <Restock lastStock={lastStock} nextStock={nextStock} />
          <div className="w-1/2 aspect-[16/9] relative">
            <Image
              className="object-cover"
              src="/pantry_map.png"
              alt="beach pantry on the map"
              fill
            />
          </div>
        </section>
        <PantrySchedule />
      </section>

    </>
  );
}
