import { CustomButton } from "./CustomButton";

export const Hero = () => {
  const flyTo = () => {
    alert("fly to");
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Fell It!, Drive</h1>
        <p className="hero__subtitle text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, adipisci
          ipsum sunt aut fuga, consequuntur cum maiores, cumque blanditiis
          officia voluptatibus! Sequi provident saepe animi repellendus iure
          impedit quisquam optio.
        </p>
        <CustomButton
          handleClick={flyTo}
          title="Explore Cars"
          desings="bg-primary-blue rounded-full mt-10"
        />
      </div>
      <div className="w-100 flex justify-center">
        <img src="/hero.png" className="img-fluid object-contain" />
      </div>
    </div>
  );
};
