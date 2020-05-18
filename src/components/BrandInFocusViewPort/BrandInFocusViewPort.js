import React, { Component } from 'react'
import data from "../../data";
import "./BrandInFocusViewPort.css";
import BrandFocusCard from '../BrandFocusCard/BrandFocusCard';

class BrandInFocusViewPort extends Component {
  render() {
    return (

<div class="row-container">


   <div class="search-leftContainer column-base">

	 <section>
      <div class="condition-render-verticalFilters condition-render-boundary-top">
        <div class="vertical-filters-filters header-container">
          <span class="header-title">FILTERS</span>
        </div>
        <div class="vertical-filters-filters brand-container">
          <span class="vertical-filters-header">Brand</span>
        </div>
        <div class="vertical-filters-filters">
          <span class="vertical-filters-header">Price</span>
        </div>
        <div class="vertical-filters-filters">
          <span class="vertical-filters-header">Color</span>
        </div>
        <div class="vertical-filters-filters">
          <span class="vertical-filters-header">Discount Range</span>
        </div>
      </div>
    </section>
    </div>
        
     
      <div className="bif_card_viewport">
              {
        data["brands-focus-images"].map(element=>{
        return <BrandFocusCard image={element.image} brandName={element["brand-name"]} message={element.message}/>
        })
      }
      </div>
     
      </div>
    )
  }
}

export default BrandInFocusViewPort;