function Event() {
  return (
    <div style={{ padding: "50px", backgroundColor: "lightblue" }}>
      <div onClick={() => alert("Parent Clicked")}>
        Parent Div
        <button
          onClick={(e) => {
            alert("Child Clicked");
            // e.stopPropagation(); // uncomment to stop bubbling
          }}
        >
          Click Me
        </button>
      </div>
      <div onClickCapture={() => alert("Parent Capturing")}>
        <button onClick={() => alert("Child Clicked")}>Click Me</button>
      </div>
    </div>
  );
}

export default Event;
