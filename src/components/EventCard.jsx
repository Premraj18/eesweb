import React, { useMemo } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Data = [
  {
    id: "1",
    title: " ELECTRO-SPECTION",
    description: "Electrical circuits form the foundation of power generation, and in this event, participants design and construct electrical and electronic circuits swiftly and efficiently on a breadboard.",
    imgUrl: "/Events/abhyas.webp"
  },
  {
    id: "2",
    title: "MATLINK",
    description: "Solving intricate Electrical Enginnering challenges necessitates the application of Mathematical and analytical tools, A skill set put to the test in this event that delves into the capativating realm of matlab.",
    imgUrl: "/Events/abhyas.webp"
  },
  {
    id: "3",
    title: "PROGEM",
    description: "It is crucial to control and realize the working of industrial equipment. this event deals with PLC(Programmable Logic Controller).",
    imgUrl: "/Events/abhyas.webp"
  },
  {
    id: "4",
    title: "NAVRITI",
    description: "The art of paper presentation requires study, implementation and presentation of ideas. students will need to present their ideas in a scientific and research-oriented manner.",
    imgUrl: "/Events/abhyas.webp"
  },
  {
    id: "5",
    title: "I-MATTER",
    description: "I-matter offers students a unique industrial visit, providing firsthand exposure to real world technology operations, and bridging the gap between theory and practice.",
    imgUrl: "/Events/abhyas.webp"
  },
  {
    id: "6",
    title: "ADHYAYAN",
    description: "This event involves a case-study in which all major decisions related to the organisation are taken. this event will bring in great white-collar experience.",
    imgUrl: "/Events/abhyas.webp"
  },
  {
    id: "7",
    title: "PAIR-IN-THESIS",
    description: "Codes are the bricks on which magnificent castles can be built. this event revolves around the interesting world of competitive programming.",
    imgUrl: "/Events/abhyas.webp"
  },
  {
    id: "8",
    title: "ELECTRO-HACK",
    description: "This event provides students a platform to solve some problems we face in our daily lives, and thus inculcate a culture of product innovation and problem solving",
    imgUrl: "/Events/abhyas.webp"
  },
  {
    id: "9",
    title: "ANALYTICA",
    description: "Analytica is designed to evaluate participants' analytical and problem solving skills while introducing them to the trending domains of data analytics and data science.",
    imgUrl: "/Events/abhyas.webp"
  },
  {
    id: "10",
    title: " ABHYAS",
    description: "Placements are of utmost importance. This event tests your overall communication, technical, and aptitude skills with a subdued experience of campus placement.",
    imgUrl: "/Events/abhyas.webp"
  },
  {
    id: "11",
    title: "QRIOUS",
    description: "A brain-teasing challenge, qrious is a quiz based event revolving around the dynamic universe of electrical engineering and related sciences, stimulating intellectual curiosity.",
    imgUrl: "/Events/abhyas.webp"
  }
]
// hu
function EventCard() {

  const settings = useMemo(() => {
    return {
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 1500,
      cssEase: "linear",
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: false,
      horizontalSwiping: true,
      swipeToSlide: true,
      pauseOnHover: true,
      variableWidth: false,

      responsive:[{
        breakpoint:600,
        settings:{
            slidesToShow:1,
            speed: 3500,
            autoplaySpeed: 2000,
        }
    }]
      
    };
  }, []);
  return (
    <div className=' w-auto'>
      <Slider {...settings}>
        {Data.map((d) => (
          <div key={d.id} className="h-[360px] w-full rounded  flex flex-col lg:px-16 px-6 pt-1 pb-5 items-center justify-center "  >
            <div className='h-full bg-white border-2 text-center justify-center p-5 px-8 flex flex-col items-center' style={{boxShadow:'0 0 10px rgb(220, 220, 220)'}}>
              <div className='flex justify-center items-center gap-3 mb-5'>
                <h2 className='text-xl font-semibold '>{d.title}</h2>
                <img src={d.imgUrl} alt="" className='w-12'/>
              </div>
                <p className='text-lg'>{d.description}</p>
            </div>
          </div>
        ))}

      </Slider>

    </div>
  );
}
//
export default EventCard