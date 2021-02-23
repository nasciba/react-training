import { makeStyles } from '@material-ui/core'

const cardStyle = makeStyles({
    root: {
        width: '70%',
        display: 'flex',
        height: '100%',
        flexDirection: "column",
        justify: "center",
        alignItems: "center",
        border: 'solid #52F799 2px',
        borderRadius: 15
    },

    media: {
        height: '10%',
        width: '60%',
        margin: 15,

    }
})

export default cardStyle