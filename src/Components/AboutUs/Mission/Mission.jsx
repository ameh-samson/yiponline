import Card from "../../Card/Card";
import missionImg from "../../../assets/corporation.jpg";

const Mission = () => {
  return (
    <div>
      <Card
        imageUrl={missionImg}
        title="Mission"
        content=" Building accessible tech to Structure & Scale-up up African Businesses!"
      />
    </div>
  );
};

export default Mission;
