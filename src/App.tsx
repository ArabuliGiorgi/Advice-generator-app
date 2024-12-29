import { useState } from "react"
import { Main } from "./styled.components/AppStyle"
import MobileSpliter from "/images/pattern-divider-mobile.svg"
import DesktopSpliter from "/images/pattern-divider-desktop.svg"
import Dice from "/images/icon-dice.svg"
import axios from "axios"

function App() {
  const [advice, setAdvice] = useState({
    id: 117,
    text: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  });

  async function FetchData(){
    const response = await axios.get("https://api.adviceslip.com/advice");
    const data = response.data;
    return data;
  }
  function handleClick(){
    FetchData().then((data) => {
      setAdvice({
        id: data.slip.id,
        text: data.slip.advice
      });
    });
  }

  return (
    <Main>
      <div className="advice-block">
        <h1 className="header">ADVICE #{advice.id}</h1>
        <h1 className="advice">{`“${advice.text}”`}</h1>
        <img src={MobileSpliter} alt="splitter" className="mobile-splitter"/>
        <img src={DesktopSpliter} alt="splitter" className="desktop-splitter"/>
        <div className="button" onClick={() => handleClick()}>
          <img src={Dice} alt="dice" />
        </div>
      </div>
    </Main>
  )
}

export default App
