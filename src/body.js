import React, { useState, useEffect } from "react";

const BodyComponent = () => {
  const [isLoading, setIsLoading] = useState("false");

  useEffect(() => {
    if (isLoading) {
      setIsLoading("true");
      return <>Loading..</>;
    } else {
      setIsLoading("false");
    }
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="item d-grid">
              <div className="image">
                <img
                  src="https://images.pexels.com/photos/6153739/pexels-photo-6153739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="topic">
                <div className="topic-wrapper">
                  <div className="new-wrapper">
                    <h1>
                      Microsoft's Bill Gates warns AI 'may run out of control'
                      and decide 'humans are threat'...
                    </h1>
                    <br />
                    <div className="write-up">
                      <p>
                        Microsoft co-founder Bill Gates is 'excited' and
                        'inspired' by advancements in artificial intelligence
                        but worries 'malign' forces could deploy robots to rule
                        the world. Governments must take control of robot
                        development to stop "malign" forces deploying them to
                        rule the world, according to tech guru Bill Gates. The
                        multi-billionaire Microsoft co-founder said he was
                        "excited" and "inspired" by advancements in artificial
                        intelligence which if used for "good" could boost
                        education, healthcare, business and lifestyles while at
                        the same time reducing global inequality and poverty....
                      </p>
                      <br />
                      <button className="btn">
                        {" "}
                        <a
                          href="https://www.dailystar.co.uk/news/world-news/microsofts-bill-gates-warns-ai-29545274"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontSize: "1rem" }}
                        >
                          Read More
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="research-container d=grid">
              <div className="healine-container">
                <div className="header">
                  <h2 className="research">Breaking News</h2>
                </div>
                <a
                  href="https://africa.businessinsider.com/news/utah-just-passed-a-bill-that-will-force-children-to-get-parental-consent-before/yf36jk4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <div className="headlines">
                    <h3>
                      Utah just passed a bill that will force children to get
                      parental consent before joining social media platforms.
                    </h3>
                    <br />
                    <p>
                      Republican Governor Spencer Cox passed the Social Media
                      Regulation Act, which aims to force social media companies
                      to verify the age of all Utah residents before they can
                      sign up for or maintain a social media account...
                    </p>

                    <br />
                  </div>
                </a>
                <a
                  href="https://www.techradar.com/news/chatgpt-plugins-are-officially-here-and-im-already-filled-with-dystopian-dread"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <div className="headlines">
                    <h3>
                      ChatGPT plugins are officially here, and I'm already
                      filled with dystopian dread
                    </h3>
                    <br />
                    <p>
                      Not to be outdone by the rising (well, sometimes falling)
                      star of Google Bard, OpenAI has announced that popular
                      language learning model ChatGPT now has...
                    </p>

                    <br />
                  </div>
                </a>
                <a
                  href="https://www.laptopmag.com/news/sony-wf-1000xm4-earbuds-deal-takes-dollar81-off-the-best-airpods-pro-2-alternatives"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <div className="headlines">
                    <h3>
                      Sony WF-1000XM4 earbuds deal takes $81 off the best
                      AirPods Pro 2 alternatives..
                    </h3>
                    <br />
                    <p>
                      Chances are you're debating Sony WF-1000XM4 vs AirPods Pro
                      2 if you want the best noise-cancelling earbuds money can
                      buy
                    </p>

                    <br />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturesComponents />
    </>
  );
};

export default BodyComponent;

const FeaturesComponents = () => {
  return (
    <section>
      <div className="features-container">
        <div className="features-wrapper">
          <div className="itemii">
     
            
            <div className="list">
              <div className="list-img">
                <img
                  src="https://ocdn.eu/pulscms-transforms/1/IfWk9kuTURBXy8zYzhhNzY1My05ZmVkLTRkNDctODFmZS1jYjdlZTJhYjg2OTcuanBlZ5GTBc0DFs0Brt4AAaEwBQ"
                  alt=""
                />
              </div>
              <div className="list-header">
                <a
                  href="https://africa.businessinsider.com/news/sam-altman-responds-to-elon-musks-criticism-of-openai-i-mean-hes-a-jerk-but-he-does/w29wrrd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    {" "}
                    Sam Altman responds to Elon Musk's criticism of OpenAI: 'I
                    mean, he's a jerk,' but 'he does really care'.
                  </h3>
                  <p>
                    The OpenAI CEO said his company is "independent" from
                    Microsoft...
                  </p>
                </a>
              </div>
            </div>
            <div className="list">
              <div className="list-img">
                <img
                  src="https://www.slashgear.com/img/gallery/12-major-tv-brands-ranked-worst-to-best/rca-1679677123.webp"
                  alt=""
                />
              </div>
              <div className="list-header">
                <a
                  href="https://www.slashgear.com/1238354/12-major-tv-brands-ranked-worst-to-best/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3> 12 Major TV Brands Ranked Worst To Best..</h3>
                  <p>
                    Televisions have been a part of peoples' lives of people
                    dating back several decades. Throughout that time...
                  </p>
                </a>
              </div>
            </div>
                        <div className="list">
              <div className="list-img">
                <img
                  src="https://cdn.arstechnica.net/wp-content/uploads/2023/03/playstation-5-800x535.jpg"
                  alt=""
                
                />
              </div>
              <div className="list-header">
                <a
                  href="https://arstechnica.com/tech-policy/2023/03/microsoft-wins-battle-with-sony-as-uk-reverses-finding-on-activision-merger/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3> Microsoft wins battle with Sony as UK..</h3>
                  <p>
                  UK regulators reviewing Microsoft's proposed acquisition of Activision Blizzard reversed their stance on a key...
                  </p>
                </a>
              </div>
            </div>
           

            {/* <div className="item-image">
              <img src="" alt="" />
            </div>
            <h1 className="label">01</h1>
            <h3 className="key-topic">
              Determination of sway moments for multi-storey structures.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              provident numquam suscipit beatae nostrum totam.
            </p>
          </div>
          <div className="item">
            <div className="item-image">
              <img src="" alt="" />
            </div>
            <h1 className="label">01</h1>
            <h3 className="key-topic">
              Determination of sway moments for multi-storey structures.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              provident numquam suscipit beatae nostrum totam.
            </p>
          </div>
          <div className="item">
            <div className="item-image">
              <img src="" alt="" />
            </div>
            <h1 className="label">01</h1>
            <h3 className="key-topic">
              Determination of sway moments for multi-storey structures.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              provident numquam suscipit beatae nostrum totam.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
