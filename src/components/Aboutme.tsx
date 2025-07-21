export const Aboutmyselft = () => {
  const skills = [
    {
      title: "Frontend Developer",
      Head: "Languages",
      level: 4,
      skills: [
        { name: "HTML", level: 4 },
        { name: "CSS", level: 3 },
        { name: "JavaScript", level: 3 },
      ],
    },
    {
      title: "Backend Developer",
      Head: "Languages",
      level: 3,
      skills: [
        { name: "Node.js", level: 3 },
        { name: "MongoDB", level: 2 },
        { name: "Express", level: 3 },
      ],
    },
    {
      title: "Junior Dev",
      Head: "LanguageA",
      level: 1,
      skills: [
        { name: "Git", level: 2 },
        { name: "Linux", level: 1 },
        { name: "Docker", level: 2 },
      ],
    },
  ];

  const getLevelText = (level: number) => {
    switch (level) {
      case 1:
        return "Beginner";
      case 2:
        return "Basic";
      case 3:
        return "Advanced";
      case 4:
        return "Expert";
      default:
        return "";
    }
  };

  return (
    <section className=" max-w-[1152px] mx-auto mt-[4rem] mb-[6rem]">
      <div className="max-w-[1100px] grid grid-cols-2 mb-[4rem]  ">
        <div>
          <img
          src="/images/me1.png"
          alt="me"
          width={200}
          height={200}
          className="block  mx-[2rem]  "
        />
        <h1 className="font-orbitron font-black text-[2rem] leading-[1] mt-[1rem]">
          <span className="neon-text-green">WHO ARE YOU ?</span>
        </h1>
        </div>
        <div className="retro-card text-center">
        <h1 className="font-orbitron font-black text-[2rem] leading-[1] mt-[1rem]">
          <span className="neon-text-green">Hello </span>
        </h1>
        </div>
        
      </div>

      <div className="grid grid-cols-3 gap-[4rem] mt-12 text-center ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="retro-card p-6 group hover:scale-105 duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-orbitron font-bold text-[#39FF14]">
              {skill.title}
            </h3>
            <p className="text-white/70 text-sm mb-4">{skill.Head}</p>

            <ul className="text-sm text-center p-[0] mx-[1rem] ">
              {skill.skills.map((item, i) => (
                <li
                  key={i}
                  className="text-white/90 flex flex-col items-end"
                >
                  <div className="flex flex-row justify-between w-full p-[2px]">
                    <div>{item.name}</div>
                    <div className="flex flex-col justify-end items-end">
                      <div className="text-[#39FF14]">{getLevelText(item.level)}
                      </div>
                      <div className="text-[#39FF14] mt-1 ">
                        {"●".repeat(item.level)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
