const Input = ({ label, set_width, ...props }) => {
  return (
    <div className={`w-${set_width} mr-1`}>
      <label htmlFor={label} className="block text-base font-semibold">
        {label}
      </label>
      <input id={label} {...props} />
    </div>
  );
};
export default Input;
