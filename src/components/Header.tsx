import { DarkModeToggle } from "./DarkModeToggle";
import { SearchBar } from "./SearchBar";
import { HeaderIcons } from "./HeaderIcons";
import Logo from "./Logo";
import SubHeader from "./SubHeader";

export function Header() {
  return (
    <>
      <header className="hidden lg:block w-full mt-4 z-40">
        <div className="w-full max-w-[1350px] h-[70px] mx-auto bg-primary dark:bg-primary rounded-[20px] flex items-center justify-between px-6 transition-shadow duration-[2000ms] ease-in-out drop-shadow-lg dark:shadow-accent">
          <div className="w-[20%] flex items-center">
            <Logo />
          </div>
          <div className="w-[60%] flex-grow flex justify-center">
            <SearchBar />
          </div>
          <div className="w-[20%] flex items-center justify-end space-x-6">
            <HeaderIcons />
            <DarkModeToggle />
          </div>
        </div>
        <SubHeader />
      </header>
    </>
  );
}
