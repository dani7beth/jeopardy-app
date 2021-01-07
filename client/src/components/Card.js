import { useContext, useState } from "react";
import { Form, Header, Input, Button } from "semantic-ui-react";
import { CategoryContext } from "../providers/CategoryProvider";

const Card = (props) => {
  const { game, totalPoints, getTotalPoints } = useContext(CategoryContext);
  const [color, setColor] = useState("");
  const [fillInAnswer, setFillInAnswer] = useState("");

  const logCard = () => {
    if (game) {
      return game.map((categories) => {
        return categories.cards.map((card) => {
          if (
            card.id == props.match.params.id &&
            card.questiontype === "multi"
          ) {
            return (
              <>
                <Header as="h1" textAlign="center" style={{ paddingTop: "5%" }}>
                  {card.question}
                </Header>
                {getMultiAnswers(card.dummyanswers, card.answer, card.points)}
                <p>Total Points: {totalPoints}</p>
              </>
            );
          }
          if (
            card.id == props.match.params.id &&
            card.questiontype === "fill"
          ) {
            return (
              <>
                <Header as="h1" textAlign="center" style={{ paddingTop: "5%" }}>
                  {card.question}
                </Header>
                {getFillInBlank(card.answer, card.points)}
                <p>Points: {totalPoints}</p>
              </>
            );
          }
        });
      });
    }
  };

  const getFillInBlank = (correctAnswer, points) => {
    return (
      <Form
        style={{ textAlign: "center", paddingTop: "2%" }}
        onSubmit={() => checkAnswer(fillInAnswer, correctAnswer, points)}
      >
        <Input
          type="text"
          label="Your Answer"
          value={fillInAnswer}
          onChange={(e, { value }) => {
            setFillInAnswer(value);
          }}
        />
        <Button type="submit">submit</Button>
      </Form>
    );
  };

  const checkAnswer = (answer, correctAnswer, points) => {
    if (answer === correctAnswer) {
      setColor("green");
      getTotalPoints(points);
    } else {
      setColor("red");
    }
    //dont immediately go back to the main page but wait a second
    window.setTimeout(() => props.history.push("/"), 1000);
  };

  const getMultiAnswers = (answers, correctAnswer, points) => {
    if (answers) {
      return answers.map((answer) => (
        <p>
          <Button onClick={() => checkAnswer(answer, correctAnswer, points)}>
            {answer}
          </Button>
        </p>
      ));
    }
  };

  return <div style={{ backgroundColor: `${color}` }}>{logCard()}</div>;
};
export default Card;
