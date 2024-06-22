// components/Card.js
import styles from "./Card.module.css";

const Card = ({ title, name, onExplore }) => {
  return (
    <div className={`p-4 max-w-xs w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}>
      
        <div className="relative group flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
            <path fill="#2196f3" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z"></path>
        </svg>
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 w-max bg-gray-800 text-white text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {name}
          </div>
          <h2 className="text-black text-xl font-semibold mb-0 ml-1.5">{title}</h2>

        </div>
        
     
        
      <div className="mt-4">
      <button
        onClick={onExplore}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Explore
      </button>
      </div>

    </div>
  );
};

export default Card;
