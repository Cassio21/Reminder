import Title from "../components/Title";
import Counter from "../components/Counter";
import useCountdown from "../hooks/useCountdown";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CountdownContext } from "../context/CountdownContext";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  const eventTitle = event.title;
  const eventColor = event.color;

  // const [day, hour, minute, second] = useCountdown("Nov 18, 2023 19:00:00");
  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      {/* <Title title="Contagem regressiva para o casamento 👰‍♀️🤵‍♂️" /> */}
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Countdown;
