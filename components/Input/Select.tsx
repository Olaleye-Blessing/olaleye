import { ChangeEventHandler, FC } from "react";

interface Props {
  name: string;
  id: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: { label: string | number; value: string | number }[];
  label?: string;
}

const Select: FC<Props> = (props) => {
  return (
    <div className="form__control">
      <label htmlFor="props.id">{props.label}</label>
      <div className="select-wrapper">
        <select
          name={props.name}
          id={props.id}
          onChange={props.onChange}
          value={props.value}
        >
          {props.options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
