import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Cheatsheet() {
  return (
    <>
      <div className="flex h-screen justify-center items-center font-bold font-['Inter'] text-6xl">
        <div>
          <h1>Comming Soon.</h1>
          <div className="h-5"></div>
          <Link to={"http://localhost:5173"}>
            <Button className="self-center">Go Back</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
