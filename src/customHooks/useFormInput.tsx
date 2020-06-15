import React , {useState} from 'react';
  
const useFormInput = (initaialInput: string)=> {
  const [input, setInput] = useState(initaialInput);
  const [valid, setValid] = useState(false);

   const onChange= (value: string)=> {
        if(typeof(value) === 'string'  && value !== '' && value.length <= 100) {
            setInput(value);
            setValid(true);
        }
        else {
            setInput('')
            setValid(false)
        }
    }
    const resetInput = ()=> {
        setInput('');
    }
    return {input, valid, onChange, resetInput}
}

export default useFormInput;
