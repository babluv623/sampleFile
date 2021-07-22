import React from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  let history = useHistory();
  const { recipes } = props;
  return (
    <>
      <button onClick={() => history.goBack()}>Back</button>
      <button style={{ float: "right" }} onClick={() => history.goForward()}>
        Forward
      </button>
      <div className="item">
        {recipes.map((recipe) => (
          <>
            <p>
              <span>{recipe.id}</span> {recipe.name} {recipe.like ? "❤️" : "♥️"}
              <ul>
                {recipe.ings.map((ing) => (
                  <li>{ing}</li>
                ))}
              </ul>
            </p>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
