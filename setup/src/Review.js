import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [person, setPerson] = useState(0);
  const  { name, job, image,text} = people[person];

  console.log(name);

  function nextPerson(){
    console.log('yasi');
    if(person=== people.length-1){
      setPerson(()=>{
        return 0;
      });
    }else{
      setPerson((index)=>{
        let newIndex = index + 1;
        return newIndex;
      });
    }
   
  }

  function prevPerson(){
    if(person=== 0){
      setPerson(()=>{
        return people.length -1 ;
      })
    }else{
      setPerson((index)=>{
        let newIndex = index - 1;
        return newIndex;
      });
    }
  }
  function random(){
    
    setPerson(Math.round( Math.random() * (3-0)+ 0)); 
  }
  return (
    <main>
  <article className= 'review'>
  <div className= 'img-container'>
  <img src= {image} alt= {name} className= 'img-container'></img>
  <span className='quote-icon'><FaQuoteRight/></span>
  </div>
  <div>
    <h2 className= 'author'>{name} </h2>
    <p className= 'job'>{job}</p>
    <p className= 'info'>{text} </p>
  </div>
  <div>
  <button className= 'prev-btn' onClick= {prevPerson}><FaChevronLeft/></button>
  <button className= 'next-btn' onClick= {nextPerson}><FaChevronRight/></button>
  </div>

  <button className= 'random-btn' onClick= {random}>Random</button>
  </article>
  </main>

  )
};

export default Review;
