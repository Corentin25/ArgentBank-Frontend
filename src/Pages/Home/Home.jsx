import { Card } from "../../Components/Card/Card";

import iconChat from "../../Assets/icon-chat.webp";
import iconMoney from "../../Assets/icon-money.webp";
import iconSecurity from "../../Assets/icon-security.webp";
import "./home.css";

export function Home() {
  const features = [
    {
      id: "1",
      img: iconChat,
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      id: "2",
      img: iconMoney,
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      id: "3",
      img: iconSecurity,
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <main>
      <section className="banner">
        <div className="sloganBloc">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="baseLine">
            No fees.
            <br />
            No minimum deposit.
            <br />
            High interest rates.
          </p>
          <p className="subtitle">
            Open a savings account with Argent Bank today !
          </p>
        </div>
      </section>
      <section className="features">
        {features.map((feature) => (
          <Card
            key={feature.id}
            id={feature.id}
            img={feature.img}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </section>
    </main>
  );
}