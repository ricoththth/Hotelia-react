import React from 'react'
import './Filtersroom.css'

function Filtersroom() {
    return (
        <div>
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
            </div>
        </div>
    )
}

export default Filtersroom