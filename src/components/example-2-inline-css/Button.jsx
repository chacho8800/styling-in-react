
const buttonDarkStyle = {
  backgroundColor: '#b974b6',
  borderRadius: '8px',
  color: 'white',
  fontSize: '24pt',
  padding: '15px 50px',
  width: '300px',
};


const buttonLightStyle = {
  backgroundColor: '#b974b6',
  borderRadius: '8px',
  color: 'white',
  fontSize: '24pt',
  padding: '15px 50px',
  width: '300px',
};


const Button = ({ buttonText, isDarkMode }) => {
    return <button style={isDarkMode ? buttonLightStyle : buttonDarkStyle} >{buttonText}</button>;
  };
  
export default Button;
  