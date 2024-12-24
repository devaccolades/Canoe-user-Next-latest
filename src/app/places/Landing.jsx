"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; 
import Image from "next/image";

import First from '../../../public/images/places/1.jpg'
import Second from '../../../public/images/places/2.jpg'
import Third from '../../../public/images/places/3.jpg'
import Fourth from '../../../public/images/places/4.jpg'
import Fifth from '../../../public/images/places/5.jpg'
import Sixth from '../../../public/images/places/6.jpg'
import Seventh from '../../../public/images/places/7.jpg'
import Eight from '../../../public/images/places/8.jpg'
import Ninth from '../../../public/images/places/9.jpg'


import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();
  const categories = [
    "Beaches",
    "Temples",
    "Historical Places",
    "Hilltops",
    "Wild life",
  ];

  const [activeCategory, setActiveCategory] = useState("Beaches");

  const attractionsData = [
    {
      category: "Historical Places",
      title: "St. Angelo Fort (Kannur Fort)",
      description:
        "Built by the ﬁrst Portuguese Viceroy in India, Don Francesco de Almeida (1505), St. Angelo s Fort is among the most historic sites in Kannur. This massive triangular laterite structure is ﬂanked by gigantic bastions that make for an imposing sight. It changed hands between the Dutch and eventually the British, who would remodel and reequip it into their primary military stronghold in Malabar.",
      photo:First,
      link: "/places/test",
    },
    {
      category: "Historical Places",
      title: "Arakkal Museum ",
      description:
        "The Arakkal Museum is a museum dedicated to the Arakkal family, the only Muslim royal family in Kerala, India. The museum is actually a section of the Arakkalkettu. The durbar hall section of the palace has been converted into a museum by the Government of Kerala.",
      photo: Second,
      link: "/places/test",
    },
    {
      category: "Beaches",
      title: "Kannur Light House",
      description:
        "The Kannur Lighthouse is located near the Payyambalam Beach, a few kilometers from Kannur town, in Kerala state, south India. It is adjacent to the Sea View Park and the Government Guest House",
      photo:  Third,
      link: "/places/test",
    },
    {
      category: "Beaches",
      title: "Muzhappilangad Drive In Beach",
      description:
        "Muzhappilangad Drive-in Beach is a beach on the Malabar Coast in the state of Kerala in south western India. This beach is the longest Drive- In Beach in Asia and is featured among the top 6 best beaches for driving in the world.",
      photo: Fourth,
      link: "/places/test",
    },



    {
      category: "Beaches",
      title: "Dharmadam Island Distance",
      description:
        "Dharmadam Island is a small 2- hectare private island in Thalassery, Kannur District, Kerala. It lies about 100 meters from the mainland at Dharmadam. The island, covered with coconut palms and dense bush, can be seen from the Muzhappilanagad beach, from which permitted people can walk out to the island during low tide.",
      photo: Fifth,
      link: "/places/test",
    },


    {
      category: "Hilltops",
      title: "Ezhimala",
      description:
        "Perched at a height of 286 meters, the Ezhimala hill is one of the most visually appealing Kannur tourist places. The hill is a part of an isolated cluster of hills and the vantage point offers bedazzling views of the sheer naked natural splendor around – hills covered in a blanket of green, cotton white clouds covering the clear blue skies, and the beautiful valley underneath.", 
      photo: Sixth,
      link: "/places/test",
    },




    {
      category: "Temples",
      title: "Parassinikadav Sree Muthappan Temple",
      description:
        "God of the poor and toiling masses, he is helpful to anyone who worships and follows him. A rebel God in the Hindu pantheon, he drinks toddy (palm wine) and eats roasted fish. He has a hunter&#39;s attire and carries with him a bow and arrow. His companions are dogs who wander freely in his temple. The secular nature of this God is further evident in treating every one equally, irrespective of this caste, religion, country. or creed. There are no restrictions, no dress regulations and anybody can go up to the sanctum- sanctorum and pray.", 
      photo: Seventh,
      link: "/places/test",
    },


    {
      category: "Temples",
      title: "Rajarajeshwara Temple",
      description:
        "The Rajarajeshwara temple is a Shiva temple located in  Taliparamba  in Kannur district of Kerala State of India. The temple is regarded as one of the existing 108 ancient Shiva Temples of ancient Kerala. It also has a prominent place amongst the numerous Shiva temples in South India. It had the tallest shikhara amongst the temples of its time.", 
      photo: Eight,
      link: "/places/test",
    },


    {
      category: "Temples",
      title: "Muzhakkunnu Mridangasyleshwari Temple",
      description:
        "Muzhakkunnu Mridangashaileshwari Temple is an ancient temple located in the village of Mhujakunn in Kannur district. Mridangashaileshwari Temple is the Kuladevata temple of Veerapazhassiraja, the lion of Kerala. It is believed to be one of the 108 temples created by  Parasurama. It was here that the poem Matangananamaj Vasaramaneem, a famous poem of praise in Kathakali, was composed. It is in praise of Porkali Bhagwati, the worship idol of the temple.", 
      photo: Ninth,
      link: "/places/test",
    },





  ];

  const filteredAttractions = attractionsData.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="bg-[#f4f1eb] pt-[30px] pb-[30px] md:pt-[60px] md:pb-[60px]">
      <div className="containers">
        {/* Header Section */}
        <div className="text-center mb-4 md:mb-8">
          <motion.h1
            className="text-[16px] md:text-[20px] lg:text-[24px] font-[cavet-regular] leading-[17px] text-[--primary-cl] md:leading-[25px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
          >
            Places
          </motion.h1>
          <motion.h2
            className="text-[32px] lg:text-[40px] font-[Melodrama-Medium] leading-[28px] text-[--primary-cl] md:leading-[35px] mt-2"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
          >
            Nearby Attractions
          </motion.h2>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-[4px] sm:gap-[20px] mb-4 md:mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`p-[5px] sm:p-[10px] text-[10px] sm:text-[14px] rounded-[4px] font-[Roboto-font-medium] transition-all duration-300 border-[2px] ${activeCategory === category
                ? "border-[#CD7F32] text-[#CD7F32] bg-transparent"
                : "border-[rgba(208,208,208,1)] text-[rgba(208,208,208,1)] bg-transparent hover:border-[#CD7F32] hover:text-[#CD7F32]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[20px]">
          {filteredAttractions.map((item, index) => (
            <PlaceCard item={item} router={router} key={index} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlaceCard = ({ item, router, index }) => {
  return (
    <motion.div
      className="overflow-hidden cursor-pointer flex flex-col gap-[10px]"
      onClick={() => router.push(`${item?.link}`)}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }} 
    >
      <div className="relative h-64 w-full rounded-[16px] overflow-hidden">
        <Image
          src={item.photo}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-[16px] transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="p-[10px]">
        <h3 className="text-[18px] font-[space-grotesk-semibold] leading-[19px] mb-2 text-[--primary-cl]">
          {item.title}
        </h3>

<p className="text-[14px] leading-[21px] font-[Roboto-font-regular] text-[--primary-cl]">
  {item.description.length > 150 ? `${item.description.slice(0, 150)}...` : item.description}
</p>


      </div>
    </motion.div>
  );
};

export default Landing;
