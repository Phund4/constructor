import './Cell.sass'
// eslint-disable-next-line react/prop-types
function Cell({newPath, name, handleClick, id}) {
    return <>
        <button className='button-cell' onClick={handleClick}>
            <img src={newPath} alt="cell" className="cell" id={id} name={name}/>
        </button>
    </>
}
export default Cell;
