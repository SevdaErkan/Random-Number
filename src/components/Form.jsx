import { useState } from "react";

const Form = () => {
   const [min, setMin] = useState("");
   const [max, setMax] = useState("");
   const [random, setRandom] = useState(0);

   const randomNum = (min, max) => {
       if (min < max) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min)) + min;
      } else {
         alert("Please input right number");
      }
   };

   return (
      <div>
         {random > 0 ? <div>{random}</div> : ""}
         <form>
            <label htmlFor="number">Lower Limit</label>
            <input
               type="number"
               value={min}
               onChange={(e) => setMin(e.target.value)}
            />
            <label htmlFor="number">Upper Limit</label>
            <input
               type="number"
               value={max}
               onChange={(e) => {
                  setMax(e.target.value);
               }}
            />
            <div id="buttons">
               <button
                  className="btns generate"
                  onClick={(e) => {
                     e.preventDefault();
                     setRandom(randomNum(min, max));
                  }}
               >
                  Generate
               </button>
               <button
                  className="btns clear"
                  onClick={(e) => {
                     e.preventDefault();
                     setRandom("");
                     setMin("");
                     setMax("");
                  }}
               >
                  Clear
               </button>
            </div>
         </form>
      </div>
   );
};
export default Form;
