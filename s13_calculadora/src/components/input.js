import { useField } from "formik";
import styled from "styled-components";

const Control = styled.div`
    margin-bottom: 20px;
`

const Label = styled.label`
    color: #000;
    display: block;
    margin-bottom: 5px;
`

const MyInput = styled.input`
    outline: none;
    margin: 8px;
    border: 1px solid #b1b3b5;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 5px;
`

const Errormsg = styled.div`
    color: red;
`

const Input = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <Control>
            <Label>
                {label}
            </Label>
            <MyInput {...field} {...props}>        
            </MyInput>
            {
                meta.touched && meta.error 
                ? <Errormsg>{meta.error}</Errormsg>
                : null
            }

        </Control>
    )
}

export default Input;
