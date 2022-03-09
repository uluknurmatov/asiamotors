import React, { useContext, useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,  } from '@mui/material';
import { carContext } from "../../contexts/CarsContexts";
import { Select, MenuItem } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './AddCars.css';

const AddCars = () => {

    const [car, setCar] = useState({
        make: "",
            model:"",
            fuel:"",
            transmission:"",
            condition:"",
            drive:"",
            year:"",
            vehicle:"",
            volume:"",
            steering:"",
            color:"",
            price:"",
            sunroof:"",
            seat:"",
            ABS:"",
            camera:"",
            accident:"",
            horsePower:"",
            mileage:"",
            images: []
    })

    const {postNewCar} = useContext(carContext);
    

    const handleValues = (e) => {
        let newCar ={...car };
        if(e.target.name === 'images'){
          newCar.images.push(e.target.value)
        } else {
          newCar [e.target.name] = e.target.value 
        }
        setCar(newCar)
       
      }
      
      
      const handleClick = () => {
        postNewCar(car);
        setCar({
            make: "",
            model:"",
            fuel:"",
            transmission:"",
            condition:"",
            drive:"",
            year:"",
            vehicle:"",
            volume:"",
            steering:"",
            color:"",
            price:"",
            sunroof:"",
            seat:"",
            ABS:"",
            camera:"",
            accident:"",
            horsePower:"",
            mileage:"",
            images:[],
        })
        if (
          car.make === "" ||
          car.model === "" ||
          car.fuel === "" ||
          car.transmission === "" ||
          car.condition === "" ||
          car.drive === "" ||
          car.year === "" ||
          car.vehicle === "" ||
          car.volume === ""
      ) {
          alert("Заполните все поля");
      
      }
        
    }

    return (
      <div className='container'>
         {/* <div className='wrapper'>    */}
                    <FormControl fullWidth>
         <h5>Make:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.make}
          name='make'
          aria-label="make"
          label="make"
          onChange={handleValues}
        >
          <MenuItem value='Hyundai'>Hyundai</MenuItem>
          <MenuItem value='Toyota'>Toyota</MenuItem>
        </Select>
      
        {car.make ==="Hyundai" ? (
        <div className='model_list'>
          <h5>Model:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.model}
          name='model'
          aria-label="model"
          label="model"
          onChange={handleValues}
        >
          <MenuItem value='Sonata'>Sonata</MenuItem>
          <MenuItem value='I-30'>I-30</MenuItem>
        </Select>
        </div>) : (<div></div>)}
      
        {car.make ==="Toyota" ? (
        <div className='model_list'>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.model}
          name='model'
          aria-label="model"
          label="model"
          onChange={handleValues}
        >
          <MenuItem value='Camry'>Camry</MenuItem>
          <MenuItem value='Ist'>Ist</MenuItem>
        </Select>
        </div>) : (<div></div>)}

        <h5>Sunroof:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.sunroof}
          name='sunroof'
          aria-label="sunroof"
          label="sunroof"
          onChange={handleValues}
        >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>

        <h5>Seat:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.seat}
          name='seat'
          aria-label="seat"
          label="seat"
          onChange={handleValues}
        >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>

        <h5>ABC:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.ABS}
          name='ABS'
          aria-label="ABS"
          label="ABS"
          onChange={handleValues}
        >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>

        <h5>Camera:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.camera}
          name='camera'
          aria-label="camera"
          label="camera"
          onChange={handleValues}
        >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>

        <h5>Accident:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.accident}
          name='accident'
          aria-label="accident"
          label="accident"
          onChange={handleValues}
        >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>

        <h5>Fuel Type:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.fuel}
          name='fuel'
          aria-label="fuel"
          label="fuel"
          onChange={handleValues}
        >
          <MenuItem value='Diesel'>Diesel</MenuItem>
          <MenuItem value='Gasoline'>Gasoline</MenuItem>
          <MenuItem value='LPG'>LPG</MenuItem>
        </Select>

        <h5>Transmission:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.transmission}
          name='transmission'
          aria-label="transmission"
          label="transmission"
          onChange={handleValues}
        >
          <MenuItem value='Automatic'>Automatic</MenuItem>
          <MenuItem value='Manual'>Manual</MenuItem>
        </Select>

        <h5>Condition:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.condition}
          name='condition'
          aria-label="condition"
          label="condition"
          onChange={handleValues}
        >
          <MenuItem value='New'>New</MenuItem>
          <MenuItem value='Used'>Used</MenuItem>
          <MenuItem value='Salvage'>Salvage</MenuItem>
        </Select>

        <h5>Drive Type:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.drive}
          name='drive'
          aria-label="drive"
          label="drive"
          onChange={handleValues}
        >
          <MenuItem value='Front 2WD'>Front 2WD</MenuItem>
          <MenuItem value='Rear 2WD'>Rear 2WD</MenuItem>
          <MenuItem value='4 Wheel Drive'>4 Wheel Drive</MenuItem>
          <MenuItem value='Unspecific'>Unspecific</MenuItem>
        </Select>

        <h5>Vehicle Type:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.vehicle}
          name='vehicle'
          aria-label="vehicle"
          label="vehicle"
          onChange={handleValues}
        >
          <MenuItem value='Convertible'>Convertible</MenuItem>
          <MenuItem value='SUV'>SUV</MenuItem>
          <MenuItem value='Coupe'>Coupe</MenuItem>
          <MenuItem value='Pick Up'>Pick Up</MenuItem>
          <MenuItem value='Hatchback'>Hatchback</MenuItem>
          <MenuItem value='Van/MiniVan'>Van/MiniVan</MenuItem>
          <MenuItem value='Sedan'>Sedan</MenuItem>
          <MenuItem value='Wagon'>Wagon</MenuItem>
          <MenuItem value='Compact Car'>Compact Car</MenuItem>
        </Select>

        <h5>Steering:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.steering}
          name='steering'
          aria-label="steering"
          label="steering"
          onChange={handleValues}
        >
          <MenuItem value='LHD'>LHD</MenuItem>
          <MenuItem value='RHD'>RHD</MenuItem>
        </Select>

        <h5>Color:</h5>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car.color}
          name='color'
          aria-label="color"
          label="color"
          onChange={handleValues}
        >
          <MenuItem value='White'>White</MenuItem>
          <MenuItem value='Black'>Black</MenuItem>
          <MenuItem value='Gray'>Gray</MenuItem>
          <MenuItem value='Charcoal'>Charcoal</MenuItem>
          <MenuItem value='Silver'>Silver</MenuItem>
          <MenuItem value='Blue'>Blue</MenuItem>
          <MenuItem value='Red'>Red</MenuItem>
          <MenuItem value='Yellow'>Yellow</MenuItem>
          <MenuItem value='Orange'>Orange</MenuItem>
          <MenuItem value='Others'>Others</MenuItem>
        </Select>
        </FormControl>
      
          
        <div className="add_box">
          <h5>Year</h5>
          <input
            className="inp-add"
            value={car.year}
            min="2005"
            max="2020"
            name="year"
            onChange={handleValues}
            type="number"
            placeholder="Year"
          />
        </div>
      
        <div className='add_box'>
          <h5>Engine Volume</h5>
          <input
            className="inp-add"
            value={car.volume}
            name="volume"
            onChange={handleValues}
            type="number"
            step ='0.01'
            min="0"
            placeholder='0.00'
          /> CC
        </div>
        
            {/* <div className="add_box">
              <h5>Color</h5>
              <input
                className="inp-add"
                value={car.color}
                name="color"
                onChange={handleValues}
                type="text"
                placeholder="Color"
              />
            </div>  */}
            <div className="add_box">
              <h5>HorsePower</h5>
              <input
                className="inp-add"
                value={car.horsePower}
                name="horsePower"
                onChange={handleValues}
                type="number"
                step='10'
                placeholder="HorsePower"
              /> h.p.
            </div>
            <div className="add_box">
              <h5>Mileage</h5>
              <input
                className="inp-add"
                value={car.mileage}
                name="mileage"
                onChange={handleValues}
                type="number"
                placeholder="Mileage"
              /> km
            </div>
      
            <div className="add_box">
            <h5>Price</h5>
              <input
                className="inp-add"
                value={car.price}
                name="price"
                onChange={handleValues}
                type="text"
                placeholder="0.00"
              />$
            </div>
            <div className="add_box">
              <h5>Images</h5>
              <input
                className="inp-add"
                value={car.images[0]}
                name="images"
                onChange={handleValues}
                type="text"
                placeholder="Image1"
              />
              <input
                className="inp-add"
                value={car.images[1]}
                name="images"
                onChange={handleValues}
                type="text"
                placeholder="Image1"
              />
              <input
                className="inp-add"
                value={car.images[2]}
                name="images"
                onChange={handleValues}
                type="text"
                placeholder="Image1"
              />
            </div>
        {/* </div> */}
        
        <button onClick={handleClick}>Save</button>

      </div>

    )
};

export default AddCars;


