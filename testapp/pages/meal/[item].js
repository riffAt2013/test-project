import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export async function getServerSideProps({ query }) {
  const mealID = query.item;
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
  );

  const data = await res.json();

  const data2 = data.meals[0];
  return {
    props: { data2 },
  };
}

export default function Item({ data2 }) {
  return (
    <>
      <div className="bg-slate-300">
        <Navbar></Navbar>
        <div className="flex pt-4 flex-col items-center space-y-4 p-4">
          <a href={data2.strMealThumb}>
            <img
              className="w-auto p-4 h-96 rounded-3xl"
              src={data2.strMealThumb}
              alt="thumb"
            />
          </a>

          <h2 className="font-bold text-6xl font-serif text-center">
            {data2.strMeal}
          </h2>

          <div className="pt-4 flex flex-row space-x-8 ">
            <span className="font-semibold">Category: {data2.strCategory}</span>
            <span>||</span>
            <span className="font-semibold">Area: {data2.strArea}</span>
          </div>

          <div className="text-xl font-semibold border-b-2 border-cyan-900 text-start">
            Instructions:
          </div>

          <p className="text-start max-w-lg">{data2.strInstructions}</p>

          {/* list of ingred. */}
          <div>
            <div className="text-xl  font-semibold border-b-2 border-cyan-900 text-start">
              Ingredient List:
            </div>
            {Object.keys(data2)
              .filter((i) => {
                return i.includes("Ingredient");
              })
              .map((i) => {
                return <div className="p-2">{data2[i]}</div>;
              })}
          </div>

          <div className="text-xl font-semibold border-b-2 border-cyan-900 text-start">
            How to Make it!
          </div>
          <p>
            Since the video links provided by the API is not embeddable here is
            a clickable link: <br />{" "}
            <a
              href={data2.strYoutube}
              target="_blank"
              className="text-cyan-700 font-bold"
            >
              {data2.strYoutube}
            </a>
          </p>
          <iframe
            className="px-16 md:pb-6"
            width="560"
            height="315"
            src={data2.strYoutube}
          ></iframe>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
