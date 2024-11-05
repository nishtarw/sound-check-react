import React from 'react';
import ArtistCard from '../components/ArtistCard';
import childishGambino from '../images/childishgambino.jpg';
import lana from '../images/lana.jpg';
import frank from '../images/frank.jpg';
import marias from '../images/marias.jpg';
import travis from '../images/travis.jpg';
import steve from '../images/steve.jpg';
import kali from '../images/kali.jpg';
import sza from '../images/sza.jpg';

const artistData = [
    {
        "_id": "1",
        "name": "Childish Gambino",
        "image": childishGambino,
        "image_credit": "Originally by EWatson92 on Flickr, licensed under CC BY 2.0.",
        "genre": "R&B/Hip-Hop/Rock/Rap",
        "country": "America",
        "biography": "Childish Gambino is the musical persona of Donald Glover, who is a writer, actor, musician, comedian, producer, and director. He was born on September 25th, 1983, in California but moved to Atlanta at a young age. He became famous first for being a writer and an actor, but later released music as mixtapes and EPs. His first major album with a major record was called 'Camp' and was released in 2011. After that, he had more hits and released frequently, but since 'Awaken My Love!' in 2016, he has taken 4 years to release each album, one in 2020 and just released two new albums this year!",
        "discography": [
            "EP (2008)",
            "Camp (2011)",
            "I Am Just a Rapper (2010)",
            "I Am Just a Rapper 2 (2011)",
            "Because the Internet (2013)",
            "STN MTN (2014)",
            "Kauai (2014)",
            "Awaken, My Love! (2016)",
            "3.15.20 (2020)",
            "Atavista (2024)",
            "Bando Stone and The New World (2024)"
        ],
        "upcomingEvents": "No events at the moment."
    },
    {
        "_id": "2",
        "name": "Lana Del Rey",
        "image": lana,
        "image_credit": "Image by Georges Biard, licensed under CC BY-SA 3.0",
        "genre": "Indie/Alt Pop",
        "country": "America",
        "biography": "Lana Del Rey, was born as Elizabeth Woolridge Grant on June 21, 1985, in New York, is a popular artist known for her unique sound and style. She grew up singing in church, and after high school went to Fordham University to study philosophy. She started making music as a teenager but gained major recognition with her 2011 hit 'Video Games.' Her album Born to Die (2012) featured popular tracks like 'Summertime Sadness' and helped establish her career. Lana's music often focuses on themes like love and heartbreak and has a cinematic and nostalgic music.",
        "discography": [
            "Lana Del Rey (2010)",
            "Born to Die (2012)",
            "Ultraviolence (2014)",
            "Honeymoon (2015)",
            "Lust for Life (2017)",
            "Norman Fucking Rockwell! (2019)",
            "Chemtrails over the Country Club (2021)",
            "Blue Banisters (2021)",
            "Did You Know That Theres a Tunnel Under Ocean Blvd (2023)"
        ],
        "upcomingEvents": "No events at the moment."
    },
    {
        "_id": "3",
        "name": "Frank Ocean",
        "image": frank,
        "image_credit": "Originally posted at blonded.co, reviewed on Nov 3, 2023, by GRuban.",
        "genre": "R&B",
        "country": "America",
        "biography": "Frank Ocean is an American artist and producer known for his amazing vocals and lyricism. He first gained recognition with his first mixtape 'Nostalgia Ultra' before releasing his take-off with the album, Channel Orange, which features songs like 'Thinkin Bout You' and won him a Grammy award. His most recent album, Blonde, was another hit. This was also in 2016 and his last album as he has stopped making music since then, although we are hoping he'll come back. Aside from music, he is also open about his sexuality and advocates for social justice.",
        "discography": [
            "Nostalgia, Ultra (2011)",
            "Channel Orange (2012)",
            "Blonde (2016)"
        ],
        "upcomingEvents": "No events at the moment."
    },
    {
        "_id": "4",
        "name": "The Marias",
        "image": marias,
        "image_credit": "Originally by Julio Enriquez on Flickr, reviewed on June 25, 2019, under CC BY 2.0.",
        "genre": "Indie/Alt Pop",
        "country": "America",
        "biography": "Forming in 2016, the Marías are a semi-recent band with lead vocalist and guitarist María Zardoya along with Jesse Perlman, Edward James, and James Conway. Originating from Los Angeles, California, they are renowned for their Latin influence, mystical and luscious sounds, and Maria's angelic vocals. The band became well-known because of their EP Superclean, Vol. I, which had the hit song 'I Don't Know You.' With the success of their first studio album, Cinema, they gradually gained greater recognition over time. The Marías frequently tackle themes of cultural identity and romance and heartbreak.",
        "discography": [
            "EPs Superclean, Vol. I (2017)",
            "Superclean, Vol. II (2018)",
            "CINEMA (2021)",
            "Submarine (2024)"
        ],
        "upcomingEvents": "They are currently in the middle of their 'Submarine Tour'. Check out tickets on Ticketmaster!"
    },
    {
        "_id": "5",
        "name": "Travis Scott",
        "image": travis,
        "image_credit": "Image from Flickr, reviewed by ww2censor on January 29, 2017, under the stated license.",
        "genre": "Rap",
        "country": "America",
        "biography": "Travis Scott (born Jacques Berman Webster II on April 30, 1991) is a Houston-born rapper, singer, and producer known for his innovative sound and energetic live shows. He gained fame with his mixtapes Owl Pharaoh (2013) and Days Before Rodeo (2014). His debut album, Rodeo (2015), included hits like 'Antidote' and received critical acclaim. His follow-up albums, Birds in the Trap Sing McKnight (2016) and Astroworld (2018), solidified his status, with Astroworld featuring the chart-topping single 'Sicko Mode.' In addition to music, he founded Cactus Jack Records and has collaborated with brands like Nike and McDonald's, making him a major influence in both the music and fashion industries.",
        "discography": [
            "Owl Pharaoh (2013)",
            "Days Before Rodeo (2014)",
            "Rodeo (2015)",
            "Birds in the Trap Sing McKnight (2016)",
            "Rogue Waves (2016, EP)",
            "JACKBOYS (2019)",
            "ASTROWORLD (2018)",
            "UTOPIA (2023)",
            "The Jack Webster Project (2023, EP)"
        ],
        "upcomingEvents": "Travis Scott will perform at Rolling Loud on December 13, 2024, at Hard Rock Stadium in Miami, FL. Find tickets on Ticketmaster."
    },
    {
        "_id": "6",
        "name": "Steve Lacy",
        "image": steve,
        "image_credit": "Image by C Elliott Photos on Flickr (link) reviewed by FlickreviewR 2 on June 3, 2023, confirmed under cc-zero license. ",
        "genre": "R&B",
        "country": "America",
        "biography": "Steve Lacy is a talented American musician and producer known for his work with The Internet and his solo projects. His music blends elements of R&B, funk, and rock, showcasing his diverse influences. Lacy gained recognition for his production work on the Grammy-nominated album Ego Death by The Internet, which features the hit song 'Girl.' He released his debut solo project, Steve Lacy's Demo, in 2017, which received critical acclaim and highlighted his unique sound and style.",
        "discography": [
            "Steve Lacy's Demo (2017)",
            "Apollo XXI (2019)",
            "Gemini Rights (2022)"
        ],
        "upcomingEvents": "No events at the moment."
    },
    {
        "_id": "7",
        "name": "Kali Uchis",
        "image": kali,
        "image_credit": "Image by rarvesen on Flickr (link) reviewed by FlickreviewR on August 1, 2016, confirmed under cc-by-2.0 license",
        "genre": "R&B/Pop",
        "country": "America",
        "biography": "Kali Uchis is an American singer and songwriter known for her unique blend of R&B, soul, and pop. Born on July 17, 1994, in Alexandria, Virginia, she began her music career by releasing songs on YouTube and gained recognition with her debut EP, Por Vida, in 2018. Kali Uchis's music often explores themes of love and identity, and she is known for her distinctive voice and visual aesthetic. She achieved commercial success with her hit single 'Telepatía' and collaborated with artists like Tyler, The Creator and Jorja Smith. Her album Sin Miedo (del Amor y Otros Demonios) received critical acclaim and showcased her diverse influences and artistry.",
        "discography": [
            "Por Vida (2018)",
            "Isolation (2019)",
            "Sin Miedo (del Amor y Otros Demonios) (2020)",
            "Red Moon in Venus (2023)"
        ],
        "upcomingEvents": "No events at the moment."
    },
    {
        "_id": "8",
        "name": "SZA",
        "image": sza,
        "image_credit": "Photo by Rupa Patel on Flickr (link) reviewed by FlickreviewR on March 19, 2020, confirmed under cc-by-2.0 license",
        "genre": "R&B",
        "country": "America",
        "biography": "SZA is an American singer and songwriter known for her unique blend of R&B and hip-hop. Born Solána Imani Rowe on November 8, 1990, in St. Louis, Missouri, she gained recognition with her critically acclaimed debut studio album, Ctrl, released in 2017. The album showcased her distinctive voice and songwriting style, earning her multiple Grammy nominations and a loyal fanbase. SZA's music often explores themes of love, heartbreak, and self-discovery. In 2022, she released her second album, SOS, which debuted at number one on the Billboard 200 and further solidified her status as one of the leading artists in contemporary R&B.",
        "discography": [
            "Z (2014)",
            "Ctrl (2017)",
            "SOS (2022)"
        ],
        "upcomingEvents": "SZA will perform at the 2024 Coachella Festival on April 12, 2024. Tickets available at the Coachella website."
    }
];

const ArtistProfile = () => {
  return (
      <>
      
          <div className="artist-profiles">
          <h1 className="centered-heading">Artist Profile</h1>
              <div className="artist-grid">
                  {artistData.map((artist) => (
                      <ArtistCard key={artist._id} artist={artist} />
                  ))}
              </div>
          </div>
      </>
  );
};

export default ArtistProfile;
