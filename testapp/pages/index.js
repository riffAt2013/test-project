import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import Card from "../components/card";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );

  const data = await res.json();

  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return (
    <div className="bg-slate-300">
      <Navbar></Navbar>

      <div className="relative mx-auto object-contain w-11/12 md:w-10/12 p-8">
        <Image
          src="/images/header.jpg"
          layout="responsive"
          width={600}
          height={300}
        />
      </div>

      <div className="text-5xl m-8 p-4 md:m-16 text-center font-bold border-t-2  animate-bounce border-cyan-900">
        Meal List
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap space-x-4 space-y-4 text-center pb-4 justify-center">
          {data.meals.map((singleMeal) => {
            return (
              <div key={singleMeal.idMeal}>
                <Link href={"meal/" + singleMeal.idMeal}>
                  <a>
                    <Card
                      name={singleMeal.strMeal}
                      imageURL={singleMeal.strMealThumb}
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
