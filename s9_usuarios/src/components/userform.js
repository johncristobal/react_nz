import { useFormulario } from '../hooks/useFormulario';
import { Button } from './button';
import { Input } from './input';

export const UserForm = ({submit}) => {

    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        apellido: '',
        correo: ''
      })

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(formulario);
        reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <Input name='name' value={formulario.name} onChange={handleChange} label='Nombre' />
            <Input name='apellido' value={formulario.apellido} onChange={handleChange} label='Apellido' />
            <Input name='correo' value={formulario.correo} onChange={handleChange} label='Correo' />

            <Button>
                Enviar
            </Button>
        </form>
    )
}
