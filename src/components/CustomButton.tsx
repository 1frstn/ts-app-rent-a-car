import { IButtonProps } from "../types";

export const CustomButton = ({
  title,
  desings,
  btnType,
  handleClick,
}: IButtonProps) => {
  return (
    <button
      onClick={handleClick}
      disabled={false}
      type="submit"
      className={`custom-btn ${desings}`}
    >
      {title}
    </button>
  );
};
