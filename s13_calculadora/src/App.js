import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Balance from "./components/balance";
import Button from "./components/button";
import Container from "./components/container";
import Input from "./components/input";
import Section from "./components/section";

const compountInterest = (deposit, contribution, years, rate) => {
  let total = deposit;
  for(let i = 0; i < years; i++){
    total = (total + contribution) * (rate + 1)
  }

  return Math.round(total);
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

function App() {

  const [balance, setBalance] = useState('');

  const handleSubmit = ({ deposit, contribution, years, rate}) => {
    const val = compountInterest(Number(deposit), Number(contribution), Number(years), Number(rate))

    console.log(val);
    setBalance(formatter.format(val));
    
  }

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: ''
          }}
          onSubmit={handleSubmit}
          validationSchema={ Yup.object({
            deposit: Yup.number().required("Obligatorio").typeError("Debe ser número"),
            contribution: Yup.number().required("Obligatorio"),
            years: Yup.number().required("Obligatorio"),
            rate: Yup.number().required("Obligatorio"),
          })}
        >
          <Form>
            <Input name='deposit' label='Deposito inicial'/>
            <Input name='contribution' label='Anual'/>
            <Input name='years' label='Años'/>
            <Input name='rate' label='Interes estimado'/>
            <Button type="submit">Enviar</Button>
          </Form>
        </Formik>
        {
          balance !== ''
          ? <Balance>Balance final {balance}</Balance>
          : null
        }
      </Section>
    </Container>
  )
}

export default App;
