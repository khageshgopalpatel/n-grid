import "./InputElement.css";

interface InputElementProps {
  label: string;
  name?: string;
}

const InputElement: React.FC<InputElementProps> = ({ label, name }) => {
  let inputName = name || label.toLowerCase().replace(/ /g, "-");
  return (
    <div className="input-container">
      <label htmlFor={inputName}>{label}:</label>
      <input type="text" name={inputName} id={inputName} />
    </div>
  );
};

export default InputElement;
