import Image from "next/image"
import Title from "../_components/Title"

export default function AboutPage() {
  return (
    <div>
      <Title>About Us</Title>
      {/* the actual page */}
      <div className="flex gap-x-5">
        <section className="w-1/3">
          <div className="w-full aspect-[16/9] relative">
            <Image
              className="object-cover"
              src="/pantry_map.png"
              alt="beach pantry on the map"
              fill
            />
          </div>
          <div className="aspect-[16/9] relative">
            <Image
              className="object-cover"
              src="/pantry_map.png"
              alt="beach pantry on the map"
              fill
            />
          </div>
        </section>

        {/* description about pantry */}
        <section className="w-2/3">
          <article>
            <p>
              The Laurén Chalmers '83 Beach Pantry operates as the official food pantry for Long Beach State University (LBSU) students. The pantry provides food items for students in need. An initiative spanning two ASI executive administrations, 2015 ASI Vice President Miriam Hernández and 2016 ASI Vice President Logan Vournas spearheaded the food pantry project into fruition in fall 2016. Also housed in the Laurén Chalmers '83 Beach Pantry will be the Student Swap Shop program, aimed at providing students with the opportunity to swap unneeded or old school supplies, like books, notebooks and other items essential to education.
            </p>
          </article>
          <article className="mt-10">
            <p>Students can use the Laurén Chalmers '83 Beach Pantry three times a week and receive no more than five items* per visit.</p>
            <p>*It is highly encouraged to take an assortment of items for a well-balanced meal.</p>
            <p>For questions, please email asi-pantry@csulb.edu.</p>
          </article>
        </section>
      </div>
    </div>
  )
}
