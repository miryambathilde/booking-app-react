import React from 'react';
import './searchItem.scss';

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
                className="searchItemImg"
            />
            <div className="searchItemDesc">
                <h1 className="searchItemTitle">Tower Street Apartments</h1>
                <span className="searchItemDistance">500m from center</span>
                <span className="searchItemTaxiOp">Free airport taxi</span>
                <span className="searchItemSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="searchItemFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="searchItemCancelOp">Free cancellation </span>
                <span className="searchItemCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="searchItemDetails">
                <div className="searchItemRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="searchItemDetailTexts">
                    <span className="searchItemPrice">$112</span>
                    <span className="searchItemTaxOp">Includes taxes and fees</span>
                    <button className="searchItemCheckButton">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;