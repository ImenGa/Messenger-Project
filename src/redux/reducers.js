const initialState = [
  // {
  //  name: "Imene",
  //  content: "tu viens a la bn ?",
  // },
  //{
  // name: "Lyna",
  //content: "non je suis en garde ",
  // },
];

export default (state = initialState, { type, messages }) => {
  switch (type) {
    case "setMessages":
      return messages;

    default:
      return state;
  }
};
