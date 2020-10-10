import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootCard: {
    maxWidth: 450,
  },
  media: {
    height: 300,
    width: 450,
    paddingTop: "60%", // 16:9
  },
  avatar: {
    backgroundColor: "#80d8ff",
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(0),
    textAlign: "center",
    color: "#80d8ff",
    width: "100%",
    backgroundColor: "#0276aa",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "80%",
    color: "#80d8ff",
    "& label.Mui-focused": {
      color: "#80d8ff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#80d8ff",
    },
    "& .MuiOutlinedInput-textField": {
      "& fieldset": {
        borderColor: "#80d8ff",
      },
      "&:hover fieldset": {
        borderColor: "#80d8ff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#80d8ff",
      },
    },
  },

  textHeader: {
    lineHeight: 2,
    fontSize: 36,
    padding: theme.spacing(0),
    textAlign: "center",
    alignItems: "center",
  },
  titleNavBar: {
    flexGrow: 1,
    textAlign: "center",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",

    color: theme.palette.text.secondary,
    width: "100%",
  },
  GridCard: {
    padding: theme.spacing(1),
    textAlign: "center",

    color: theme.palette.text.secondary,
    width: "100%",
  },
  rootButton: {
    margin: theme.spacing(1),
    itemsAlign: "center",
    border: 1,
    color: theme.palette.getContrastText("#0276aa"),
    backgroundColor: "#0276aa",
    "&:hover": {
      backgroundColor: "#0276aa",
    },
  },
}));
export default useStyles;
