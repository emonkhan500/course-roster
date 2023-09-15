import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";
import "./Courses.css";
import Cart from "../cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
 
  const [remaining,setRemaining]=useState(20);
const [totalCost, setTotalCost]=useState(0)
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleClicked = (course) => {
    
    const isExist = selectedCourse.find((item)=>item.ID == course.ID);
let credit = course.credit;

    if (isExist){
     return toast ('Already Added')
     
    }
    else{
      
      selectedCourse.forEach(item => {
        credit =credit+ item.credit;
      });
      
      const totalRemaining =20-credit;
      
      if(credit >20){
      return  toast('Reached Credit Limit')
      }
      else{
        setTotalCost(credit)
        setRemaining(totalRemaining)
        setSelectedCourse([...selectedCourse, course])
      }
      
    }
    
  };
  // console.log(selectedCourse)
  return (
    <div className="flex gap-3">
      <div className="w-3/4 container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleClicked={handleClicked}
          ></Course>
        ))}
      </div>
      <div className="w-1/4 rounded-md bg-white p-3">
        <h2 className="text-2xl text-center border-b-2">
          Credit: Hour Remaining {remaining} hr
        </h2>
        
        <h2 className="text-2xl font-bold border-b-2">Course Name</h2>
        
        <ul className="list-decimal list-inside">
          {selectedCourse.map((item) => (
            <Cart key={item.ID} item={item} totalCost={totalCost} remaining={remaining}></Cart>

          ))}
        </ul>
        <h2 className="text-xl">Total Credit Hour :{totalCost} </h2>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Courses;
