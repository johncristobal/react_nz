import { useState } from "react"

const App = () => {

  const [value, setValue] = useState({
    normal: '',
    texto: '',
    select: '',
    checked: false,
    estado: 'triste'
  });

  const handleChange = ({target}) => {
    setValue({
      ...value, //spread para replicar el value
      [target.name]: (target.type === "checkbox") 
      ? target.checked 
      : target.value //solo actualizamos el que necesitemos
    })
  }

  console.log(value);

  return(
    <div>
      {value.length < 5 ? <span>longitud minima 5</span> : null}
      <input name='normal' type='text' value={value.normal} onChange={handleChange} />
      <textarea name='texto' value={value.texto} onChange={handleChange} />
      <select onChange={handleChange} value={value.select} name='select'>
        <option value=''> Seleccione ---</option>
        <option value='feliz'> feliz </option>
        <option value='triste'> triste </option>
        <option value='emocionado'> emocionado </option>
      </select>

      <br></br>
      <input name='check' type='checkbox' onChange={handleChange} checked={value.check} />

      <br></br>
      <div>
        <label>Tipo: </label>
        <input type='radio' value='feliz' name="estado" onChange={handleChange} checked={value.estado === 'feliz'}/> feliz
        <input type='radio' value='triste' name="estado" onChange={handleChange} checked={value.estado === 'triste'}/> triste
        <input type='radio' value='emocionado' name="estado" onChange={handleChange} checked={value.estado === 'emocionado'}/> emocionado
      </div>
    </div>
  )
}

export default App