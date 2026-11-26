import {ArrowRight,CircleCheck, RotateCcw, Shield, Sparkles, Tag, Truck, Wallet } from "lucide-react";

export default function Hero(){

    return(

        <section>
            <div>
                <div>
                <span>
                   <Sparkles />New season . up to 45% off 
                </span>
                 <h1>
                        Everyday essentials,<em>delivered smart.</em>
                 </h1>
                 <p>
                    Shoes, watches, audio and more - hand-picked, fairly priced and at your door in 2-4 days.
                 </p>
                 <div>
                    <a href="/products" >Shop now <ArrowRight/></a>
                    <a href="/products?sort=discount">View deals</a>
                 </div>
                 <div>
                    <span> <CircleCheck/> Free delivery over $999</span>
                    <span> <CircleCheck/> 7-day returns</span>
                    <span> <CircleCheck/> Secure checkout</span>
                 </div>
                 </div>
                 <div>
                    <div>
                        <img src="/images/products/running-shoe.svg" alt="Running Shoe" />
                    </div>
                    <div>
                        <img src="/images/products/smart-watch.svg" alt="Smart Watch" />
                    </div>
                    <div>
                        <img src="/images/products/headphones.svg" alt="Head Phones" />
                    </div>
                    <div>
                        <span><Tag/></span>
                        <span>Running shoe
                            <strong>$2499</strong>
                        </span>
                    </div>
                    <div>
                        <span><Truck/> 
                            <span>
                                <strong>Free delivery </strong>
                                On order above $999
                            </span>
                        </span>
                        <span><RotateCcw/>
                         <span>
                                <strong>Easy returns </strong>
                                 7 days, no questions
                            </span></span>
                        <span><Shield/>
                         <span>
                                <strong>Secure checkout </strong>
                                Your data stays safe
                            </span></span>
                        <span><Wallet/>
                         <span>
                                <strong>Cash on delivery </strong>
                                UPI or pay at your door
                            </span></span>
                    </div>
                 </div>
            </div>
        </section>
    )
}