import comision from '../assets/images/comision.jpg'
function Banner() {
    return (
        <div class="container">
           <img src={comision} text-align="center" class="d-block w-100" width="400" height="200"></img>
        </div>
    );
}
export default Banner;