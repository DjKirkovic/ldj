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

    <p><b>KISS</b><br />
        KISS {'('}= Keep It Simple, Stupid{')'} <br /><br />This section is the future home of many things interesting, great or plain ingenius. 
<br /><br />
 </p>
    <p><b>Web publishing</b><br />
        Writing for the web is impossibly hard. Trust me, I know the feeling!<br /><br />So what insights can <i>I</i> bring you here? First, here's my resume for web writing:<br />
        <ul class="list-disc mb-8 ml-4">  
              <li> Corporate websites </li>
              <li> Press releases on intl. portals like EurekAlert </li>
              <li> News articles </li>
              <li> Magazines </li>
              <li> Brochures </li>
               </ul>
        
      Next, here's my wisdom:<br />
      Find your scene: What's your message, why, and is the web at all the right place for it?
      <br /><br />
      </p>
    <p><b>Web research</b><br />
        The internet is packed 
    </p>
   
    </Container>
  );
};

export default Projects;