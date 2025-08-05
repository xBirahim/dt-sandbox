import {
  Checkbox,
  DateTimePicker,
  Label,
  Radio,
  RadioGroup,
  SelectV2,
  TextInput,
} from "@dynatrace/strato-components-preview/forms";
import { Button } from "@dynatrace/strato-components/buttons";
import { Divider, Flex } from "@dynatrace/strato-components/layouts";
import { Blockquote } from "@dynatrace/strato-components/typography";
import { PageLayout } from "app/components/PageLayout";
import { parseAsArrayOf, parseAsBoolean, parseAsIsoDate, parseAsString, useQueryState } from "nuqs";
import React, { useState } from "react";

export const ParametersInUrlExample = () => {
  const [textParam, setTextParam] = useQueryState("text", parseAsString.withDefault(""));
  const [checkedParam, setCheckedParam] = useQueryState("checked", parseAsBoolean.withDefault(false));
  const [dateParam, setDateParam] = useQueryState("date", parseAsIsoDate.withDefault(new Date()));
  const [radioValueParam, setRadioValueParam] = useQueryState("radio", parseAsString.withDefault("hosts"));
  const [selectValueParam, setSelectValueParam] = useQueryState(
    "select",
    parseAsArrayOf(parseAsString).withDefault(["austria"]),
  );
  //
  const [text, setText] = useState(textParam);
  const [checked, setChecked] = useState(checkedParam);
  const [date, setDate] = useState<Date>(dateParam);
  const [radioValue, setRadioValue] = useState(radioValueParam);
  const [selectValue, setSelectValue] = useState<string[]>(selectValueParam);

  const handleSubmit = () => {
    setTextParam(text);
    setCheckedParam(checked);
    setDateParam(date);
    setRadioValueParam(radioValue);
    setSelectValueParam(selectValue);
  };

  return (
    <PageLayout
      title={"Parameters in URL Example"}
      subtitle="Demonstration of query parameters in URL"
      breadcrumbs={[{ href: "/ui", label: "Home" }, { href: "/ui", label: "Examples" }, { label: "Parameters in URL" }]}
    >
      <Flex flexDirection="column" width={"100%"} justifyContent="center" alignItems="start" gap={16}>
        <Blockquote>
          This example demonstrates how to use query parameters in the URL to manage form state. The values are
          synchronized with the URL, allowing for easy sharing and bookmarking of specific states.
          <br />
          It uses the <code>nuqs</code> library to parse and manage query parameters.
          <br />
          The following parameters are used:
          <ul>
            <li>
              <code>text</code> - Text input value
            </li>
            <li>
              <code>checked</code> - Checkbox state
            </li>
            <li>
              <code>date</code> - Selected date
            </li>
            <li>
              <code>radio</code> - Selected radio option
            </li>
            <li>
              <code>select</code> - Selected options in the multi-select dropdown
            </li>
          </ul>
          <br />
          The values are updated in the URL when the form is submitted, and the form fields are initialized with the
          values from the URL when the component is mounted.
        </Blockquote>
        <Flex flexDirection="column" gap={8}>
          <Label>Text Input :</Label>
          <TextInput value={text} onChange={(newValue) => setText(newValue)} />
        </Flex>

        <Divider />
        <Flex flexDirection="column" gap={8}>
          <Label>Checkbox :</Label>
          <Checkbox value={checked} onChange={() => setChecked((prev) => !prev)} />
        </Flex>

        <Divider />
        <Flex flexDirection="column" gap={8}>
          <Label>Date :</Label>
          <DateTimePicker
            type="date"
            value={date.toISOString()}
            onChange={(newValue) => {
              switch (typeof newValue) {
                case "string":
                  setDate(new Date(newValue));
                  break;
                case "object":
                  setDate(new Date(newValue?.absoluteDate || newValue?.value || ""));
                  break;
                default:
                  break;
              }
            }}
          />
        </Flex>

        <Divider />
        <Label>Radio Group:</Label>
        <RadioGroup value={radioValue} onChange={setRadioValue} name="radio-group-example">
          <Radio aria-label="hosts" value="hosts">
            Hosts
          </Radio>
          <Radio aria-label="services" value="services">
            Services
          </Radio>
          <Radio aria-label="processGroups" value="processGroups">
            Process Groups
          </Radio>
        </RadioGroup>

        <Divider />
        <Label>Select :</Label>
        <SelectV2 multiple value={selectValue} onChange={setSelectValue}>
          <SelectV2.Content>
            <SelectV2.Option value="austria">Austria</SelectV2.Option>
            <SelectV2.Option value="germany">Germany</SelectV2.Option>
            <SelectV2.Option value="italy">Italy</SelectV2.Option>
            <SelectV2.Option value="spain">Spain</SelectV2.Option>
          </SelectV2.Content>
        </SelectV2>

        <Button variant="accent" onClick={handleSubmit}>
          Submit
        </Button>
      </Flex>
    </PageLayout>
  );
};
