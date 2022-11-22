export const Child = (props) => {
  const { backgroundColor, children } = props;

  const style = {
    backgroundColor,
    padding: "10px",
    borderRadius: "20px"
  };

  return (
    <>
      <h3 style={style} backgroundColor="red">
        {children}
      </h3>
    </>
  );
};
