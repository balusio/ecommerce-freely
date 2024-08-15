import { Field, Label } from "@headlessui/react";
import { forwardRef, Ref } from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  onChange: (value: unknown) => void;
  as?: "input" | "textarea";
  error?: FieldError;
  className?: string;
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (props: InputProps, ref) => {
    const { label, onChange, error, as = "input", ...restProps } = props;

    const fieldRequierd = error?.type === "required" || error?.type === "min";
    const errorClasses = fieldRequierd ? "border-red-500" : "";

    const asClasses = as === "textarea" ? "min-h-[120px]" : "";

    return (
      <Field className="flex w-full flex-col items-start justify-start">
        <Label className={fieldRequierd ? `text-red-500` : `text-gray-800`}>
          {label}
        </Label>
        <input
          ref={ref as unknown as Ref<HTMLInputElement>}
          {...restProps}
          className={`${errorClasses} ${asClasses} h-10 w-full border-2 border-gray-300 bg-white px-6 pr-10 text-gray-800 data-[disabled]:bg-gray-100`}
          onChange={onChange}
        />
        {fieldRequierd ? (
          <span className="text-red-500">Field required</span>
        ) : null}
      </Field>
    );
  },
);

export default Input;
