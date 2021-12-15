import { Formik, Form, Field, ErrorMessage } from "formik";
import { Checkbox } from "./components/checkbox";
import { Radio } from "./components/radio";
import { Select } from "./components/select";
import { TextInput } from "./components/textinput";

const validate = (values) => {
  const errors = {}
  if(!values.name){
    errors.name = 'Requerido'
  } else if(values.name.length < 5){
    errors.name = 'El nombre muy corto'
  }
  if(!values.lastname){
    errors.lastname = 'Requerido'
  } else if(values.lastname.length < 5){
    errors.lastname = 'El apellido muy corto'
  }

  if(!values.radio){  
    errors.radio = 'Seleccione radio'
  } 
  return errors
}

function App() {

  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
        email: '',
        select: '',
        radio:""
      }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name="nombre" label="nombre" />
        <label>Nombre</label>
        <Field type="text" name="name" className='input' />
        <ErrorMessage name="name" />
        <label>Apellido</label>
        <Field type="text" name="lastname" />
        <ErrorMessage name="lastname" />
        <label>Correo</label>
        <Field type="text" name="email" />
        <ErrorMessage name="email" />
        <label>Select</label>
        <Field as="select" name="select" >
          <option value="feliz">feliz</option>
          <option value="triste">triste</option>
        </Field>
        <ErrorMessage name="email" />

        <Select label="tipo" name="select">
          <option value=""> Seleccione </option>
          <option value="feliz"> feliz </option>
          <option value="triste"> triste </option>
        </Select>
        <Checkbox name="accept">
          Aceptar terminos
        </Checkbox>
        <Radio name="radio" value="feliz" label="feliz" />
        <Radio name="radio" value="feliz2" label="feliz2" />
        <Radio name="radio" value="feliz3" label="feliz3" />
        <ErrorMessage name="radio" />
        <button type="submit">
          Enviar
        </button>
      </Form>
      
    </Formik>

  );
}

export default App;
