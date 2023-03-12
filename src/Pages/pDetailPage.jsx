import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useEffect } from "react";
import $ from "jquery";
export default function PDetailPage() {

    useEffect(() => {
        //carousel-control
        $("#myCarousel").mouseover(function () {
            $("#myCarousel .carousel-control").show();
        });

        $("#myCarousel").mouseleave(function () {
            $("#myCarousel .carousel-control").hide();
        });

        //active thumbnail
        $("#thumbCarousel .thumb").on("click", function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        });

        //carousel slides
        $("#myCarousel").on("slid.bs.carousel", function () {
            var index = $(".carousel-inner .item.active").index();
            var thumbnailActive = $(
                '#thumbCarousel .thumb[data-slide-to="' + index + '"]'
            );
            thumbnailActive.addClass("active");
            $(thumbnailActive).siblings().removeClass("active");
        });
    }, []);
    return (
        <div>
            <Navbar />

            <Footer />
        </div>

    )
}