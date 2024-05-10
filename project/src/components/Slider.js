import Products from "./Products";
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import product5 from '../assets/product5.jpg'


export default function Slider() {
    return(
        <>
    <div className="flex items-center justify-center p-24 overflow-hidden w-full mx-auto" style={{backgroundColor: '#003329'}}>
      <div className="h-full flex animate-marquee gap-24">
                <Products picture={product1} className="mx-4"/>
                <Products picture={product2} className="mx-4"/>
                <Products picture={product4} className="mx-4"/>
                <Products picture={product3} className="mx-4"/>
                <Products picture={product5} className="mx-4"/>
                <Products picture={product4} className="mx-4"/>
                <Products picture={product4} className="mx-4"/>
                <Products picture={product2} className="mx-4"/>
            </div>
        </div>
        </>
    );
}