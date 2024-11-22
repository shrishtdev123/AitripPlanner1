import { Button } from "../ui/button";

export const Header = () => {
  return (
    <div className="flex">
      <div className="p-3 shadow-sm flex justify-between items-center w-full">
        <img src="logo.svg" alt="logo" />
        <Button className="absolute right-2">Sign in</Button>
      </div>
    </div>
  );
};
