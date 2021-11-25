import './product.css'
import Cdata from "./Cdata";
import Card from './Card';

function Product() {
    return (
        <div id="courses-base">
            <h1>Online Movies Collections</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, enim.</p>
            <div class="courses-box">
                {
                   Cdata.map((item) => {
                       return <Card movies={item.Movie} img={item.img} price={item.price}/>
                   })
                }
            </div>
        </div>
    )
}
export default Product;