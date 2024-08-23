export type InputProps = {
  placeholder: string;
};

const Input = ({ placeholder }: InputProps) => {
  return (
    <div>
      <input placeholder={placeholder} className=" border border-black rounded-md w-40 " />
    </div>
  );
};

export default Input;
