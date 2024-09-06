
// components 
// is component ko hum kahin bi use kar sakte hain import krwa kar
// React Component is a Javascript function 

function Button({ label, bgColor }) {
  console.log(label);

  return (
    <>
      <button
        className={`bg-gray-600 ${
          bgColor ? bgColor : "bg-gray-600"
        } text-white m-4 p-3 rounded-md font-sans`}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
