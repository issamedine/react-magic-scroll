import { useState } from "react";

/* IPORT COMPONENTS */
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import ViewFour from "./components/pages/ViewFour";
import ViewOne from "./components/pages/ViewOne";
import ViewThree from "./components/pages/ViewThree";
import ViewTwo from "./components/pages/ViewTwo";
import Footer from "./utils/Footer";
import NavMenu from "./utils/NavMenu";

/* IMPORT STYLE */
import "./App.scss";

const App = () => {
  const [animation, setAnimation] = useState(""); // type of animation
  const [currentIndex, setCurrentIndex] = useState(0); // index of view

  // function to switch to the next view
  const nextIndex = () => {
    setAnimation("up");
    if (currentIndex === 3) {
      return setCurrentIndex(0);
    }

    setCurrentIndex(currentIndex + 1);
  };

  // function to switch to the previous view
  const prevIndex = () => {
    setAnimation("down");
    if (currentIndex === 0) {
      return setCurrentIndex(3);
    }
    setCurrentIndex(currentIndex - 1);
  };

  // function to display the corresponding view
  const toggleViews = () => {
    if (currentIndex === 0)
      return <ViewOne animation={animation} currentIndex={currentIndex} />;
    if (currentIndex === 1)
      return <ViewTwo animation={animation} currentIndex={currentIndex} />;
    if (currentIndex === 2)
      return <ViewThree animation={animation} currentIndex={currentIndex} />;
    if (currentIndex === 3)
      return <ViewFour animation={animation} currentIndex={currentIndex} />;
  };

  return (
    <div className="App">
      <NavMenu />
      <div className="container-scroll-wheel">
        <ReactScrollWheelHandler upHandler={prevIndex} downHandler={nextIndex}>
          {toggleViews()}
        </ReactScrollWheelHandler>
      </div>
      <Footer />
    </div>
  );
};

export default App;
