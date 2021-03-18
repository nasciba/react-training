import { makeStyles } from '@material-ui/core'

const cardStyle = makeStyles({
    root: {  
        display: 'flex',
        width: '80%',
        flexDirection: "column",
        justify: "center",
        alignItems: "center",
        borderRadius: 15,
        margin: 20
    },

    media: {
        height: '20%',
        width: '100%',
    },

    typography: {
        color: '#947062',
        margin: '10px 20px 10px 20px',
        textAlign: 'center',
        
    }
})

export default cardStyle