import { Link } from "react-router-dom";
import { Button } from "./ui/button";
function Header(props) {
  return (
    <>
      {props.isGenerator ? (
        <>
          <header className=" w-screen flex justify-between  py-6 px-16 items-center max-md:px-8 max-sm:px-4">
            <Link to={"/"}>
              <Button
                variant={"ghost"}
                className="text-xl font-bold font-['Ubuntu_Mono'] text-slate-950/80 antialiased hover:bg-slate-400/20 hover:animate-pulse"
              >
                #.mdfiles
              </Button>
            </Link>
            <Link to={"/cheatsheet"}>
              <Button
                className=" font-['Inter'] font-semibold text-md bg-none hover:bg-slate-400/20"
                variant={"ghost"}
                size={"sm"}
              >
                Cheatsheet
              </Button>
            </Link>
          </header>
        </>
      ) : null}

      {props.isHomepage ? (
        <>
          <header className=" w-screen flex justify-between  py-6 px-16 items-center absolute max-md:justify-center max-md:py-2">
            <Link to={"/"}>
              <Button
                variant={"ghost"}
                className="text-xl font-bold font-['Ubuntu_Mono'] text-slate-950/80 antialiased hover:bg-slate-400/20 hover:animate-pulse"
              >
                #.mdfiles
              </Button>
            </Link>
          </header>
        </>
      ) : null}
      {props.isCheatsheet ? (
        <>
          <header className=" w-screen flex justify-between absolute py-6 px-16 items-center max-md:px-8 max-sm:px-4">
            <Link to={"/"}>
              <Button
                variant={"ghost"}
                className="text-xl font-bold font-['Ubuntu_Mono'] text-slate-950/80 antialiased hover:bg-slate-400/20 hover:animate-pulse"
              >
                #.mdfiles
              </Button>
            </Link>
            <Link to={"/generator"}>
              <Button
                className=" font-['Inter'] font-semibold text-md bg-none hover:bg-slate-400/20"
                variant={"ghost"}
                size={"sm"}
              >
                Generator
              </Button>
            </Link>
          </header>
        </>
      ) : null}
    </>
  );
}

export default Header;
