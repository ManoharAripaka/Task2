import React, { useEffect } from "react";
import "./Body.css";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { updateCardData, updateDisplay, updatePosition } from "../../Store/DataStore";

export default function Body() {
  const { who, cat, price, data, title } = useSelector(state => state.data)
  console.log(data)
  const dispatch = useDispatch()
  const displayCard = (eventData) => {
    dispatch(updatePosition(window.event))
    dispatch(updateCardData(eventData))
    dispatch(updateDisplay('block'))
  }
  const handlePrev = () => {
    document.querySelector('.body').scrollLeft -=1235
  }
  const handleNext = () => {
    if (document.querySelector('.body').scrollWidth - document.querySelector('.body').scrollLeft > 1260) document.querySelector('.body').scrollLeft +=1235
  }
  
  useEffect(() => {
    document.querySelector('.body').scrollLeft = 0
  }, [who, cat, price, title])
  
  return (
    <div className="main" onMouseOver={() => dispatch(updateDisplay("none"))}>
      <Card />
      <div className="button">
        <button onClick={handlePrev}>&lt;</button>
      </div>
      <div className="body">
        {data.map((each) => (
          (each.for.includes(who,0) && each.category.includes(cat,0) && each.price <= price) ? (
            <div className='inside' onMouseEnter={() => displayCard(each)} >
              <img id="image" src={each.image} alt="" />
              <p id="name" >{each.product_name}</p>
              <p id="price" >$ {each.price}</p>
          </div>
          ) : null
        ))}
      </div>
      <div className="button">
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}
