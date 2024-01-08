

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFileLines,  faTable, faTableList, faScissors } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faImage } from "@fortawesome/free-regular-svg-icons";
import PricingTable from "../../DraggablePages/PricingTable";
import TextPage from "../../DraggablePages/TextPage";
import VidoPage from "../../DraggablePages/VideoPage";

const listItems = [
  { id: "Item1", icon: faFileLines, label: "Text" },
  { id: "Item2", icon: faYoutube, label: "Video" },
  { id: "Item3", icon: faTable, label: "Pricing table" },
  { id: "Item4", icon: faTableList, label: "Table of contents" },
  { id: "Item5", icon: faImage, label: "Image" },
  { id: "Item6", icon: faTableList, label: "Table" },
  { id: "Item7", icon: faBuilding, label: "Quote builder" },
  { id: "Item8", icon: faScissors, label: "Page break" },


];

// const NewDocument = () => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [draggedList, setDraggedList] = useState([]);

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragStart = (event, item) => {
//     event.dataTransfer.setData("id", item.id);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const id = event.dataTransfer.getData("id");
//     const item = listItems.find((x) => x.id === id);
//     if (item) {
//       setDraggedList([...draggedList, { ...item, text: "" }]);
//       setIsDragging(false);
//     }
//   };

  


//   const targetClassName = `  ${isDragging ? "border-black" : "border-indigo-300"}`;

//   return (
//    <div>
//       <div className="md:flex gap-1  space-y-3 md:space-y-0  ">

//         <div
//           className={` p-4  bg-white rounded-lg shadow-lg border-dashed border-2 sm:mr-3 min-h-screen w-full 
//           ${targetClassName}`}
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//         >
//           <p className="font-semibold">Drag Items Here</p>
//           <ul className="list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-40">
//             {draggedList.map((item) => (
//               <li
//                 key={item.id}
//                 id={item.id}
//                 className="bg-white border border-indigo-300 p-4 mb-2 "
//               >
//                 {item.label}
                
//               </li>
//             ))}
//           </ul>
//         </div>


//         <div className=" md:w-1/2  h-72 mr-2  ">
//           <ul className=" bg-indigo-200 border border-indigo-300 h-auto ">
//             {listItems.map((item) => (
//               <li
//                 key={item.id}
//                 id={item.id}
//                 className="bg-white border border-indigo-300 p-4 mb-2 cursor-move "
//                 draggable={true}
//                 onDragStart={(e) => handleDragStart(e, item)}
//               >

//                 <FontAwesomeIcon icon={item.icon} className="mr-2  " />
//                 {item.label}
//               </li>
//             ))}
//           </ul>

          
//         </div>
//       </div>
//       </div>

   
//   );
// };

// export default NewDocument;


const NewDocument = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggedList, setDraggedList] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData("id", item.id);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    const item = listItems.find((x) => x.id === id);
    if (item) {
      setDraggedList([...draggedList, { ...item, text: "" }]);
      setIsDragging(false);
    }
  };

  const targetClassName = `${
    isDragging ? "border-black" : "border-indigo-300"
  }`;

  const renderInputField = (item) => {
    switch (item.label) {
      case "Text":
        return <TextPage/>;
      case "Video":
        return <VidoPage/>;
      case "Pricing table":
        return <PricingTable/>;
      // Add cases for other items as needed
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="md:flex gap-1  space-y-3 md:space-y-0  ">
        <div
          className={` p-4  bg-white rounded-lg shadow-lg border-dashed border-2 sm:mr-3 min-h-screen w-full ${targetClassName}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p className="font-semibold">Drag Items Here</p>
          <ul >
            {draggedList.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className=" cursor-move "
              >
                {item.label}
                {renderInputField(item)}
              </li>
            ))}
          </ul>
        </div>

        <div className=" md:w-1/2  h-72 mr-2  ">
          <ul className=" bg-indigo-200 border border-indigo-300 h-auto ">
            {listItems.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className="bg-white border border-indigo-300 p-4 mb-2 cursor-move "
                draggable={true}
                onDragStart={(e) => handleDragStart(e, item)}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-2 " />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewDocument;


