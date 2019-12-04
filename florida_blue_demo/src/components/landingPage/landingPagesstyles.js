import zIndex from "@material-ui/core/styles/zIndex";

export const landingPage = () => ({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
    fontSize: " 35px",
    fontFamily: "impact",
    backgroundColor: "#FF8C00	",
    height: "110vh",
    marginTop: "-20px"
  },
  signup: {
    border: "10px solid red"
  },
  team: {
    color: "yellow",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-1200px",
    marginLeft: "1100px",
    height: "400px",
    width: "400px"
  }
});
