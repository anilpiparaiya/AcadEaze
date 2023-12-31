import { formateDate } from "../../utils/formateDate";

const MentorAbout = () => {
  return (
    <div>
      <div>
        <h3
          className="text-[20px] leading-[30px] text-headingColor 
        font-semibold flex items-center gap-2"
        >
          About of
          <span>Anil Piparaiya</span>
        </h3>

        <p className="text__para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iure
          eius beatae facere. Nulla illo soluta distinctio numquam deserunt a
          perspiciatis hic? Quasi vero ipsum sunt dolorem quia? Quod,
          consectetur.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2023")} - {formateDate("09-13-2025")}
              </span>

              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Computer Science
              </p>
            </div>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              Massachusetts Institute of Technology, USA
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2019")} - {formateDate("08-13-2023")}
              </span>

              <p className="text-[15px] leading-6 font-medium text-textColor">
                Btech in Computer Science
              </p>
            </div>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              Indian Institute of Technology, Kanpur
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
            Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#ff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2019")} - {formateDate("08-13-2023")}
                </span>

                <p className="text-[16px] leading-6 font-medium text-textColor">
                    Sr. Member of Technical Staff
                </p>

                <p className="text-[14px] leading-5 font-medium text-textColor">
                    Bangalore Karnatakta India
                </p>
            </li>

            <li className="p-4 rounded bg-[#ff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2019")} - {formateDate("08-13-2023")}
                </span>

                <p className="text-[16px] leading-6 font-medium text-textColor">
                    Sr. Member of Technical Staff
                </p>

                <p className="text-[14px] leading-5 font-medium text-textColor">
                    Adobe Bangalore India
                </p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default MentorAbout;
