import React, { useEffect } from "react";
import { ImMan, ImWoman } from "react-icons/im";
import { FaChild } from "react-icons/fa";
import { MdElderly } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCat, updateData, updatePrice, updateWho } from "../../Store/DataStore";
import { Slider } from "@mui/material";
import Christmas from "../../christmas.json";
import Birthday from "../../christmas.json";
import School from "../../christmas.json"

export default function Header() {
  console.log(Christmas)
  const marks = [{value : 0, label : '$10'}, {value : 250, label : '$250'}, {value : 500, label : '$500'}, {value : 750, label : '$750'}, {value : 1000, label : '$999+'}]
  const { who, title } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleWho = (e) => {
    if (e === who) {
      dispatch(updateWho("all"));
      document.querySelector(`#${e}`).style.color = "black";
    } else {
      document.querySelector(`#${e}`).style.color = "red";
      if (who !== "all")
        document.querySelector(`#${who}`).style.color = "black";
      dispatch(updateWho(e));
    }
  };
  const getPrice = (rate) => {
    if (rate === 0) dispatch(updatePrice(10));
    else if (rate === 1000) dispatch(updatePrice(1000000));
    else dispatch(updatePrice(rate));
  };
  useEffect(() => {
    if (title === 'Christmas Gifts') dispatch(updateData(Christmas))
    else if (title === 'Birthday Gifts') dispatch(updateData(Birthday))
    else if (title === 'Back to School') dispatch(updateData(School))
  }, [title])

  return (
    <div className="main_header">
      <div className="header">
        <p id="title">{title}</p>
        <div className="category">
          <p>SELECT CATEGORY</p>
          <select id="category" onChange={() => dispatch(updateCat(document.getElementById("category").value))}>
            <option id="option">Trending</option>
            <option id="option">Lifestyle</option>
            <option id="option">Home Decor</option>
            <option id="option">Electronics</option>
            <option id="option">Appliances</option>
          </select>
        </div>
        <div className="vert_line"></div>
        <div className="search">
          <p id="sea">GET FOR</p>
          <div className="search_list">
            <div className="search_tag" id="man" onClick={() => handleWho("man")}>
              <ImMan id="img" />
              <p>Man</p>
            </div>
            <div className="search_tag" id="woman" onClick={() => handleWho("woman")}>
              <ImWoman id="img" />
              <p>Woman</p>
            </div>
            <div className="search_tag" id="kid" onClick={() => handleWho("kid")}>
              <FaChild id="img" />
              <p>Kids</p>
            </div>
            <div className="search_tag" id="elder" onClick={() => handleWho("elder")}>
              <MdElderly id="img" />
              <p>Elderly</p>
            </div>
            <div className="search_tag" id="friend" onClick={() => handleWho("friend")}>
              <GiThreeFriends id="img" />
              <p>Friends</p>
            </div>
          </div>
        </div>
        <div className="vert_line"></div>
        <div className="price">
          <p>SET PRICE</p>
          <Slider
            id="slider"
            defaultValue={1000}
            step={250}
            min={0}
            max={1000}
            marks={marks}
            onChange={(event) => getPrice(event.target.value)}
            sx={{
              color: "gray",
              height: 2,
              marginTop: '-5px',
              "& .MuiSlider-markLabel": {
                fontSize: '11px',
                color: 'black',
                marginTop: '-8px'
              },
              "& .MuiSlider-thumb": {
                width: 7,
                height: 7,
                color: "red",
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                  width: 10,
                  height: 10,
                },
              },
              "& .MuiSlider-track": {
                color: "red",
              },
            }}
          />
      </div>
    </div>
  </div>
  );
}
