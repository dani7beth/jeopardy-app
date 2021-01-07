import { useContext, useState} from "react";
import { Form, Header, Input, Button } from "semantic-ui-react";
import { CategoryContext } from "../providers/CategoryProvider";

const Card = (props) => {
  const { game, totalPoints, getTotalPoints } = useContext(CategoryContext);
  const [color, setColor] = useState('');

  const logCard = () => {
    if (game) {
      return game.map((categories) => {
        return categories.cards.map((card) => {
          if (card.id == props.match.params.id && card.questiontype === "multi") {
            return (
              <>
                <Header as="h1" textAlign="center" style={{ paddingTop: "5%" }}>
                  {card.question}
                </Header>
                <div>{getMultiAnswers(card.dummyanswers, card.answer, card.points)}</div>
                <p>Total Points: {totalPoints}</p>
              </>
            );
          }
          if (card.id == props.match.params.id && card.questiontype === "fill") {
            return (
              <>
                <Header as="h1" textAlign="center" style={{ paddingTop: "5%" }}>
                  {card.question}
                </Header>
                <Form style={{textAlign: 'center', paddingTop:'2%'}}>
                  <Input />
                </Form>
              </>
            );
          }
        });
      });
    }
  };

  const checkAnswer = (answer, correctAnswer, points) =>{
    if(answer === correctAnswer){
      setColor('green')
      getTotalPoints(points)
    }else{
      setColor('red')
    }
  }

  const getMultiAnswers = (answers, correctAnswer, points) => {
    if (answers) {
      return answers.map((answer) => (
        <p>
          <Button onClick={()=> checkAnswer(answer, correctAnswer, points)} color={color}>{answer}</Button>
        </p>
      ));
    }
  };

  return <>{logCard()}</>;
};
export default Card;
