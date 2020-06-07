import React from 'react';

export const getSplashBack = () => {
    const urlStart = "https://peridot-seed.s3-us-west-1.amazonaws.com/Splash/splash(";
    const urlEnd = ").jpg";
    const imgUrls = [];
    let col = [];
    for (let i = 4; i <= 27; i++) {
        col.push(urlStart + i + urlEnd);
        if (i % 3 === 0) {
            imgUrls.push(col);
            col = [];
        }
    }

    return (
        <div className="splash-back">
            {imgUrls.map((col, i) => {
                return (
                    <div key={i} className="splash-col">
                        {col.map((url) => {
                            return (
                                <div key={url} className="tile-box">
                                    <img className="tile-img" src={url} />
                                    <div className="pin-space"></div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
