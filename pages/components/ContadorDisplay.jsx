export default function ContadorDisplay(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      height: "200px",
      width: "200px",
      borderRadius: "100px",
      color: "#fff",
      backgroundColor: "#222",
      textAlign: "center",
      alignItems: "center",
      fontSize: "4rem"
    }}>
      {props.numero}
    </div>
  );
}