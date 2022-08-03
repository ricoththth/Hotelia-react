import React from 'react'
import './Filtersroom.css'

function Filtersroom() {
    return (
        <div className='everything-rooms'>
            <div className='filters-section'>
                <div class="container-fluid">
                    <div class="row" id="fs_app">
                        <section class="col-12" id="fs_price_body">
                            <div>
                                <span class="heading">
                                    By Price
                                </span>
                                <div class="row">
                                    <div class="col-4">
                                        <button class="btn" type="button">$</button>
                                    </div>
                                    <div class="col-4 active">
                                        <button class="btn" type="button">$$</button>
                                    </div>
                                    <div class="col-4">
                                        <button class="btn" type="button">$$$</button>
                                    </div>
                                </div>
                                <div class="line"></div>
                                <div class="line1"></div>
                                <div>
                                    <ul>
                                        <li>$25</li>
                                        <li>$50</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section class="col-12" id="fs_distance_body">
                            <span class="heading">
                                By Distance
                            </span>
                            <div class="contents">
                                <ul>
                                    <li>
                                        <span>From 1 km to 3 km</span>
                                        <span class="text-right"></span>
                                    </li>
                                    <li class="active">
                                        <span>From 4 km to 7 km</span>
                                        <span class="text-right">
                                            <i class="fa fa-check"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span>From 8 km to 10 km</span>
                                        <span class="text-right"></span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="col-12" id="fs_time_body">
                            <span class="heading">
                                By Time
                            </span>
                            <div class="contents">
                                <ul>
                                    <li>
                                        <span>Less than 30 Min</span>
                                        <span class="text-right"></span>
                                    </li>
                                    <li>
                                        <span>30 Min - 45 Min</span>
                                        <span class="text-right"></span>
                                    </li>
                                    <li class="active">
                                        <span>45 Min - 55 Min</span>
                                        <span class="text-right">
                                            <i class="fa fa-check"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="col-12" id="fs_rating">
                            <span class="heading">
                                By Rating
                            </span>
                            <div class="contents">
                                <ul>
                                    <li>
                                        <span>
                                            <i class="fa fa-star dark"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span>
                                        <span class="text-right"></span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class="fa fa-star dark"></i>
                                            <i class="fa fa-star dark"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span>
                                        <span class="text-right"></span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
            <div className='rooms-section'>
            <div class="card">
            <div class="container-cards">
                <div class="card__items">
                    <div class="card__item" tabindex="0">
                        <a class="card__item-img" href="https://gooliveset.space/web-design/creative-store-template/"
                            target="_blank">
                            <img src="https://gooliveset.space/wp-content/uploads/2020/11/preview_01.png"
                                alt="img card"/>
                        </a>
                        <a class="card__item-title" href="https://gooliveset.space/web-design/creative-store-template/"
                            target="_blank">
                            Creative Store Template
                        </a>
                        <div class="card__item-inner">
                            <div class="card__item-views">
                                <svg viewBox="0 0 447 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M28.8529 70.8358C90.8769 17.4443 143.002 0 223.359 0C223.366 0 223.373 0.00012207 223.38 0.000427246C223.397 0.00115967 223.413 0.00262451 223.429 0.00494385C223.44 0.00341797 223.45 0.0022583 223.461 0.00146484C223.474 0.000488281 223.487 0 223.5 0C303.856 0 355.982 17.4443 418.006 70.8358C457.112 104.499 456.672 165.323 415.426 196.327C349.725 245.715 281.233 270 223.5 270C223.476 270 223.452 269.998 223.429 269.995C223.406 269.998 223.383 270 223.359 270C165.625 270 97.1339 245.715 31.4326 196.327C-9.81336 165.323 -10.2534 104.499 28.8529 70.8358ZM223 194C258.346 194 287 165.346 287 130C287 94.6537 258.346 66 223 66C187.654 66 159 94.6537 159 130C159 165.346 187.654 194 223 194Z">
                                    </path>
                                </svg>
                                <div class="views-count">
                                    2152
                                </div>
                            </div>
                            <a class="card__item-btn"
                                href="https://gooliveset.space/web-design/creative-store-template/" target="_blank">
                                View
                            </a>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Filtersroom