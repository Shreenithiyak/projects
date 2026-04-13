const Button = ({ handleclick }) => {
  return <div className="flex items-center justify-center">
    <button className="bg-green-500 text-white px-4 py-2" onClick={handleclick}>Check</button>
  </div>;
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