import React from 'react';
import Jake from '../../assets/Board/Board_23-24/Jake.jpg';
import Phillipe from '../../assets/Board/Board_23-24/Phillipe.jpg';
import Sarah from '../../assets/Board/Board_23-24/Sarah.jpg';
import Moksh from '../../assets/Board/Board_23-24/Moksh.jpg';
import Douglas from '../../assets/Board/Board_23-24/Douglas.jpg';
import Aaron from '../../assets/Board/Board_23-24/Aaron.jpg';
import Rhythm from '../../assets/Board/Board_23-24/Rhythm.jpg';
import Leah from '../../assets/Board/Board_23-24/Leah.jpg';
import Bhavika from '../../assets/Board/Board_23-24/Bhavika.jpg';
import { motion } from 'framer-motion';

const people = [
  {
    id: 1,
    src: Jake,
    alt: 'Jake Flothe',
    position: 'President',
    hobbies:
      'I love playing video games and basketball, and I have two beautiful cats.',
  },
  {
    id: 2,
    src: Phillipe,
    alt: 'Phillipe Fernandes',
    position: 'Vice President',
    hobbies: 'I like to play soccer!',
  },
  {
    id: 3,
    src: Sarah,
    alt: 'Sarah Schuster',
    position: 'Vice President',
    hobbies: 'I like to workout!',
  },
  {
    id: 4,
    src: Moksh,
    alt: 'Moksh Keloo',
    position: 'Treasurer/Web Developer',
    hobbies:
      'I like to play badmitton, soccer (mostly on the beach), and board games.',
  },
  {
    id: 5,
    src: Douglas,
    alt: 'Douglas Perez-Tomas',
    position: 'Secretary',
    hobbies:
      'I enjoy playing soccer and basketball. I also have a dog and pet chickens.',
  },
  {
    id: 6,
    src: Aaron,
    alt: 'Aaron Sindhu',
    position: 'Events Director',
    hobbies:
      'I like to go to Southwest Rec and play basketball with my friends every night.',
  },
  {
    id: 7,
    src: Rhythm,
    alt: 'Rhythm Kumar',
    position: 'Fundraising Director',
    hobbies: 'I studied abroad in Italy this past summer',
  },
  {
    id: 8,
    src: Leah,
    alt: 'Leah Thai',
    position: 'Public Relations director',
    hobbies: 'I enjoy going to concerts.',
  },
  {
    id: 9,
    src: Bhavika,
    alt: 'Bhavika Guntuku',
    position: 'Creative Director',
    hobbies:
      "I've been customizing shoes outside of s4s for about 2 years now! peep the personal insta @shoesbybavi",
  },
];

const Team = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-[#89CFF0] flex justify-center items-center pl-0 md:pt-[60px] pt-[50px] "
    >
      <div className="w-full max-w-screen-xl md:p-8 md:mx-16 m-10 grid-col-reverse rounded-2xl mx-4 p-2">
        <h1 className="lg:text-6xl text-4xl text-[#060229] items-center flex justify-center font-bold pb-10">
          Meet the Board
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full">
          {people.map(({ id, src, alt, position, hobbies }) => (
            <div
              key={id}
              className="flex flex-col items-center m-2 py-5 border-4 border-blue-700 rounded-lg"
            >
              <img
                src={src}
                alt={alt}
                className="h-48 w-48 rounded-full border-4 border-[#211e76] hover:shadow-blue-500 hover:shadow-lg hover:scale-105 duration-300"
              />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#060229] pt-4">{alt}</p>
                <p className="text-xl font-bold text-[#211e76]">{position}</p>
                <span className="font-bold text-blue-600 text-lg m-2 underline">
                  Fun Fact / Hobbies:
                </span>
                <p className="text-lg text-[#211e76] font-mono font-bold mx-2">
                  {hobbies}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;
