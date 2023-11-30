import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const TotalTip = (bill * (tip1 + tip2)) / 2 / 100;
  function handleReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <ServiceFeedBack tipPercent={tip1} onSelect={setTip1}>
        How did you like the service?
      </ServiceFeedBack>
      <ServiceFeedBack tipPercent={tip2} onSelect={setTip2}>
        How did your friend like the service?
      </ServiceFeedBack>
      {bill > 0 && (
        <>
          <BillCalculate bill={bill} TotalTip={TotalTip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>
        How much was the bill?
        <span>
          <input
            type="number"
            value={bill}
            onChange={(e) => onSetBill(Number(e.target.value))}
          />
        </span>
      </label>
    </div>
  );
}

function ServiceFeedBack({ tipPercent, onSelect, children }) {
  // const [tip1, setTip1] = useState();

  // console.log(tip);
  // setTip1(tip1);
  // console.log(`${tip1}`);

  return (
    <div>
      {/* {console.log(`${typeof FeedBacks[0].per}`)} */}
      <label>
        {children}
        <span>
          <select
            value={tipPercent}
            onChange={(e) => onSelect(Number(e.target.value))}
          >
            <option value="0">Dissatisfied (0)%</option>
            <option value="5">it was okay (5)%</option>
            <option value="10">it was good (10)%</option>
            <option value="20">absolutely Amazing (20)%</option>
          </select>
        </span>
      </label>
    </div>
  );
}

function BillCalculate({ bill, TotalTip }) {
  return (
    <div>
      <h2>
        You pay ${bill + TotalTip} (${bill} + ${TotalTip} tip)
      </h2>
    </div>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
