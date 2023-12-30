import { mentors } from "./../../assets/data/mentors";
import MentorCard from "./MentorCard";

const MentorList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {mentors.map((mentor) => <MentorCard key={mentor.id} mentor={mentor}/>)}
    </div>
  );
};

export default MentorList;
