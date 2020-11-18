import React, { useState } from "react";
import data from "../data/countries.json";
import { Dropdown } from "./dropdown";

export default function App() {
  const [value, setValue] = useState(null);
  return (
    <div style={{ width: 200 }}>
      <Dropdown
        id="code"
        label="name"
        options={data}
        prompt="Select country..."
        value={value}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
}
