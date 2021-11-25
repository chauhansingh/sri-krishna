let Card = props => {
    return (
        <div class="courses">
        <a href="#"><img src={props.img}></img></a>
        <div class="details">
            <span>Updated 23/11/21</span>
            <h6>{props.movies}</h6>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>(300)</span>
            </div>
            <div class="cost">
                {props.price}
            </div>
        </div>
    </div>
    )
}
export default Card;