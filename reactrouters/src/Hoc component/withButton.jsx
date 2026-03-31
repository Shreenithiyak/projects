const Button = ({ handleclick }) => {
  return <button onClick={handleclick}>Check</button>;
};

const withAlert = (Component) => {
  return function () {
    const handleclick = () => {
      alert("worked successfully 🚀");
    };

    return <Component handleclick={handleclick} />;
  };
};

const CheckAlert = withAlert(Button);

const WithButton = () => {
  return <CheckAlert />;
};

export default WithButton;