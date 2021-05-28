import React from 'react';
import './Homepage.styles.scss';

export default function Homepage() {
    return (
        <section className="Homepage__container">
            <div className="Directory__menu">
                <div className="Menu__item">
                    <div className="Content">
                        <h1 className="Content__title">HATS</h1>
                        <span className="Content__subtitle">SHOP NOW</span>
                    </div>
                    <div className="Content">
                        <h1 className="Content__title">JACKETS</h1>
                        <span className="Content__subtitle">SHOP NOW</span>
                    </div>
                    <div className="Content">
                        <h1 className="Content__title">SNEAKERS</h1>
                        <span className="Content__subtitle">SHOP NOW</span>
                    </div>
                    <div className="Content">
                        <h1 className="Content__title">WOMENS</h1>
                        <span className="Content__subtitle">SHOP NOW</span>
                    </div>
                    <div className="Content">
                        <h1 className="Content__title">MENS</h1>
                        <span className="Content__subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
