import { useEffect, useState } from "react";
import personne from '../images/nero.png'
const Logo = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleteting, setIsDeleting] = useState(false);
  let text = "FULL STACK";
  let speed = 70;
  let pause = 3000;

  useEffect(() => {
    let timeOut;
    if (!isDeleteting && currentIndex < text.length) {
      timeOut = setTimeout(() => {
        setDisplayText(prev => prev + text.charAt(currentIndex));
        setCurrentIndex(prev => prev + 1)
      }, speed);

    } else if (isDeleteting && currentIndex > 0) {
      timeOut = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1)
      }, speed);

    } else {
      timeOut = setTimeout(() => {
        setIsDeleting(prev => !prev);
      }, pause);
    }
    return () => clearTimeout(timeOut);

  }, [currentIndex, isDeleteting, text, speed, pause])

  return (
    <div className="flex flex-col gap-5 items-center justify-end mt-5">
      <figure className="move-top">
        <img src={personne} alt="Alain vincet" className="sm:max-w-sm"/>
      </figure>
      <div className="">
        <h1 className="text-2xl text-center text-bold text-indigo-700">DEVELOPPEUR {displayText}</h1>
      </div>
    </div>
  );
};

export default Logo;