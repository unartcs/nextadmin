import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
    const percent = 24;
  return (
    <div className="card-wrapper bg-softBg m-2 rounded-lg hover:cursor-pointer w-[100%] hover:bg-[#96693c]">
      <div className="card-top flex gap-2 p-5">
        <MdSupervisedUserCircle className=" " size={24} />
        <div className="card-content flex flex-col gap-2  flex-[1] justify-center">
          <h2 className="text-lg font-bold">Total Users</h2>
          <h2 className="text-base">10,590</h2>
          <h3 className="text-sm"><span className={`${percent > 1 ? 'text-[#63b063]' : 'text-[red]'}`}>{percent}%</span> {percent > 1 ? 'more' : 'less'} than previous week</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
