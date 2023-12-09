import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Cheatsheet() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen justify-center items-center font-bold font-['Inter'] text-6xl">
        <div className="flex justify-center items-center flex-col text-center">
          <h1>Comming Soon.</h1>
          <div className="h-5"></div>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </>
  );
}
