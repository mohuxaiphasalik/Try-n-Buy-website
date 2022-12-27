import React from 'react';
import Navbar from '../Components/Navbar';
import ProductMain from '../Components/ProductMain';
import '../styles/productpage.css'
export default function ProductPage() {
    return (
        <>        <Navbar />
            <div class="filter">
                <button class="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="false" aria-controls="mobile-filter">Filters<span class="fa fa-filter pl-1"></span></button>
            </div>
            <div id="mobile-filter">
                <div>
                    <h6 class="p-1 border-bottom">Home Furniture</h6>
                    <ul>
                        <li><a href="#">Living</a></li>
                        <li><a href="#">Dining</a></li>
                        <li><a href="#">Office</a></li>
                        <li><a href="#">Bedroom</a></li>
                        <li><a href="#">Kitchen</a></li>
                    </ul>
                </div>
                <div>
                    <h6 class="p-1 border-bottom">Filter By</h6>
                    <p class="mb-2">Color</p>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                            <span class="fa fa-circle pr-1" id="red"></span>Red
                        </a></li>
                        <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                            <span class="fa fa-circle pr-1" id="teal"></span>Teal
                        </a></li>
                        <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                            <span class="fa fa-circle pr-1" id="blue"></span>Blue
                        </a></li>
                    </ul>
                </div>
                <div>
                    <h6>Type</h6>
                    <form class="ml-md-2">
                        <div class="form-inline border rounded p-sm-2 my-2">
                            <input type="radio" name="type" id="boring" />
                            <label for="boring" class="pl-1 pt-sm-0 pt-1">Boring</label>
                        </div>
                        <div class="form-inline border rounded p-sm-2 my-2">
                            <input type="radio" name="type" id="ugly" />
                            <label for="ugly" class="pl-1 pt-sm-0 pt-1">Ugly</label>
                        </div>
                        <div class="form-inline border rounded p-md-2 p-sm-1">
                            <input type="radio" name="type" id="notugly" />
                            <label for="notugly" class="pl-1 pt-sm-0 pt-1">Not Ugly</label>
                        </div>
                    </form>
                </div>
            </div>
            <section id="sidebar">
                <div>
                    <h6 class="p-1 border-bottom">Home Furniture</h6>
                    <ul>
                        <li><a href="#">Living</a></li>
                        <li><a href="#">Dining</a></li>
                        <li><a href="#">Office</a></li>
                        <li><a href="#">Bedroom</a></li>
                        <li><a href="#">Kitchen</a></li>
                    </ul>
                </div>
                <div>
                    <h6 class="p-1 border-bottom">Filter By</h6>
                    <p class="mb-2">Color</p>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                            <span class="fa fa-circle pr-1" id="red"></span>Red
                        </a></li>
                        <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                            <span class="fa fa-circle pr-1" id="teal"></span>Teal
                        </a></li>
                        <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                            <span class="fa fa-circle pr-1" id="blue"></span>Blue
                        </a></li>
                    </ul>
                </div>
                <div>
                    <h6>Type</h6>
                    <form class="ml-md-2">
                        <div class="form-inline border rounded p-sm-2 my-2">
                            <input type="radio" name="type" id="boring" />
                            <label for="boring" class="pl-1 pt-sm-0 pt-1">Boring</label>
                        </div>
                        <div class="form-inline border rounded p-sm-2 my-2">
                            <input type="radio" name="type" id="ugly" />
                            <label for="ugly" class="pl-1 pt-sm-0 pt-1">Ugly</label>
                        </div>
                        <div class="form-inline border rounded p-md-2 p-sm-1">
                            <input type="radio" name="type" id="notugly" />
                            <label for="notugly" class="pl-1 pt-sm-0 pt-1">Not Ugly</label>
                        </div>
                    </form>
                </div>
            </section>
        </>

    )
}