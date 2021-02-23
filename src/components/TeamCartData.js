import React from "react";

const teamdatas = [
  {
    id: 1,
    name: "Elizabeth Teylor",
    work: "President",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 2,
    name:"Jhon Smith",
    work: "Marketing",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 3,
    name: "Jonshon Joseph",
    work: "Marketing",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 4,
    name: "Elizabeth Teylor",
    work: "President",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 5,
    name:"Jhon Smith",
    work: "Marketing",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 6,
    name: "Jonshon Joseph",
    work: "Marketing",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
];

const TeamCartData = () => {
  return teamdatas.map((teamdata) => (
    <div key={teamdata.id} teamdatas={teamdatas} className="col-lg-4 col-md-6 col-sm-12 col-12 mt-5">
        <div className="team-cart-text">
          <h4>{teamdata.name}</h4>
          <h5>{teamdata.work}</h5>
          <p>{teamdata.about}</p>
      </div>
    </div>
  ));
};

export default TeamCartData;
