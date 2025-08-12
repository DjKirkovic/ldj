import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";

const Comms = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Communications" />
        </div>
   </div>

    <p><b>IT Support</b><br />
        Ever needed something IT support-related you just weren't getting? I know the feeling!<br /><br />Here's a mathematical equation example from a <u>company</u> perspective:<br />
        In W time you need to help X customers with Y issues and have Z resources to do it with
        ...only: Z is WAY insufficient. Like this:<br />
        W = time - 1 work day <br />
        X = customers - 100 people <br />
        Y = workload - 200 issues (i.e. avg. two per person)<br />
        Z = HR - 2 staff <br /><br />
      So how to proceed?<br /><br />
      Common corporate answer: Work poor Z-duo into the ground...in a frantic attempt to serve all X and/or resolve all Y within as little W as possible.<br /><br />
      My answer? Give Z 50 people each to make initial/holding contact with. Then tackle Y systematically based on priority - think ITIL. Then reward Z in hard times! <br />
      Reasoning? Support is about <u>people</u> - both X and Z. W and Y are just distracting conformities. By taking care of the people involved, you maximise business value.<br /><br />Morale: YOU, the company, need to support X+Z to best support YOURSELF!<br /><br />
    </p>
    <p><b>Web</b><br />
        The internet is packed. Astronomical amounts of contents, YouTubers, InstaGramers, Twitterers, Facebookers, Influencers, and not least visitors of all the aforementioned. <br />So, WHY?<br />
        Do we benefit swarming like bees around this honey stash? Not much. Do we overly THINK we will? YES! Agreeing on this part-false pretense, we may as well try to succeed. <br />
        Now then, what does this stash contain for us: <br /><br />
        
        <ul class="list-disc mb-8 ml-4">  
              <li> 
                Web Development? Stack Overflow, Medium, and of course AI like ChatGPT are your go-to resources.
              </li>
              <li> 
                Research? Articles, Wikis, product reviews, BBC Food, you name it the web has it! 
              </li>
              <li> 
                Entertainment? Netflix, Disney, YouTube, Spotify, Facebook, Twitter, news, sports... - the list is endless for this category!
              </li>
              <li> 
                Gaming? This category is so vast that I deliberately did not include it under entertainment - enough said.
              </li>
              </ul>

    </p>
    <p><b>App / Mobile</b><br />
        Are you on Android or IOS, into on-the-go working or using your phone as a pocket-sized entertainment system, or maybe your mobile is just for calls/texting?<br /><br />This section is the future home of many things interesting, great or plain ingenius. 
    </p>
   
    </Container>
  );
};

export default Comms;