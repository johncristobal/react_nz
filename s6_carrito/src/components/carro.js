import { Component } from "react";
import BubbleAlert from "./bubble";
import DetallesCarro from "./detalles_carro";

const styles = {
    carro: {
        backgroundColor: '#359a2c',
        color: '#fff',
        border: 'none',
        borderRadius: '15px',
        padding: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: '12px',
        top: '20px'
    }
}
class Carro extends Component{
    render(){
        const {carro, esCarroVisible, mostrarCarro } = this.props;
        const q = carro.reduce( (acc, el) => acc + el.cantidad, 0);

        return(
            <div>
                <span style={styles.bubble}>
                    {
                        q !== 0
                        ? <BubbleAlert value={q} />
                        : null
                    }                    
                </span>
                <button
                    onClick={mostrarCarro}
                    style={styles.carro}>
                    Carro
                </button>
                {
                    esCarroVisible ? <DetallesCarro carro={carro}/> : null
                }
                
            </div>
        )
    }
}

export default Carro;