import { useState } from "react";
import "./styles.css";

var movieDictionary = {
  Comedy: [
    { name: "Hera Pheri(2000) ", ratings: "NA" },
    { name: "Hungama(2003) ", ratings: "NA" },
    { name: "Hulchul(2004) ", ratings: "NA" },
    { name: "Garam Masala (2005) ", ratings: "NA" },
    { name: "Malamaal Weekly (2006)", ratings: "NA" },
    { name: "Bhagam Bhag (2006)", ratings: "NA" },
    { name: "Dhol (2007)", ratings: "NA" },
    { name: "Bhool Bhulaiyaa (2007)", ratings: "NA" },
    { name: "De Dana Dan (2009)", ratings: "NA" },
    { name: "Khatta Meetha (2010)", ratings: "NA" },
    { name: "Billu (2009)", ratings: "NA" },
    { name: "Chup Chup Ke (2006)", ratings: "NA" }
  ],
  Action: [
    { name: "Sholay ", ratings: "8.2/10" },
    { name: "Sarfarosh ", ratings: "8.1/10" },
    { name: "Khakee ", ratings: "7.4/10" },
    { name: "Ghajini ", ratings: "7.4/10" },
    { name: "Wanted", ratings: "6.6/10" }
  ],
  Drama: [
    { name: "Black Friday(2004) ", ratings: "8.5/10" },
    { name: "3 Idiots(2009) ", ratings: "8.4/10" },
    { name: "Swades(2004)  ", ratings: "8.2/10" },
    { name: "Anand (1971) ", ratings: "8.2/10" },
    { name: "Rang De Basanti (2006) ", ratings: "8.1/10" }
  ],
  Horror: [
    { name: "Manichithrathazhu (1993) ", ratings: "8.8/10" },
    { name: "Tumbbad (2018) ", ratings: "8.3/10" },
    { name: "Ravening (2019) ", ratings: "8/10" },
    { name: "Pizza (II) (2012) ", ratings: "8/10" },
    { name: "Stree (2018) ", ratings: "7.6/10" },
    { name: "13B: Fear Has a New Address (2009)", ratings: "7.4/10" }
  ],
  Mystery: [
    { name: "Drishyam (2015) ", ratings: "8.2/10" },
    { name: "Talvar (2015) ", ratings: "8.2/10" },
    { name: "Kahaani (2012) ", ratings: "8.1/10" },
    { name: "Pink (III) (2016) ", ratings: "8.1/10" },
    { name: "Ugly (2013) ", ratings: "8/10" }
  ],
  Romance: [
    { name: "Dilwale Dulhania Le Jayenge (1995) ", ratings: "8.1/10" },
    { name: "My Name Is Khan (2010) ", ratings: "8/10" },
    { name: "Kal Ho Naa Ho (2003) ", ratings: "7.9/10" },
    { name: " Jab We Met (2007) ", ratings: "7.9/10" },
    { name: "Veer Zaara (2004) ", ratings: "7.8/10" }
  ],
  Suggested: [
    { name: "Zindagi Na Milegi Dobara (2011) ", ratings: "8.2/10" },
    { name: "Dil Chahta Hai(2001) ", ratings: "8.1/10" },
    { name: "Jodhaa Akbar (2008) ", ratings: "7.6/10" },
    { name: "Dear Zindagi(2016) ", ratings: "7.5/10" },
    { name: "Yeh Jawaani Hai Deewani(2013) ", ratings: "7.2/10" }
  ],
  WebSeries: [
    { name: "Kota Factory (2019–2021) ", ratings: "9.2/10" },
    { name: "TVF Pitchers (2015) ", ratings: "9.1/10" },
    { name: "The Family Man (2019– ) ", ratings: "8.8/10" },
    { name: "Special OPS (2020– ) ", ratings: "8.7/10" },
    { name: "Sacred Games (2018–2019) ", ratings: "8.6/10" },
    { name: "Mirzapur (2018) ", ratings: "8.5/10" },
    { name: "Asur: Welcome to Your Dark Side (2020– ) ", ratings: "8.5/10" },
    { name: "Permanent Roommates ", ratings: "8.6/10" }
  ]
};
var categories = Object.keys(movieDictionary);
export default function App() {
  var [movie, setMovie] = useState("WebSeries");

  function clickHandler(event) {
    setMovie(event);
    console.log(event);
  }

  return (
    <div className="App">
      <h1>
        🎦 <i>Watchlist</i>
      </h1>
      <h4>chackout top rated movies</h4>
      <span>
        {categories.map(function (items) {
          return <button onClick={() => clickHandler(items)}> {items}</button>;
        })}
      </span>
      <ul>
        {movieDictionary[movie].map((choice) => (
          <li key={choice.name}>
            {" "}
            <div>{choice.name}</div>
            <br />
            <div>Ratings: {choice.ratings}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}