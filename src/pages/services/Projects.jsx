import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";

const Projects = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Projects" />
        </div>
   </div>

    <p><b>EBDM</b><br />
        EBDM {'('}= Evidence Based Decision Making{')'} occurs by everyone, all around us, every second.
        <br /><br />Here are some examples:<br />
        <ul class="list-disc mb-8 ml-4">  
              <li> Breakfast and clothing picks </li>
              <li> Job and industry choices </li>
              <li> Everyday communication and interaction </li>
               </ul>
        
      The key is not to think about this when it does not matter, but rather when it absolutely does.<br />
      So when is this? For a start, when stakes and/or risks are high!
      <br /><br />
      </p>
      
      <p><b>KISS</b><br />
        KISS {'('}= Keep It Simple, Stupid{')'} is a concept that can literally be applied to anything in life.
        <br /><br />It typically deals with trying not to over-complicate decisions and actions. 
        <br /><br />
      </p>
    </Container>
  );
};

export default Projects;