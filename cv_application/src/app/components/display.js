import React from "react";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

const Display = (props) => {
  const mainData = props.info;
  return (
    <div
      className="block print:block"
      style={{
        border: "1px solid black",
        width: "8.5in",
        height: "11in",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      {/* Basic Info*/}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4 tracking-widest">
          HITESH ADHIKARI
          {/* {console.log(mainData.basicInfo.data.fullname)} */}
        </h1>
        <div
          className="flex text-
         gap-28"
        >
          <ul>
            <li className="flex gap-2 items-center ">
              <AtSign className="size-4" />
              example@email.com
            </li>
            <li className="flex gap-2 items-center ">
              <Phone className="size-4" />
              123-456-7890
            </li>
          </ul>
          <ul>
            <li className="flex gap-2 items-center ">
              <MapPin className="size-4" />
              New York, NY
            </li>
            <li className="flex gap-2 items-center ">
              <GitHub className="size-4" />
              github/hiteshadhikari
            </li>
          </ul>
        </div>
      </section>

      <div className=" flex flex-row gap-16">
        {/* Education & Skills Info*/}

        {/* Education Info */}
        <section className="flex w-1/2 flex-col gap-20">
          <div className="education_info ">
            <h1 className="text-2xl font-bold mb-4 tracking-wider">
              EDUCATION
            </h1>
            <div className="mb-4">
              <h3 className=" text-xl font-semibold tracking-tight">
                Example University
              </h3>
              <ul className="text-base">
                <li>Boston, MA</li>
                <li>M.S. in Computer Science</li>
                <li>May 2018</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Example School
              </h3>
              <ul className="text-base ">
                <li>Boston, MA</li>
                <li>M.S. in Computer Science</li>
                <li>May 2018</li>
              </ul>
            </div>
          </div>

          {/*Skills Info  */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-4 tracking-wider">SKILLS</h1>
            <div className="mb-4">
              <h3 className="text-xl font-semibold tracking-tight">
                Programming
              </h3>
              <ul className="text-base">
                <li>Javascript</li>
                <li>React</li>
                <li>C++</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className=" text-xl font-semibold tracking-tight">
                Languages
              </h3>
              <ul className="text-base">
                <li>English</li>
                <li>Spanish</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Info */}
        <section className="w-full">
          <div className="education_info">
            <h1 className="text-2xl font-bold mb-4 tracking-wider">
              EXPERIENCE
            </h1>
            <div className="mb-6">
              <h3 className=" mb-2 text-xl font-semibold tracking-tight">
                Example Studio
              </h3>
              <ul className="text-base">
                <li>Boston, MA</li>
                <li>June 2018 - Present</li>
                <li>
                  Magna etiam tempor orci eu. Sollicitudin tempor id eu nisl
                  nunc mi ipsum. Aliquam purus sit amet luctus venenatis lectus
                  magna fringilla. Mi ipsum faucibus vitae aliquet.
                </li>
              </ul>
            </div>

            <div>
              <h3 className=" mb-2 text-xl font-semibold tracking-tight">
                Example School
              </h3>
              <ul className="text-base">
                <li>Boston, MA</li>
                <li>August 2014 - September 2016</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Display;
