function ImageCard(props){
    // props toegevoegs als parameter op regel 1
    return (
    <div>
    <h2>{props.subject}</h2>
    <img src={`https://source.unsplash.com/1600x900/?${props.subject}`} />
    </div>
    );
};

export default ImageCard;

// regel 6 en 7 geinterpoleerd.