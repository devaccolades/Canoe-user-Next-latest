"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// Icons
import imageDecoration from "../../../public/icon/imagedecoration.svg";
// Image
import MainCoursesImage from "../../../public/images/restaurant/MainCourses.jpg";
import StartersImage from "../../../public/images/restaurant/Starters.jpg";
import DessertsImage from "../../../public/images/restaurant/Desserts.jpg";
import BreakfastImage from "../../../public/images/restaurant/Breakfast.jpg";
import LunchImage from "../../../public/images/restaurant/Lunch.jpg";
import DinnerImage from "../../../public/images/restaurant/Dinner.jpg";
import { Fade } from "react-reveal";
function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("Main Courses");
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  console.log(selectedMenuItems);
  
  const category = [
    { title: "Main Courses" },
    { title: "Starters" },
    { title: "Desserts" },
    { title: "Breakfast" },
    { title: "Lunch" },
    { title: "Dinner" },
  ];

  const menuItems = [
    {
      category: "Main Courses",
      image:MainCoursesImage,
      items: [
        {
          title: "Grilled Chicken with Herb Butter",
          description: "Succulent grilled chicken breast with rosemary and thyme, served with mashed potatoes and seasonal vegetables.",
          price: 399,
        },
        {
          title: "Beef Stroganoff",
          description: "Tender strips of beef in a creamy mushroom sauce, served over egg noodles.",
          price: 499,
        },
        {
          title: "Vegetable Lasagna",
          description: "Layered pasta with spinach, ricotta, and marinara sauce, topped with melted mozzarella.",
          price: 349,
        },
        {
          title: "Grilled Chicken with Herb Butter",
          description: "Succulent grilled chicken breast with rosemary and thyme, served with mashed potatoes and seasonal vegetables.",
          price: 399,
        },
        {
          title: "Beef Stroganoff",
          description: "Tender strips of beef in a creamy mushroom sauce, served over egg noodles.",
          price: 499,
        },
        {
          title: "Vegetable Lasagna",
          description: "Layered pasta with spinach, ricotta, and marinara sauce, topped with melted mozzarella.",
          price: 349,
        },
        {
          title: "Grilled Chicken with Herb Butter",
          description: "Succulent grilled chicken breast with rosemary and thyme, served with mashed potatoes and seasonal vegetables.",
          price: 399,
        },
        {
          title: "Beef Stroganoff",
          description: "Tender strips of beef in a creamy mushroom sauce, served over egg noodles.",
          price: 499,
        },
        {
          title: "Vegetable Lasagna",
          description: "Layered pasta with spinach, ricotta, and marinara sauce, topped with melted mozzarella.",
          price: 349,
        },
      ],
    },
    {
      category: "Starters",
      image:StartersImage,
      items: [
        {
          title: "Bruschetta",
          description: "Grilled bread topped with diced tomatoes, basil, garlic, and olive oil.",
          price: 150,
        },
        {
          title: "Stuffed Mushrooms",
          description: "Mushroom caps filled with garlic, herbs, and cheese, baked to perfection.",
          price: 200,
        },
        {
          title: "Spring Rolls",
          description: "Crispy rolls stuffed with vegetables, served with a sweet chili dipping sauce.",
          price: 120,
        },
      ],
    },
    {
      category: "Desserts",
      image:DessertsImage,
      items: [
        {
          title: "Chocolate Lava Cake",
          description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
          price: 250,
        },
        {
          title: "Cheesecake",
          description: "Classic New York-style cheesecake with a graham cracker crust.",
          price: 300,
        },
        {
          title: "Tiramisu",
          description: "Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
          price: 275,
        },
      ],
    },
    {
      category: "Breakfast",
      image:BreakfastImage,
      items: [
        {
          title: "Pancakes with Maple Syrup",
          description: "Fluffy pancakes served with butter and real maple syrup.",
          price: 200,
        },
        {
          title: "Omelette with Cheese",
          description: "Three-egg omelette filled with cheddar cheese and herbs.",
          price: 150,
        },
        {
          title: "Avocado Toast",
          description: "Toasted sourdough topped with mashed avocado, cherry tomatoes, and a sprinkle of chili flakes.",
          price: 180,
        },
      ],
    },
    {
      category: "Lunch",
      image:LunchImage,
      items: [
        {
          title: "Chicken Caesar Salad",
          description: "Grilled chicken breast on a bed of romaine lettuce, with Caesar dressing and Parmesan.",
          price: 299,
        },
        {
          title: "Turkey Club Sandwich",
          description: "Triple-layered sandwich with turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
          price: 250,
        },
        {
          title: "Margherita Pizza",
          description: "Classic pizza topped with tomato sauce, mozzarella, and fresh basil.",
          price: 299,
        },
      ],
    },
    {
      category: "Dinner",
      image:DinnerImage,
      items: [
        {
          title: "Steak with Garlic Butter",
          description: "Juicy sirloin steak cooked to perfection, topped with garlic butter and served with roasted vegetables.",
          price: 599,
        },
        {
          title: "Spaghetti Carbonara",
          description: "Traditional Italian pasta with pancetta, eggs, Parmesan, and black pepper.",
          price: 349,
        },
        {
          title: "Salmon with Lemon Dill Sauce",
          description: "Pan-seared salmon with a creamy lemon dill sauce, served with rice and asparagus.",
          price: 499,
        },
      ],
    },
  ];

  useEffect(() => {
    const selected = menuItems.find((menu) => menu.category === selectedMenu);
    setSelectedMenuItems(selected ? selected : {category:'',image:'',items:[]});    
  }, [selectedMenu]);


  const gradientTextStyle = {
    background: "linear-gradient(180deg, #cb964e 0%, #b9813a 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "2px",
  };

    return (
        <>
            <section className=' bg-[--primary-cl] pb-[60px]'>
                <div className='menu-container containers'>
                <Fade bottom>
                    <h4
                        className="text-[32px] font-[Melodrama-Medium] leading-[34px]"
                        style={gradientTextStyle}>
                        Menu
                    </h4>
                    </Fade>
                    <div className='flex gap-[10px] flex-row flex-wrap py-[30px]'>
                        {/* Category Buttons */}
                        <div className="flex flex-wrap  gap-[10px] mb-8">
                            {category.map((item, index) => (
                              <Fade bottom delay={(index + 1) * 100}>
                               <Category
                                    data={item}
                                    key={index}
                                    selectedMenu={selectedMenu}
                                    setSelectedMenu={setSelectedMenu} />
                              </Fade>
                               
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-[20px] lg:gap-[40px]'>
                        {selectedMenuItems?.items?.slice(0, Math.ceil(selectedMenuItems?.items?.length / 5)).map((item, index) => (
                            <div className={`flex ${index % 2 == 0 ? "flex-row" : "lg:flex-row-reverse"}`} key={index}>
                                <div className={`image-container lg:w-[40%] flex ${index % 2 == 0 ? "justify-start" : "justify-end"}`}>
                                <Fade bottom>
                                    <div
                                        className='border-image h-[502px] w-[353px] bg-cover bg-center p-[40px]'
                                        style={{
                                            backgroundImage: `url(${imageDecoration.src})`,
                                        }}>
                                        <Image
                                            src={selectedMenuItems?.image}
                                            alt=''
                                            className='image h-full w-full bg-cover bg-center rounded-[192px]'
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    </Fade>
                                </div>
                                <div className="flex flex-col gap-[30px] lg:gap-[20px] w-full lg:w-[60%] justify-center">
                                    {selectedMenuItems?.items?.slice(index * 5, (index + 1) * 5).map((subItem, subIndex) => (
                                        <Fade bottom delay={(index + 1) * 100}>
                                        <MenuCard data={subItem} key={subIndex} />
                                        </Fade>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className='bg-[--primary-cl]'>
                <hr className="w-full h-[1px] bg-transparent border-none containers" style={{
                    backgroundImage: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)'
                }} />
            </div>
        </>
    )
 
}
const Category = ({ data, selectedMenu, setSelectedMenu }) => {
  return (
    <button
      onClick={() => setSelectedMenu(data?.title)}
      className={`p-[10px]  rounded-[4px]  border-[2px] cursor-pointer font-[Roboto-font-medium] text-[14px] transition-all ease-in-out duration-300 bg-gradient-to-b hover:bg-gradient-to-b bg-clip-text hover:bg-clip-text
           ${
             selectedMenu === data?.title
               ? "border-[#cb964e] text-transparent from-[#cb964e] to-[#b9813a]"
               : "border-[rgba(208,208,208,1)] text-[rgba(208,208,208,1)] hover:text-transparent hover:border-[#cb964e] hover:from-[#cb964e] hover:to-[#b9813a]"
           }`}
    >
      {data?.title}
    </button>
  );
};

const MenuCard = ({ data }) => {
    return (
        <div className='grid grid-cols-[1fr,100px] md:gap-[30px] w-full items-center'>
            <div className='flex flex-col gap-[8px]'>
                <h6
                    className="card-headding text-[32px] font-[Melodrama-Medium] leading-[34px]"
                    style={{
                        background: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '2px'
                    }}
                >
                    {data?.title}
                </h6>
                <p className='card-description w-[600px] font-[Roboto-font-regular] text-[14px] text-white leading-[21px]'>
                    {data?.description}
                </p>
            </div>
      
            <p
    className="card-headding text-[28px] font-[Roboto-font-regular] leading-[34px] text-end lg:text-center"
    style={{
        background: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '2px'
    }}
>
    ₹{data?.price}
</p>

        </div>
    )
}
export default Menu

 