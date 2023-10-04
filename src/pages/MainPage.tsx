import { useEffect, useState } from "react";
import { CustomButton } from "../components/CustomButton";
import { Hero } from "../components/Hero";
import { fetchCars } from "../utils";
import { ICarProps } from "../types";

export const MainPage = () => {
  const [cars, setCars] = useState<ICarProps[]>([]);
  useEffect(() => {
    fetchCars()
      .then((data: ICarProps[]) => setCars(data))
      .catch(() => alert("Loading problem"));
  }, []);

  // data control

  const isDataEmpty: boolean = !Array.isArray(cars) || cars.length < 1 || !cars;
  console.log(isDataEmpty);

  return (
    <div>
      <Hero />

      {/* catalog */}
      <div className="mt-12 padding-x padding-y max-width">
        {/* title */}
        <section className="hone__text-container">
          <h1 className="text-4xl font-extrabold">Cars Catalog</h1>
          <p>Explore More</p>
        </section>
        {/* filter */}
        <div></div>
        {/* cars list */}

        {isDataEmpty ? (
          <div className="home__error-container">
            <h2>Sorry no result! :/</h2>
          </div>
        ) : (
          <>
            <section>
              <div className="home__cars-wrapper">
                {cars.map(() => (
                  <div>CArs</div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* more */}
        <CustomButton
          title="More"
          desings="bg-primary-blue hover:bg-blue-800"
        />
      </div>
    </div>
  );
};
