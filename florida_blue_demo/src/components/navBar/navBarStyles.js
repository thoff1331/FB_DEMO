import color from "@material-ui/core/colors/blue";
import { fontFamily } from "@material-ui/system";

export const navBar = () => ({
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "impact",
    backgroundColor: "#2F65A3",
    width: "100%",
    zindex: "9999",
    height: "100px"
  },
  links: {
    color: "white",
    textUnderline: "none",
    textDecoration: "none"
  }
});
