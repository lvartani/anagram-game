function SelectInput({label, id, values, currentValue, setCurrentValue}) {

   const selectOptions = values.map((value) => 
    <option value= {value} key={value.toString()}> {value}
    </option>
    ); 
    return (
      
        <>
        <label htmlFor={id}>{label}</label>
        <select id={id}
            defaultValue={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}>
            {selectOptions}
        </select>
        </>


    );
};

export default SelectInput;