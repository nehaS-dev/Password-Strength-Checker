import { useState } from "react";
import "../styles.css";

const PasswordStrength = () => {
  const [inputValue, setInputValue] = useState("");
  const [showResult, setShowResult] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const checkStrength = (pwd) => {
    const criteria = [
      pwd.length >= 8,
      /[A-Z]/.test(pwd),
      /[a-z]/.test(pwd),
      /[0-9]/.test(pwd),
      /[^A-Za-z0-9]/.test(pwd),
    ];
    const passed = criteria.filter(Boolean).length;

    if (passed === 1) return "Level 1";
    if (passed >= 2 && passed <= 3) return "Level 2";
    if (passed >= 4 && passed <= 5) return "Level 3";
    return "weak password";
  };
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const handleCheckStrength = () => {
    setShowResult(checkStrength(inputValue));
  };
  const handleShowPwd = () => {
    setShowPwd((prev) => !prev);
  };
  return (
    <div className="pwd-container">
      <div className="pwd-title">Password Strength Checker</div>
      <div className="pwd-input-wrapper">
        <input
          className="pwd-input"
          type={showPwd ? "text" : "password"}
          placeholder="Enter password"
          value={inputValue}
          onChange={handleInputValue}
        />
        <span className="pwd-eye" onClick={handleShowPwd}>
          {showPwd ? "🙈" : "👁️"}
        </span>
      </div>
      <button className="pwd-btn" onClick={handleCheckStrength}>
        Check Strength
      </button>

      {showResult && <p className="pwd-result">{showResult}</p>}
    </div>
  );
};
export default PasswordStrength;
