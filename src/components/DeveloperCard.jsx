import React from "react";
import Developer from "./Developers";

function DeveloperCard() {
  return (
    <>
      <h1>CollegeZio Team: </h1>
      <div>
        <Developer
          collegeName={"BTech (CSE)"}
          avatarUrl={
            "https://media.licdn.com/dms/image/D4D03AQGTJeqZM0pVkw/profile-displayphoto-shrink_800_800/0/1688226004777?e=1707350400&v=beta&t=9lu5ohcXVdPpXyyWWhWYQ5G2fk_jg7831FsjSwngN7c"
          }
          name={"Mayank Pal"}
          role={"MERN Stack Developer"}
          bio={
            "Enthusiastic and detail-oriented Computer Science Engineering student with a passion for Web Development and a solid foundation in MERN stack technologies, AWS Cloud, Netlify, Git & GitHub."
          }
          socialLinks={"https://www.instagram.com/maayankpal/"}
        ></Developer>
      </div>
      <hr />

      <div>
        <div>
      <Developer
          collegeName={"BTech from Indian Institutes of Technology, Delhi"}
          avatarUrl={
            "https://media.licdn.com/dms/image/D4D03AQFzU6Jw9pfEHA/profile-displayphoto-shrink_800_800/0/1664895300217?e=1707350400&v=beta&t=uDrAoDS-rUK3A_cZwqhnol4OZX9oJ4kCbkiZ-U5JZCA"
          }
          name={"Sahil Beck"}
          role={"Cloud Computing"}
          bio={
            "Enter the realm of Cloud Computing with Sahil Beck, our cloud virtuoso. Sahil seamlessly navigates the digital skies, architecting scalable and resilient cloud solutions. With an in-depth understanding of cloud technologies, he transforms complex infrastructures into efficient, secure, and high-performance ecosystems. Sahil Beck: where innovation meets the cloud, crafting digital landscapes that elevate businesses to new heights."
          }
          socialLinks={"https://www.instagram.com/sahil_beck_/"}
        ></Developer></div>
        <hr />
        <Developer
          collegeName={"BTech (IT) from Delhi Technological University(DTU)"}
          avatarUrl={
            "https://media.licdn.com/dms/image/D4D03AQGXsRFZEhRvdg/profile-displayphoto-shrink_800_800/0/1672410573235?e=1707350400&v=beta&t=kq8LAjD8v-LpYAKKlPZO85EJa05lZjQ59G26GepNRr4"
          }
          name={"KrishanVeer Singh"}
          role={"Frontend Developer"}
          bio={
            "Meet KrishanVeer Singh, a Frontend Developer weaving digital magic. With a blend of artistic flair and technical prowess, KrishanVeer transforms concepts into captivating web interfaces. His passion lies in creating immersive user experiences through sleek and responsive designs. Always at the forefront of web development trends, KrishanVeer is more than a coder—he's a digital storyteller crafting visually stunning narratives for the online world, where every click is an adventure."
          }
          socialLinks={"https://www.instagram.com/k_veer3303/"}
        ></Developer>
      </div>
      <hr />
      <div>
        <Developer
          collegeName={"BTech (IT) from Delhi Technological University(DTU)"}
          avatarUrl={
            "https://media.licdn.com/dms/image/D4E03AQEFVP27x-__Rw/profile-displayphoto-shrink_800_800/0/1674384891708?e=1707350400&v=beta&t=SyF1s71Au0DoMJoqZ-Kkw6uxnyUYGCFzivKg5ded_GU"
          }
          name={"Madhur Gupta"}
          role={"Frontend Developer"}
          bio={
            "Meet Madhur Gupta, the wizard behind seamless digital experiences. As a Backend Developer, Madhur crafts robust foundations for web applications, blending coding precision with scalability. His passion for optimizing performance and staying ahead in backend technologies makes him the architect of reliable and innovative digital ecosystems. Madhur Gupta: where code meets scalability, and digital excellence begins."
          }
          socialLinks={"https://www.instagram.com/_.madhur__/"}
        ></Developer>
        <Developer
          collegeName={"BTech (IT) from Delhi Technological University(DTU)"}
          avatarUrl={
            "https://media.licdn.com/dms/image/D4E03AQH1r2lXFnLRvA/profile-displayphoto-shrink_800_800/0/1674051621908?e=1707350400&v=beta&t=h7R96GsiKZFwV3tdl3wCFCbD7a35W8WMhQuQ7Oj4s64"
          }
          name={"Harsh Kumar"}
          role={"Marketing Head"}
          bio={
            "Meet Harsh Kumar, our Marketing Maestro, orchestrating impactful campaigns and brand strategies. With a keen eye for market dynamics and a strategic mindset, Harsh crafts compelling narratives that resonate. His innovative approach leverages data-driven insights to drive brand awareness and engagement. Harsh Kumar: not just a marketing head, but a visionary sculptor of brand stories, shaping perceptions and leaving a lasting imprint in the dynamic landscape of digital marketing."
          }
          socialLinks={"https://www.instagram.com/harsh.x.y/"}
        ></Developer>
        
      </div>
      <hr />
    </>
  );
}

export default DeveloperCard;
