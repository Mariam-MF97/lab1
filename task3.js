styled = (parentProps, ...childProps) => {
  const theme = {
    color: {
      primary: "red",
      secondary: "blue",
    },
    fontSize: {
      small: "10px",
      large: "20px",
    },
  };
  let myStyle = "";
  for (let i = 0; i < parentProps.length; i++) {
    if (childProps[i]) {
      myStyle = myStyle + parentProps[i] + (childProps[i](theme) || "");
    }
  }
  console.log(myStyle);
};

styled`.h1{
    color: ${(theme) => theme.color.primary},  
    font-size: ${(theme) => theme.fontSize.large}}`;
