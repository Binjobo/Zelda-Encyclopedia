import CommonInfo from "../../CommonInfo";

const MonsterInfo = ({ info, favItems, setFavItems }) => {
  return (
    <CommonInfo info={info} favItems={favItems} setFavItems={setFavItems} />
  );
};

export default MonsterInfo;
