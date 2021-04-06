import { makeStyles } from "@material-ui/core";

const cardStyle = makeStyles({
  root: {
    display: "flex",
    width: "40%",
    height: "78%",
    flexDirection: "column",
    justify: "center",
    alignItems: "center",
    margin: 10,
  },
  
  media: {
    height: "75%",
  },

  typography: {
    color: "#947062",
    margin: "10px 20px 10px 20px",
    textAlign: "center",
  },
});

export default cardStyle;
