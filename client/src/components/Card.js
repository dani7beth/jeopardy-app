import { useContext} from "react";
import { Form, Header, Input } from "semantic-ui-react";
import { CategoryContext } from "../providers/CategoryProvider";

const Card = (props) => {
  const { game } = useContext(CategoryContext);

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
                <div>{getMultiAnswers(card.dummyanswers)}</div>
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

  const getMultiAnswers = (answers) => {
    if (answers) {
      //needed to shuffle answers around so the actual answer isnt obvious
      answers = answers.sort(() => Math.random() - 0.5);
      return answers.map((answer, i) => (
        <p>
          {i + 1}. {answer}
        </p>
      ));
    }
  };

  return <>{logCard()}</>;
};
export default Card;
