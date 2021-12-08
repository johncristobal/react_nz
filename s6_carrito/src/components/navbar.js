import { Component } from "react";
import Carro from "./carro";
import Logo from "./logo";

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding:'0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0, 0.1)'
    }
}

class Navbar extends Component{
    render(){
        const {carro, esCarroVisible, mostrarCarro } = this.props;
        return(
            <nav style={styles.navbar}>
                <Logo>Logo</Logo>
                <Carro 
                    carro={carro}
                    esCarroVisible={esCarroVisible}
                    mostrarCarro={mostrarCarro}
                >
                    Carro
                </Carro>
            </nav>
        )
    }
}

export default Navbar;