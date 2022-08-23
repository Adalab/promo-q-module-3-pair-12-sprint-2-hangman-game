const ErrorLetters = (props)=>{
    return (
        <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>{props.userErrorLetters}</ul>
        </div>
    )

}
export default ErrorLetters;
