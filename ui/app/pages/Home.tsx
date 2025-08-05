import { Button } from "@dynatrace/strato-components/buttons";
import { Checkbox, TextInput } from "@dynatrace/strato-components-preview/forms";
import { parseAsBoolean, parseAsString, useQueryState } from "nuqs";
import React, { useState } from "react";

export const Home = () => {
  const [textParam, setTextParam] = useQueryState("text", parseAsString.withDefault(""));
  const [checkedParam, setCheckedParam] = useQueryState("checked", parseAsBoolean.withDefault(false));
  //
  const [text, setText] = useState(textParam);
  const [checked, setChecked] = useState(checkedParam);

  const handleSubmit = () => {
    setTextParam(text);
    setCheckedParam(checked);
  };
  return (
    <div>
      <TextInput value={text} onChange={(newValue) => setText(newValue)} />
      <Checkbox value={checked} onChange={() => setChecked((prev) => !prev)}>
        Check Me
      </Checkbox>
      <Button variant="accent" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};
