import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      {props.isGenerator ? (
        <>
          <header className=" w-screen flex justify-between  py-6 px-16 items-center">
            <Button
              variant={"ghost"}
              className="text-xl font-bold font-['Ubuntu_Mono'] text-slate-950/80 antialiased hover:bg-slate-400/20"
            >
              #.mdfiles
            </Button>
            <Button
              onClick={() => {
                navigate(-1);
              }}
              className=" font-['Inter'] font-semibold text-md bg-none"
              variant={"ghost"}
            >
              Cheatsheet
            </Button>
          </header>
        </>
      ) : null}

      {props.isHomepage ? (
        <>
          <header className=" w-screen flex justify-between  py-6 px-16 items-center absolute">
            <Button
              variant={"ghost"}
              className="text-xl font-bold font-['Ubuntu_Mono'] text-slate-950/80 antialiased hover:bg-slate-400/20"
            >
              #.mdfiles
            </Button>
          </header>
        </>
      ) : null}
    </>
  );
}

export default Header;
