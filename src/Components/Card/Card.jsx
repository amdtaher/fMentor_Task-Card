import React from 'react'
import '../../assets/css/style.css'
import '../../assets/css/responsive.css'
import icon1 from '../../assets/img/icon-memory.svg'
import icon2 from '../../assets/img/icon-reaction.svg'
import icon3 from '../../assets/img/icon-verbal.svg'
import icon4 from '../../assets/img/icon-visual.svg'

const Card = () => {
  return (
    <>
    <div className="area">
        {/* Card Section */}
        <div class='card'>
            {/* Card Left Part */}
            <div className="card-left">
                <div className="card-left-title">your result</div>
                <h2 className="result">76 <span>of 100</span></h2>
                <ul className="card-left-info">
                    <h4>great</h4>
                    <p>You scored higher than 65% of the people who have taken these tests.</p>
                </ul>
            </div>
            {/* Card Right Part */}
            <div className="card-right">
                <div className="card-right-title"><h2 class='title'>summary</h2></div>
                <ul className="card-right-lists">
                    <li className="single-list">
                        <div className="list-left"><img src={icon2} alt="" /><h4>reaction</h4></div>
                        <div className="list-right"><h4>80 / <span>100</span></h4></div>
                    </li>
                    <li className="single-list">
                        <div className="list-left"><img src={icon1} alt="" /><h4>reaction</h4></div>
                        <div className="list-right"><h4>90 / <span>100</span></h4></div>
                    </li>
                    <li className="single-list">
                        <div className="list-left"><img src={icon3} alt="" /><h4>reaction</h4></div>
                        <div className="list-right"><h4>60 / <span>100</span></h4></div>
                    </li>
                    <li className="single-list">
                        <div className="list-left"><img src={icon4} alt="" /><h4>reaction</h4></div>
                        <div className="list-right"><h4>50 / <span>100</span></h4></div>
                    </li>
                </ul>
                <a href="" className="btn">continue</a>
            </div>
        </div>
        {/* My Attribution */}
        <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://www.frontendmentor.io/profile/amdtaher">Taher Ahmed Tanveer</a>.
        </div>
    </div>
    </>
  )
}

export default Card