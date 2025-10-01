function Buttons({colorNames,handleOnClick}) {
    return (
        <>
        {colorNames.map((color) => (
            <button type="button" className={`btn btn-primary ${color}`} style={{backgroundColor: color === 'reset' ? 'white' : color}} key={color} onClick={() => handleOnClick(color.toLowerCase())}>{color}</button>
        ))}
        </>
    )
}
export default Buttons;