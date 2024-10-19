/* eslint-disable no-unused-vars */

import React from 'react';
import EventCard from './EventCard';
import Layout from '../../components/Layout';

const events = [
   
{
    
  id: 1,
  title: 'MatLink',
  description: ' Electrical engineering problems often require the use of mathematical models and simulations. MatLink challenges participants to harness the power of MATLAB, a versatile tool used for solving complex mathematical and engineering problems. This event pushes students to think analytically and apply theoretical concepts to real-world scenarios, providing a deep dive into the computational world of engineering.',
  image: '/Events/matlink.webp', 
},
{
     
  id: 2,
  title: ' ProGem',
  description: ' Industrial automation is the future, and understanding the systems behind it is crucial for modern engineers. ProGem focuses on Programmable Logic Controllers (PLC), the heart of automation in industries. Participants gain hands-on experience in controlling industrial machinery and processes, learning how automation is used to optimize production and reduce human intervention. Its an invaluable experience for anyone looking to work in industrial systems.',
  image: '/Events/progem.webp', 
},
{
     
  id: 3,
  title: 'Navriti',
  description: ' Effective communication of research is as important as the research itself. Navriti provides a platform for students to present their research and technical ideas in the form of papers. This event not only hones their research and writing skills but also teaches them how to deliver clear and compelling presentations. Students learn the art of technical communication, a key skill for anyone pursuing further studies or a career in research and development.',
  image: '/Events/navriti.webp',
},
{
     
  id: 4,
  title: 'I-Matter',
  description:  ' Bridging the gap between classroom learning and industry is essential for an engineering students growth. I-Matter offers students the opportunity to visit industries and see how theories are applied in real-world settings. These industrial visits provide invaluable insights into the daily operations of technology-driven industries, helping participants understand the practical challenges and innovations shaping the field.',
  image: '/Events/imatter.webp', 
},
{
     
  id: 5,
  title: 'Adhyayan',
  description: 'Decision-making in a corporate environment requires strategic thinking and a deep understanding of business dynamics. Adhyayan simulates this environment by presenting participants with case studies based on real-world organizational problems. Students work in teams to analyze the situation, develop solutions, and make key business decisions, providing a unique opportunity to experience the responsibilities of management and leadership.',
  image: '/Events/adhyayan.webp', 
},
{
     
  id: 6,
  title: 'Electro-Spection',
  description: ' Electrical circuits are the backbone of all modern electronic systems. In Electro-Spection, participants are tasked with designing and building functional electrical and electronic circuits on breadboards. This fast-paced event tests not only their theoretical knowledge but also their ability to quickly and accurately translate designs into working models, enhancing their practical skills in circuit construction and troubleshooting.',
  image: '/Events/electr.webp', 
},
{
     
  id: 7,
  title: 'Pair-in-Thesis',
  description: ' Coding is an essential skill for any engineer in today’s digital world. Pair-in-Thesis is a competitive programming event where participants solve coding challenges in pairs, testing their ability to work together and apply algorithms efficiently. Whether solving optimization problems or working on real-time systems, this event helps students sharpen their coding abilities and problem-solving strategies, preparing them for the challenges of modern software development.',
  image: '/Events/pair.webp', 
},
{
     
  id: 8,
  title: 'Electro-Hack',
  description: ' Innovation begins with identifying problems and finding effective solutions. Electro-Hack provides participants with real-world problems, challenging them to design and develop solutions using their technical expertise. From concept to prototype, this event encourages students to think outside the box, fostering creativity and innovation while addressing practical issues faced in everyday life.',
  image: '/Events/elctrohack.webp', 
},
{
     
  id: 9,
  title: 'Analytica',
  description: 'Data is the new oil, and being able to interpret and use data effectively is a skill in high demand. Analytica is an event where participants dive into data analytics and data science, solving problems that require a keen eye for detail and strong analytical abilities. This event exposes students to the rapidly growing field of data, helping them develop skills that are vital in industries ranging from finance to tech.',
  image: '/Events/analytics.webp', 
},
{
     
  id: 10,
  title: 'Abhyas',
  description: ' Preparing for placements can be daunting, but practice makes perfect. Abhyas is designed to simulate the entire campus placement process, including aptitude tests, group discussions, and technical interviews. Participants are put through their paces in a realistic environment, testing their communication skills, technical knowledge, and problem-solving abilities. This event is essential for anyone looking to secure a job after graduation.',
  image: '/Events/abhyas.webp', 
},
{
     
  id: 11,
  title: 'Qrious',
  description: 'Electrical engineering is full of fascinating concepts and challenges that test the mind. Qrious is a quiz-based event that taps into this intellectual curiosity, covering topics from core electrical engineering to emerging technologies. This event sharpens participants knowledge, keeping them up to date with the latest advancements in the field, while providing an exciting and competitive atmosphere.',
  image: '/Events/qurious.webp', 
},
{
     
  id: 12,
  title: 'Fun Event',
  description: 'The fun events will offer a dynamic blend of entertainment and amusement, creating a lively and playful environment for participants. These events will span both online and offline formats, featuring engaging video games, thrilling treasure hunts, and a variety of interactive physical and cultural activities. Designed to foster connection and enjoyment, these events promise to provide an exciting and memorable experience for everyone involved.',
  image: '/Events/fun.webp', 
},

  
];


const Event = () => {
    return (
      <>
        <Layout>
        {/* <div className="container mt-16 mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   ">
            {events.map(event => (
                <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    image={event.image}
                />
            ))}
        </div>
    </div> */}
      <div className="container pt-28 mx-auto px-4 py-8 bg-slate-100">
          <h1 className="md:text-5xl text-3xl font-bold mb-12 text-center text-orange-600">Events</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-10">
            {events.map(event => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
        </div>
    </Layout>
     </>
    );
}

export default Event;

