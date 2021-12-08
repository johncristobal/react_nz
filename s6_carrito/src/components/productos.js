import { Component } from "react";
import Producto from "./producto";

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Productos extends Component{
    render(){
        const { productos, agregarAlCarro } = this.props;
        return(
            <div style={styles.productos}>
                { productos.map( p =>
                    <Producto 
                        agregarAlCarro={agregarAlCarro}
                        key={p.name}
                        producto={p}
                    />
                    )
                }
            </div>
        )
    }
}

export default Productos;