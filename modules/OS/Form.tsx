import { ChangeEventHandler, FC } from "react";
import { Select } from "../../components";
import { StyledForm } from "./Styles/StyledForm";

const types = [
  { label: "issue", value: "issue" },
  { label: "pull requests", value: "pr" },
];

const Form: FC<{
  type: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  perPage: number;
}> = ({ type, onChange, perPage }) => {
  const perPageOptions = [20, 50, 100].map((val) => ({
    label: val,
    value: val,
  }));

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <Select
        name="type"
        id="type"
        onChange={onChange}
        value={type}
        options={types}
        label="Type"
      />
      <Select
        name="perPage"
        id="page"
        onChange={onChange}
        value={`${perPage}`}
        options={perPageOptions}
        label="Per Page"
      />
    </StyledForm>
  );
};

export default Form;
