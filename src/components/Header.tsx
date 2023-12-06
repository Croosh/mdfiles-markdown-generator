import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Header(props) {
  return (
    <>
      {props.isGenerator ? (
        <>
          <header className=" w-screen flex justify-between  py-6 px-16 items-center">
            <Link to={"http://localhost:5173/"}>
              <div className="text-xl font-bold font-['Ubuntu_Mono'] text-slate-950/80 antialiased">
                #.mdfiles
              </div>
            </Link>
            <Link to={"http://localhost:5173/cheatsheet"}>
              <Button
                className=" font-['Inter'] font-semibold text-md bg-none"
                variant={"ghost"}
              >
                Cheatsheet
              </Button>
            </Link>
          </header>
        </>
      ) : null}

      {props.isHomepage ? (
        <>
          <header className=" w-screen flex justify-between  py-6 px-16 items-center absolute">
            <Link to={"http://localhost:5173/"}>
              <div className="text-xl font-bold font-['Ubuntu_Mono'] text-slate-950/80 antialiased">
                #.mdfiles
              </div>
            </Link>
          </header>
        </>
      ) : null}
    </>
  );
}

export default Header;
