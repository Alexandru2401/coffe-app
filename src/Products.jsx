import { data } from "./api/api";

export default function Productsss() {
  return (
    <div>
      {data.map((data) => {
        return (
          <div key={data.id} style={{ width: "600px" }}>
            <h2>{data.name}</h2>
            <img src={data.image} style={{ height: "300px" }} />
            <p>{data.description}</p>
            <ul>
              {data.recipeIngredient &&
                data.recipeIngredient.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
