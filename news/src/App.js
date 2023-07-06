import * as React from "react";
import "./App.css";

function randomId() {
  return Math.random().toString();
}

const data = [
  {
    id: randomId(),
    title: "When will the ODI World Cup 2023 start?",
    description:
      "ICC World Cup 2023: ICC announces schedule for 2023 men's ODI cricket world cup, starting on 5 October at Narendra Modi Stadium in Ahmedabad with England vs New Zealand match. India to host Pakistan after seven years, with India vs Pakistan match on 15 October in Ahmedabad."
  },
  {
    id: randomId(),
    title: "Where is the ICC 2023 World Cup schedule?",
    description:
      "10 venues will be playing host– Hyderabad, Ahmedabad, Dharamsala, Delhi, Chennai, Lucknow, Pune, Bengaluru, Mumbai and Kolkata. Guwahati and Thiruvananthapuram in addition to Hyderabad will host the warm-up matches from 29 September to 3 October."
  },
  {
    id: randomId(),
    title: "Has the World Cup 2023 schedule been announced?",
    description:
      "The schedule for the big event has been released by ICC. England and New Zealand kic k-off the event at the Narendra Modi Stadium on October 5. Muttiah Muralitharan, Geoff Allardyce, and Virender Sehwag have reached St Regis, Mumbai for the World Cup fixture announcement."
  },
  {
    id: randomId(),
    title: "Who will host the 2023 World Cup?",
    description:
      "The ICC has released the full schedule for the 2023 ODI World Cup that India will host in October-November. India's first match will be against Australia on October 8 and the team's final group stage match will be on November 11 against Qualifier 1."
  },
  {
    id: randomId(),
    title: "What time is the World Cup 2023 in India?",
    description:
      "It is believed that the schedule of the ODI World Cup 2023 could be announced on June 27 in the event which will be hosted by ICC. The event is slated to take place at the Astor Ballroom of St Regis Hotel in Mumbai, and it will begin from 11:30 AM onwards."
  },
  {
    id: randomId(),
    title: "How many ODI matches will India play in 2023?",
    description:
      "India cricket schedule for 2023: Full list of Test, ODI and T20I fixtures in 2023. India is scheduled to play eight Tests, 18 ODIs, and 17 T20Is, apart from the 2023 ICC Men's Cricket World Cup on home soil and the Asia Cup – find the schedule of the men's team with a full list of Test, ODI, and T20I fixtures in 2023."
  },
  {
    id: randomId(),
    title: "How many countries will participate in the 2023 Cricket World Cup?",
    description:
      "The tournament will be contested by 10 teams; England is the defending champions, having won the previous edition in 2019. It will be the first men's Cricket World Cup to be hosted solely by India, after co-hosting the 1987, 1996, and 2011 tournaments with other countries on the Indian subcontinent."
  }
];

export default function App() {
  const [selectedTitle, setSelectedTitle] = React.useState("");

  const handleClick = (e, title) => {
    setSelectedTitle(title === selectedTitle ? "" : title);
  };

  return (
    <div className="App">
      <h1>Cricket News</h1>
      <label>Max Items Limit: </label>
      <input
        type="text"
        onChange={(e) => {
          setSelectedTitle(e.target.value);
        }}
      />
      <input type="button" value="submit" />
      {data.map(({ id, title, description }) => {
        return (
          <article key={id} onClick={(e) => handleClick(e, title)}>
            <section className="title">{title}</section>
            {selectedTitle === title && (
              <section className="description">{description}</section>
            )}
          </article>
        );
      })}
    </div>
  );
}