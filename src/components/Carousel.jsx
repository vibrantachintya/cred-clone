import {useState, useEffect} from "react";
import styles from "../styles/carousel.module.css";

const Carousel = () => {
    let [index, setIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            let x = index;
            if(x >= 5) setIndex(1);
            else setIndex(index => index + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [index]);

    const handleClick = (i) => {
        setIndex(i);
    };

    return (
        <div>

            <div className={styles.carousel_container}>
                <div className={`${styles.carousel_div} ${index == 1 && styles.carousel_highlighted}`}>
                    <div>"have been using the app for an year... very happy with this. it greatly avoids the need for searching for statements individually and logging in to pay them all. with cred i can happily pay all my cc bills with a single click. love the experience."</div>
                    <div>pushpalatha a</div>
                </div>
                <div className={`${styles.carousel_div} ${index == 2 && styles.carousel_highlighted}`}>
                    <div>"i would say one of the best platforms to manage your credit card payments with lot of advantages and rewards. you can even pay rent to your owner using credit card. that's really cool. thanks for all the awesomeness. keep inventing !!"</div>
                    <div>jagadeeswar reddy singam</div>
                </div>
                <div className={`${styles.carousel_div} ${index == 3 && styles.carousel_highlighted}`}>
                    <div>"in love! such a seamless user experience, smooth as freshly waxed pair of legs! very intuitive and easy to use application. good job people, good job."</div>
                    <div>parul mehra</div>
                </div>
                <div className={`${styles.carousel_div} ${index == 4 && styles.carousel_highlighted}`}>
                    <div>"this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind"</div>
                    <div>ranesh bhattacharya</div>
                </div>
                <div className={`${styles.carousel_div} ${index == 5 && styles.carousel_highlighted}`}>
                    <div>"great app, paying dues of credit card was never that much easy and fast. few more rewarding features also available there like showing credit score, can easily pay rent, getting cashback whenever paying cc dues. lots more. i really loves cred."</div>
                    <div>sanjeev kataria</div>
                </div>
            </div>

            <div className={styles.ticker_container}>
                <div onClick={() => {handleClick(1)}} className={`${styles.ticker} ${index == 1 && styles.highlighted}`}></div>
                <div onClick={() => {handleClick(2)}} className={`${styles.ticker} ${index == 2 && styles.highlighted}`}></div>
                <div onClick={() => {handleClick(3)}} className={`${styles.ticker} ${index == 3 && styles.highlighted}`}></div>
                <div onClick={() => {handleClick(4)}} className={`${styles.ticker} ${index == 4 && styles.highlighted}`}></div>
                <div onClick={() => {handleClick(5)}} className={`${styles.ticker} ${index == 5 && styles.highlighted}`}></div>
            </div>
        
        </div>
    )

}
  
 export default Carousel;