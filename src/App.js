import React, { useState } from "react";
import "./styles.css";

var songsDB = {
  Sufi: [
    {
      title: "Sanu Ek Pal",
      Singer: "Rahat Fateh Ali Khan",
      movie: "Raid",
      released: 2018,
      rating: "⭐⭐⭐⭐",
      img:
        "https://a10.gaanacdn.com/images/song/31/23062631/crop_480x480_1518442349.jpg"
    },
    {
      title: "Khwaja Mere Khwaja",
      Singer: "A.R.Rahman",
      movie: "Jodhaa Akbar",
      released: 2008,
      rating: "⭐⭐⭐",
      img:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E00097886950.jpg"
    },
    {
      title: "O re Piya",
      Singer: "Rahat Fateh Ali Khan",
      movie: "Aaja Nachle",
      released: 2008,
      rating: "⭐⭐⭐⭐",
      img:
        "https://a10.gaanacdn.com/gn_img/albums/qa4WEkqKP1/a4WEE7dWP1/size_l.jpg"
    }
  ],

  Ghazal: [
    {
      title: "Chupke Chupke Raat Din",
      Singer: "Ghulam Ali",
      movie: "Nikah",
      released: 1970,
      rating: "⭐⭐⭐⭐⭐",
      img:
        "https://a10.gaanacdn.com/gn_img/albums/01A3mar3NQ/1A3maYwe3N/size_l.jpg"
    },
    {
      title: "Mujhse Pehle Si Mohabbat",
      Singer: "Noor Jehan",
      movie: "Qaidi",
      released: 1962,
      rating: "⭐⭐⭐⭐⭐",
      img:
        "https://a10.gaanacdn.com/gn_img/albums/Rz4W87v3xD/z4W86YmLKx/size_l.jpg"
    },
    {
      title: "Chandi Jaisa Rang Hai Tera",
      Singer: "Pankaj Udas",
      movie: "Ek HI Maqsad",
      released: 2001,
      rating: "⭐⭐⭐⭐",
      img:
        "https://a10.gaanacdn.com/gn_img/albums/0wrb4N3Lg7/wrb4zAy3Lg/size_l.jpg"
    }
  ],

  Romantic: [
    {
      title: "I Can Be Your Hero ",
      Singer: "Enrique Iglesias",
      movie: "Escape",
      released: 2001,
      rating: "⭐⭐⭐⭐⭐",
      img:
        "https://a10.gaanacdn.com/gn_img/albums/zLp36PvbrG/Lp36wQqWrG/size_l.jpg"
    },
    {
      title: "Kya Khoob lagti Ho",
      Singer: "Kanchan, Mukesh",
      movie: "Dharmatma",
      released: 1975,
      rating: "⭐⭐⭐⭐",
      img:
        "https://a10.gaanacdn.com/gn_img/albums/P7m3GvNKqx/7m3GPRyWqx/size_l.jpg"
    },
    {
      title: "Humnava",
      Singer: "Papon",
      movie: "Hamari Adhuri Kahani",
      released: 2015,
      rating: "⭐⭐⭐⭐",
      img:
        "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/k9KNEqmqbB/size_l.jpg"
    }
  ]
};

var songsWeKnow = Object.keys(songsDB);

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Sufi");

  function songsClickHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <div className="good-songs">
        <h1>My Favourite Songs</h1>
        <p>Checkout my favourite Songs. Select a genre to see..</p>

        <nav>
          {songsWeKnow.map((genre) => (
            <button
              className="btn-genre"
              key={genre}
              onClick={() => songsClickHandler(genre)}
            >
              {" "}
              {genre}
            </button>
          ))}
        </nav>

        <section className="song-list">
          {songsDB[selectedGenre].map((songs, index) => (
            <article className="song-list-details" key={index}>
              <div className="song-list-img">
                <img src={songs.img} alt="song-img" />
              </div>
              <div className="song-list-content">
                <div className="song-list-title">{songs.title}</div>
                <div className="song-list-singer">Artist: {songs.Singer}</div>
                <div className="song-list-movie">Movie: {songs.movie}</div>
                <div className="song-list-release">
                  Released: {songs.released}
                </div>
                <div className="song-list-rating">Rating: {songs.rating}</div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
