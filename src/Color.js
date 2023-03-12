const Color = ({ colorValue, hexValue }) => {
  return (
    <section
        className="color"
        style={{backgroundColor: colorValue}}
    >
        <p>{colorValue ? colorValue: "Empty Value"}</p>
        <p>{hexValue ? hexValue: null}</p>
    </section>

  )
}

Color.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Color