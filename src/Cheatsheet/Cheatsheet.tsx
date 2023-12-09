import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Cheatsheet() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen justify-center items-center font-bold font-['Inter'] text-6xl">
        <div>
          <h1>Comming Soon.</h1>
          <div className="h-5"></div>
          <Button
            className="self-center"
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
