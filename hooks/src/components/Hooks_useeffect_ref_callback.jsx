import React, { useState, useCallback, useEffect, useRef } from "react";

function Hooks_useeffect_ref_callback() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("fawad");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (symbolAllowed) {
      str += "!@#$%^&*()-+{}[]|:;\"'<>,.?/";
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);

  const copyToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  }, [password]);

  return (
    <>
      <hr />
      <div className="password">
        <h2>Password Generator</h2>
        <div className="input">
          <input
            type="text"
            value={password}
            placeholder="Your Password"
            readOnly
            ref={passwordRef}
          />
        </div>
        <div className="options">
          <div className="option">
            <input
              type="range"
              min="8"
              max="20"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <span>{length} characters</span> <br />
            <div className="box">
              <input
                className="checkbox"
                type="checkbox"
                id="numbers"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numbers">Include Numbers</label>
              <input
                className="checkbox"
                type="checkbox"
                id="symbols"
                checked={symbolAllowed}
                onChange={() => setSymbolAllowed((prev) => !prev)}
              />
              <label htmlFor="symbols">Include Symbols</label>
                          
              <button onClick={copyToClipboard}>Copy</button> {}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hooks_useeffect_ref_callback;
