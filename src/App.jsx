import { useState } from "react";
import { Child } from "./components/Child";

export const App = () => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");
  const countUP = () => {
    return setNum((prevNum) => prevNum + 1);
  };
  const inputText = (e) => {
    return setText(e.target.value);
  };
  console.log("あああ");

  return (
    <>
      {/* <Child backgroundColor="cyan">ヘッダ</Child>
      <Child backgroundColor="lime">ようこそ</Child>
      // <Child backgroundColor="peachpuff">コンテンツ</Child>
      <Child backgroundColor="orchid">ふった</Child> */}
      <button onClick={countUP}>+</button>
      <p>{num}</p>
      <Child backgroundColor="peachpuff">
        <input
          type="text"
          value={text}
          placeholder="名前を入力してください"
          onChange={inputText}
        />
      </Child>
      <Child backgroundColor="peachpuff">
        <p>名前：{text}</p>
      </Child>
    </>
  );
};
