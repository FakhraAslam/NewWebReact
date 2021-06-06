import First from './Images/First.png'
import Second from './Images/Second.jpg'
import Third from './Images/Third.jpg'
const Slider = (props) => {
    const { img1, img2, img3 } = props;
    return (
        <div>

            {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="container">
                            <img class=" h-25 w-75 " src={First} alt="First slide" />
                        </div>

                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={Second} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={Third} alt="Third slide" />
                    </div>
                </div>
            </div>*/}
     
        </div> 
    );
}
export default Slider;