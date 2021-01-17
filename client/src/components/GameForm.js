import Axios from "axios";
import { useState } from "react";
import { Form, Header, Input, Select } from "semantic-ui-react";

export default (props) => {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  //this is the correct answer
  const [q1_answer, setQ1_Answer] = useState("");
  const [q2_answer, setQ2_Answer] = useState("");
  const [q3_answer, setQ3_Answer] = useState("");
  const [q4_answer, setQ4_Answer] = useState("");
  //setting the points defaultly the user wont be changing these
  const [q1_points] = useState(100);
  const [q2_points] = useState(200);
  const [q3_points] = useState(300);
  const [q4_points] = useState(400);
  //is it multi choice or fill in blank??
  const [q1_type, setQ1_Type] = useState("");
  const [q2_type, setQ2_Type] = useState("");
  const [q3_type, setQ3_Type] = useState("");
  const [q4_type, setQ4_Type] = useState("");
  //this isthe dummyanwers array
  const [q1_dummyanswers, setQ1_DummyAnswers] = useState([]);
  const [q2_dummyanswers, setQ2_DummyAnswers] = useState([]);
  const [q3_dummyanswers, setQ3_DummyAnswers] = useState([]);
  const [q4_dummyanswers, setQ4_DummyAnswers] = useState([]);
  const [name, setName] = useState("");
  const [dummyAnswer, setDummyAnswer] = useState('');

  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  const handleSubmit = async () => {
    let res = await Axios.post(`/api/create_category_with_cards`, {
      name,
      q1,
      q2,
      q3,
      q4,
      q1_answer,
      q2_answer,
      q3_answer,
      q4_answer,
      q1_points,
      q2_points,
      q3_points,
      q4_points,
      q1_type,
      q2_type,
      q3_type,
      q4_type,
      q1_dummyanswers,
      q2_dummyanswers,
      q3_dummyanswers,
      q4_dummyanswers,
    });
    console.log(res);
    console.log(dummyAnswer);
    setQ1_DummyAnswers([...q1_dummyanswers, dummyAnswer]);
    console.log(q1_dummyanswers);

    props.history.push('/');
  };
  const questionOptions = [
    { key: "multi", value: "multi", text: "Multiple Choice" },
    { key: "fill", value: "fill", text: "Fill in the Blank" },
  ];
  const handleQ1Selection = (data) => {
    setQ1_Type(data.value);
    if (data.value === "multi") {
      setToggle(!toggle);
      setQ1_DummyAnswers([...q1_dummyanswers,q1_answer]);
    }
  };
  const handleQ2Selection = (data) => {
    setQ2_Type(data.value);
    if (data.value === "multi") {
      setToggle2(!toggle2);
      setQ2_DummyAnswers([...q2_dummyanswers,q2_answer]);
    }
  };
  const handleQ3Selection = (data) => {
    setQ3_Type(data.value);
    if (data.value === "multi") {
      setToggle3(!toggle3);
      setQ3_DummyAnswers([...q3_dummyanswers,q3_answer]);
    }
  };
  const handleQ4Selection = (data) => {
    setQ4_Type(data.value);
    if (data.value === "multi") {
      setToggle4(!toggle4);
      setQ4_DummyAnswers([...q4_dummyanswers,q4_answer]);
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Header as="h6">
        *Points are set by default 100-400 starting at question 1 - question 4
      </Header>
      <Header>Category</Header>
      <Input
        type="text"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Header>Question 1</Header>
      <Form.Input
        type="text"
        label="Question"
        value={q1}
        onChange={(e) => setQ1(e.target.value)}
      />
      <Form.Input
        type="text"
        label="Correct Answer"
        value={q1_answer}
        onChange={(e) => setQ1_Answer(e.target.value)}
      />
      <Form.Select
        label="Select Type"
        placeholder="Select your question type"
        options={questionOptions}
        onChange={(e, data) => {
          handleQ1Selection(data);
        }}
      />
      {toggle && (
        <>
          <Header>Answers</Header>
          <Form.Input 
            label="Dummy Answer 1"
            onChange={(e, {value})=>setDummyAnswer(value)}
          />
          <Form.Input 
            label="Dummy Answer 2"
            onChange={(e, {value})=>setDummyAnswer(value)}
          />
          <Form.Input 
            label="Dummy Answer 3"
            onChange={(e, {value})=>setDummyAnswer(value)}
          />
        </>
      )}
      {/* <br />
      <Header>Question 2</Header>
      <Form.Input
        type="text"
        label="Question"
        value={q2}
        onChange={(e) => setQ2(e.target.value)}
      />
      <Form.Input
        type="text"
        label="Correct Answer"
        value={q2_answer}
        onChange={(e) => setQ2_Answer(e.target.value)}
      />
      <Form.Select
        label="Select Type"
        placeholder="Select your question type"
        options={questionOptions}
        onChange={(e, data) => {
          handleQ2Selection(data);
        }}
      />
      {toggle2 && (
        <>
          <Header>Answers</Header>
          <Form.Input 
            label="Dummy Answer 1"
            onChange={(e)=>setq2_da1(e.target.value)}
          />
          <Form.Input 
            label="Dummy Answer 2"
            onChange={(e)=>setq2_da2(e.target.value)}
          />
          <Form.Input 
            label="Dummy Answer 3"
            onChange={(e)=>setq2_da3(e.target.value)}
          />
        </>
      )}
      <br />
      <Header>Question 3</Header>
      <Form.Input
        type="text"
        label="Question"
        value={q3}
        onChange={(e) => setQ3(e.target.value)}
      />
      <Form.Input
        type="text"
        label="Correct Answer"
        value={q3_answer}
        onChange={(e) => setQ3_Answer(e.target.value)}
      />
      <Form.Select
        label="Select Type"
        placeholder="Select your question type"
        options={questionOptions}
        onChange={(e, data) => {
          handleQ3Selection(data);
        }}
      />
      {toggle3 && (
        <>
          <Header>Answers</Header>
          <Form.Input 
            label="Dummy Answer 1"
            onChange={(e)=>setq3_da1(e.target.value)}
          />
          <Form.Input 
            label="Dummy Answer 2"
            onChange={(e)=>setq3_da2(e.target.value)}
          />
          <Form.Input 
            label="Dummy Answer 3"
            onChange={(e)=>setq3_da3(e.target.value)}
          />
        </>
      )}
      <br />
      <Header>Question 4</Header>
      <Form.Input
        type="text"
        label="Question"
        value={q4}
        onChange={(e) => setQ4(e.target.value)}
      />
      <Form.Input
        type="text"
        label="Correct Answer"
        value={q4_answer}
        onChange={(e) => setQ4_Answer(e.target.value)}
      />
      <Form.Select
        label="Select Type"
        placeholder="Select your question type"
        options={questionOptions}
        onChange={(e, data) => {
          handleQ4Selection(data);
        }}
      />
      {toggle4 && (
        <>
          <Header>Answers</Header>
          <Form.Input 
            label="Dummy Answer 1"
            onChange={(e)=>setq4_da1(e.target.value)}
          />
          <Form.Input 
            label="Dummy Answer 2"
            onChange={(e)=>setq4_da2(e.target.value)}
          />
          <Form.Input 
            label="Dummy Answer 3"
            onChange={(e)=>setq4_da3(e.target.value)}
          />
        </>
      )} */}
      <Form.Button>add</Form.Button>
    </Form>
  );
};
