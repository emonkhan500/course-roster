
import { IoLogoUsd } from 'react-icons/io';
import { AiOutlineRead } from 'react-icons/ai';

const Course = ({ course,handleClicked }) => {
  // console.log(course)
  const { title, img, description, price,credit } = course;
  return (
    <div className="flex flex-col justify-between w-80 bg-white p-4">
      <img src={img} alt="" />
      <h2
        className="text-xl font-bold mt-2 mb-2
            "
      >
        {title}
      </h2>
      <p>{description}</p>

      <div className="flex justify-between items-center">
      <span><IoLogoUsd></IoLogoUsd></span>
        <p>Price:{price}</p>
        <span><AiOutlineRead></AiOutlineRead></span>
        <p>Credit:{credit}</p>  
      </div>
      <button onClick= {()=>handleClicked(course)}
        className="px-28 py-2 rounded mt-2"
        style={{ backgroundColor: "royalblue" }}
      >
        Select
      </button>
    </div>
  );
};

export default Course;
