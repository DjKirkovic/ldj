import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";

const Life = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Life" />
        </div>
   </div>

    <p><b>Any idea what to improve?</b><br />
        This question is always a good place to start! What are you looking to do? Here are some suggestions/inspiration:<br />
        <ul class="list-disc mb-8 ml-4">  
              <li> Gain: money, time, job, connections, excitement,... </li>
              <li> Correct: bad habits, mistakes, choices, actions,...</li>
              <li> Win: clients, cases, confidence, acknowledgement,...</li>
              <li> Avoid: Ill health, poor decisions, material or emotional damage,... </li>
        </ul>  
      <br /><br />
      </p>
      
      <p><b>{""}Window shopping{""} - find it, do it!</b><br />
        With 8 billion people on this planet, why not look around you for some {""}window shopping{""} inspiration? The human race is literally one giant showcase of behaviour, appearance and almost anything else imaginable<br />
        The famous song by R. Kelly {'(""'}I Believe I Can Fly{'"")'} widely broadcast this ideology back in 1996.<br />
        One word of advice, though: make sure you dedicate time to truly 'try on' those clothes you bought - not to mention celebrate when the fit is just right!<br />
      </p>
    </Container>
  );
};

export default Life;