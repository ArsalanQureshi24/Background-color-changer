import Buttons from './Buttons'
function ButtonContainer({colorNames,handleOnClick}) {
    return (
    <>
     <div className='btn-container'>
        <Buttons colorNames={colorNames} handleOnClick={handleOnClick}/>
     </div>
    </>
    )
   
}
export default ButtonContainer;