import React from 'react';


const styles={
    tarjeta:{
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
        width: '200px',
        height: 'auto',
        borderRadius: '3%',
        display: 'relative',
        margin: '15px auto 0'
    },
    imagen:{
        width: '150px',
        height: '150px',
        display: 'absolute',
        margin: 'auto',
        transform: 'translateY(10px)',
    },
    h1:{
        fontSize: '17px',
        marginTop: '40px'
    },
    texto: {
        paddingBottom: '12px'
    }
}

const Card = props => {
    return(
        <div style={styles.tarjeta}>
            <img style={styles.imagen} src={props.avatar} alt="avatar"></img>
            <h1 style={styles.h1}>{props.name}</h1>
            <p style={styles.texto}>{props.titulo}</p>
            <p style={styles.texto}>{props.children}</p>
        </div>
    )
}

export default Card;