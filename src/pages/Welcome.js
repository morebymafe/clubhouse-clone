import React from "react";
import style from '../style/welcome.module.css'
import { Link } from "react-router-dom";

export default function Welcome(){
    return <div className={style.WelcomeContainer}>
        <h1>Welcome!</h1>
        <div className={style.WelcomeInfo}>
            <p>
            We're working hard to get clubhouse ready for everyone!
            While we wrap up the finishing touches, we're adding peopele gradually to make
            sure nothing breaks.
            </p>
            <p>
            Praesent mattis nisl quis lacus convallis tempor. In fermentum odio vitae risus tristique, finibus commodo massa aliquet. In elementum interdum convallis. Morbi pharetra mauris nibh, vitae dignissim eros aliquet at. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Duis a tempor neque. Praesent turpis diam, efficitur at accumsan vitae, eleifend eu arcu. Nullam eu rhoncus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>

            <p>
                Paul, Rohan & the Clubhouse team.
            </p>            
        </div>

        <div className={style.actionBttn}>
            <Link exact to='/get_username' className='primaryBtn d-flex align-items-center mb-3'>
                Get your username{" "}
                {/* <img src="" alt="" /> */}
            </Link>
            <Link>
                Have an invite text? Sign in
            </Link>
        </div>

    </div>
}