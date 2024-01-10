import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import center from '@turf/center';
import * as topojson from "topojson-client";
import { India } from 'src/app/data/sample.data';
import { Map, GeoJSON, Control } from 'leaflet';


// const center = require('@turf/center').default;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit  {

  @ViewChild('mapRef', { static: false }) mapRef!: ElementRef;
  @ViewChild('geoJsonRef', { static: false }) geoJsonRef!: ElementRef;
  COUNTRY_VIEW_ID = 'india-states';
  geoJsonId: string = this.COUNTRY_VIEW_ID;
  geo!: GeoJSON;
  india: any =  India;
  map!: Map;
  slideIndex = 0;
  changeTime = 3; 
  slides: any; 
  geoJSONData: any = {}; 
   constructor() { }

   options = {
    // layers: [
    //     tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    // ],
    zoom: 5,
    // center: latLng(46.879966, -121.726909)
};

  ngOnInit(): void { 
        // this.showSlides();
  console.log('first', this.mapRef)
   this.initializeMap();
    this.addGeoJSONLayer();
    this.addScaleControl();
  }

  

  initializeMap() {
  this.map = L.map('map').setView([20.5937, 78.9629], 5); 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(this.map);

  }

  addGeoJSONLayer() {
    const geoJSONLayer = L.geoJSON(this.geoJSONData).addTo(this.map);
    // Customize GeoJSON layer or add event listeners if needed
  }

  addScaleControl() {
    L.control.scale().addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.fitBoundsToGeoJson();
   
  }

  geoJson = topojson.feature(this.india, this.india.objects[this.geoJsonId]);

  updateGeoJsonId(newId: string) {
    this.geoJsonId = newId;
  }

   onDrillDown(e: any){
    const featureId = e.target.feature.id;
    if (!this.india.objects[featureId]) {
      return;
    }
    this.updateGeoJsonId(featureId);
  };

  fitBoundsToGeoJson() {
    if (this.mapRef && this.geoJsonRef) {
      this.map = this.mapRef.nativeElement.leafletElement;
      const geoJsonData = this.geoJsonRef.nativeElement.geoJsonData; 
      if (this.map && geoJsonData) {
        const geoJsonLayer = L.geoJSON(geoJsonData);
        const geoJsonBounds = geoJsonLayer.getBounds();

        if (geoJsonBounds.isValid()) {
          this.map.fitBounds(geoJsonBounds);
        } else {
          console.error('Invalid GeoJSON bounds');
        }
      }
    }
  }


mapCenter = this.getCenterOfGeoJson(this.geoJson);

stateValues: any = {
    "Andhra Pradesh": 25,
    "Arunachal Pradesh": 68,
    Assam: 42,
    Bihar: 17,
    Chhattisgarh: 50,
    Goa: 73,
    Gujarat: 35,
    Haryana: 58,
    "Himachal Pradesh": 81,
    Jharkhand: 22,
    Karnataka: 47,
    Kerala: 65,
    "Madhya Pradesh": 39,
    Maharashtra: 54,
    Manipur: 30,
    Meghalaya: 63,
    Mizoram: 45,
    Nagaland: 70,
    Odisha: 27,
    Punjab: 60,
    Rajasthan: 33,
    Sikkim: 76,
    "Tamil Nadu": 55,
    Telangana: 20,
    Tripura: 75,
    "Uttar Pradesh": 12,
    Uttarakhand: 67,
    "West Bengal": 38,
    "Andaman and Nicobar Islands": 88,
    Chandigarh: 90,
    "Dadra and Nagar Haveli and Daman and Diu": 93,
    Delhi: 95,
    Ladakh: 97,
    Lakshadweep: 99,
    Puducherry: 100,
  };

 onEachFeature(feature: any, layer: any) {
    let layerUtils = this.layersUtils(this.geoJsonRef, this.mapRef);
    layer.on({
      mouseover: layerUtils.highlightOnClick,
      mouseout: layerUtils.resetHighlight,
      click: this.onDrillDown,
    });

    const stateName = feature.properties.st_nm;
    const stateValue = this.stateValues[stateName];
    console.log("State name:", feature);

    const tooltipContent = `<strong>${stateName}</strong><br>Value: ${
      stateValue || "Not Available"
    }`;
    layer.bindTooltip(tooltipContent);
}

geoJSONStyle(feature: any) {
    return {
      color: "#1f2021",
      weight: 1,
      fillOpacity: 0.5,
      fillColor: this.getColor(Math.floor(Math.random() * 26)),
    };
  }

  getColor(d: any) {
    return d > 25
      ? '#800026'
      : d > 20
      ? '#E31A1C'
      : d > 15
      ? '#FD8D3C'
      : d > 10
      ? '#FEB24C'
      : d > 5
      ? '#FED976'
      : '#FFEDA0';
  }

  getCenterOfGeoJson(geoJson: any) {
    return center(geoJson).geometry.coordinates.reverse();
  }

  layersUtils(geoJsonRef: any, mapRef: any) {
    const highlightOnClick = (e: any) => {
      const layer: any = e.target;

      layer.setStyle({
        weight: 2,
        color: '#f90303',
        dashArray: '',
        fillOpacity: 0.7,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    };

    const resetHighlight = (e: any) => {
      geoJsonRef.current.leafletElement.resetStyle(e.target);
    };

    const zoomToFeature = (e: any) => {
      // mapRef.current.leafletElement.fitBounds(e.target.getBounds());
    };

    return { highlightOnClick, resetHighlight, zoomToFeature };
  }

   showSlides() {
    this.slides = document.getElementsByClassName("slide-vis");
    setInterval(() => {
      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none";
      }
      this.slideIndex++;
      if (this.slideIndex > this.slides.length) {
        this.slideIndex = 1;
      }
      this.slides[this.slideIndex - 1].style.display = "block";
    }, this.changeTime * 1000);
  }
}

