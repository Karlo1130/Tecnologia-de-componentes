import './input.css';

function input(text, type) {
    return (
        <div className="inputElement">
            <p>
                {text}
            </p>

            <input type={type}/> 
        </div> 
    );
}

export default input;