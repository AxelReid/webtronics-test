import requests from "@/requests";
import db from "db.json";
import ToggleIcon from "../ToggleIcon";

const Feedbacks = () => {
  const remove = async (id: number) => await requests.feedback.delete(id);

  return (
    <div className="container mb-36 max-h-screen overflow-auto pr-4">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {db.feedback?.map((fd, i) => (
          <div key={i} className="b-linear-blue rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-clash text-2xl font-medium">{fd.name}</h3>
              <div
                className="flex cursor-pointer items-center justify-center rounded-full bg-white/10 p-1 hover:bg-white/20"
                onClick={() => remove(fd.id)}
              >
                <ToggleIcon open={false} className="rotate-45" />
              </div>
            </div>
            <div className="mt-4 border-l-4 border-[#9c37fdb2] pl-3">
              <p className="text-zinc-400">{fd.email}</p>
              <p className="">{fd.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
