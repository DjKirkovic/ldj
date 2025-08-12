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