import React from 'react';

const Button = ({ buttonText, buttonStyle, onClick }) => (
  <button style={buttonStyle} onClick={onClick}>
    {buttonText}
  </button>
);

const App = () => {
  const handleClick1 = () => {
    alert('I am button 1 clicked');
  };

  const handleClick2 = () => {
    alert('I am button 2 clicked');
  };

  const button1Style = {
    color: 'white',
    background: 'red',
  };

  const button2Style = {
    color: 'white',
    background: 'blue',
  };

  return (
    <div>
      <Button buttonText="Button 1" buttonStyle={button1Style} onClick={handleClick1} />
      <Button buttonText="Button 2" buttonStyle={button2Style} onClick={handleClick2} />
    </div>
  );
};

export default App;
