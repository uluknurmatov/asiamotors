import React, { useContext, useState } from "react";
import './Sidebar.css';
import { Grid, makeStyles, Paper, Slider } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { carContext } from "../../contexts/CarsContexts";
import { useNavigate } from "react-router-dom";
import { InputLabel, Select, MenuItem } from '@mui/material';
import { useSelectm, CustomSelect } from '@mui/base/SelectUnstyled';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

const Sidebar = ({  }) => {
    const classes = useStyles();
    const {getCars} = useContext(carContext);
    const [sliderValue, setSliderValue] = useState(getSliderMemory());
    const [make, setMake] = useState(getMake());
    const [model, setModel] = useState(getModel());
    const [fuel, setFuel] = useState(getFuel());
    const [transmission, setTransmission] = useState(getTransmission());
    const [condition, setCondition] = useState(getCondition());
    const [drive, setDrive] = useState(getDrive());
    const [color, setColor] = useState(getColor());
    const [vehicle, setVehicle] = useState(getVehicle());
    const navigate = useNavigate();

    // GET
    function getMake() {
        const search = new URLSearchParams(window.location.search);
        return search.get("make");
    }
    function getModel() {
        const search = new URLSearchParams(window.location.search);
        return search.get("model");
    }
    
    function getFuel() {
        const search = new URLSearchParams(window.location.search);
        return search.get("fuel");
    }
    function getTransmission() {
        const search = new URLSearchParams(window.location.search);
        return search.get("transmission");
    }
    function getCondition() {
        const search = new URLSearchParams(window.location.search);
        return search.get("condition");
    }
    function getDrive() {
        const search = new URLSearchParams(window.location.search);
        return search.get("drive");
    }
    function getColor() {
        const search = new URLSearchParams(window.location.search);
        return search.get("color");
    }
    function getVehicle() {
        const search = new URLSearchParams(window.location.search);
        return search.get("vehicle");
    }


    function getSliderMemory() {
        const search = new URLSearchParams(window.location.search);
        return search.get("price_lte");
    }

    function handleSliderValue(e, value) {
        const search = new URLSearchParams(window.location.search);
        search.set("price_lte", value);
        navigate(`${window.location.pathname}?${search.toString()}`);
        getCars(navigate);
        setSliderValue(value);
    }


    // HandleChange
    const handleChangeMake = (e) => {
        if (e.target.value === "all") {
            navigate(`${window.location.pathname.replace("make")}`);
            getCars(navigate);
            return;
        }

        const search = new URLSearchParams(window.location.search);
        search.set("make", e.target.value);
        navigate(`${window.location.pathname}?${search.toString()}`);
        getCars(navigate);
        setMake(e.target.value);
    };

    const handleChangeModel = (e) => {
        if (e.target.value === "all") {
            navigate(`${window.location.pathname.replace("model")}`);
            getCars(navigate);
            return;
        }

        const search = new URLSearchParams(window.location.search);
        search.set("model", e.target.value);
        navigate(`${window.location.pathname}?${search.toString()}`);
        getCars(navigate);
        setModel(e.target.value);
    };

    const handleChangeFuel = (e) => {
        if (e.target.value === "all") {
            navigate(`${window.location.pathname.replace("fuel")}`);
            getCars(navigate);
            return;
        }

        const search = new URLSearchParams(window.location.search);
        search.set("fuel", e.target.value);
        navigate(`${window.location.pathname}?${search.toString()}`);
        getCars(navigate);
        setFuel(e.target.value);
    };
    const handleChangeTransmission = (e) => {
        if (e.target.value === "all") {
            navigate(`${window.location.pathname.replace("transmission")}`);
            getCars(navigate);
            return;
        }

        const search = new URLSearchParams(window.location.search);
        search.set("transmission", e.target.value);
        navigate(`${window.location.pathname}?${search.toString()}`);
        getCars(navigate);
        setTransmission(e.target.value);
    };

    const handleChangeCondition = (e) => {
        if (e.target.value === "all") {
            navigate(`${window.location.pathname.replace("condition")}`);
            getCars(navigate);
            return;
        }

        const search = new URLSearchParams(window.location.search);
        search.set("condition", e.target.value);
        navigate(`${window.location.pathname}?${search.toString()}`);
        getCars(navigate);
        setCondition(e.target.value);
    };
    const handleChangeDrive = (e) => {
        if (e.target.value === "all") {
            navigate(`${window.location.pathname.replace("drive")}`);
            getCars(navigate);
            return;
        }

        const search = new URLSearchParams(window.location.search);
        search.set("drive", e.target.value);
        navigate(`${window.location.pathname}?${search.toString()}`);
        getCars(navigate);
        setDrive(e.target.value);
    };
    const handleChangeColor = (e) => {
        if (e.target.value === "all") {
            navigate(`${window.location.pathname.replace("color")}`);
            getCars(navigate);
            return;
        }

        const search = new URLSearchParams(window.location.search);
        search.set("color", e.target.value);
        navigate(`${window.location.pathname}?${search.toString()}`);
        getCars(navigate);
        setColor(e.target.value);
    };
    const handleChangeVehicle = (e) => {
        if (e.target.value === "all") {
            navigate(`${window.location.pathname.replace("vehicle")}`);
            getCars(navigate);
            return;
        }

        const search = new URLSearchParams(window.location.search);
        search.set("vehicle", e.target.value);
        navigate(`${window.location.pathname}?${search.toString()}`);
        getCars(navigate);
        setVehicle(e.target.value);
    };

    return (
      <div className="slider_filter">
        <h5>Search Filter</h5>
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Make</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={make}
    name='make1'
    aria-label=""
    label="make"
    onChange={handleChangeMake}
  >
    <MenuItem value='Hyundai'>Hyundai</MenuItem>
    <MenuItem value='Toyota'>Toyota</MenuItem>
    <MenuItem value='all'>All</MenuItem>
  </Select>

  <InputLabel id="demo-simple-select-label">Model</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={model}
    name='model1'
    aria-label="model"
    label="model"
    onChange={handleChangeModel}
  >
    <MenuItem value='Sonata'>Sonata</MenuItem>
    <MenuItem value='Toyota'>Toyota</MenuItem>
    <MenuItem value='all'>All</MenuItem>
  </Select>

  <InputLabel id="demo-simple-select-label">Fuel Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={fuel}
    name='fuel1'
    aria-label="fuel"
    label="fuel"
    onChange={handleChangeFuel}
  >
    <MenuItem value='Diesel'>Diesel</MenuItem>
    <MenuItem value='Gasoline'>Gasoline</MenuItem>
    <MenuItem value='LPG'>LPG</MenuItem>
    <MenuItem value='all'>All</MenuItem>
  </Select>

  <InputLabel id="demo-simple-select-label">Transmission</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={transmission}
    name='transmission1'
    aria-label="transmission"
    label="transmission"
    onChange={handleChangeTransmission}
  >
    <MenuItem value='Automatic'>Automatic</MenuItem>
    <MenuItem value='Gasoline'>Manual</MenuItem>
    <MenuItem value='all'>All</MenuItem>
  </Select>

  <InputLabel id="demo-simple-select-label">Condition</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={condition}
    name='condition1'
    aria-label="condition"
    label="condition"
    onChange={handleChangeCondition}
  >
    <MenuItem value='New'>New</MenuItem>
    <MenuItem value='Used'>Used</MenuItem>
    <MenuItem value='Salvage'>Salvage</MenuItem>
    <MenuItem value='all'>All</MenuItem>
  </Select>

  <InputLabel id="demo-simple-select-label">Drive Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={drive}
    name='drive1'
    aria-label="drive"
    label="drive"
    onChange={handleChangeDrive}
  >
    <MenuItem value='Front 2WD'>Front 2WD</MenuItem>
    <MenuItem value='Rear 2WD'>Rear 2WD</MenuItem>
    <MenuItem value='4 Wheel Drive'>4 Wheel Drive</MenuItem>
    <MenuItem value='Unspecific'>Unspecific</MenuItem>
    <MenuItem value='all'>All</MenuItem>
  </Select>

  <InputLabel id="demo-simple-select-label">Color</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={color}
    name='color1'
    aria-label="color"
    label="color"
    onChange={handleChangeColor}
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
    <MenuItem value='all'>All</MenuItem>
  </Select>

  <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={vehicle}
    name='vehicle1'
    aria-label="vehicle"
    label="vehicle"
    onChange={handleChangeVehicle}
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
    <MenuItem value='all'>All</MenuItem>
  </Select>

</FormControl>
<InputLabel id="demo-simple-select-label">Price:</InputLabel>
<Grid>
                    <Slider
                        value={sliderValue}
                        min={500}
                        max={20000}
                        onChange={handleSliderValue}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </Grid> 
</div>

    );
};

export default Sidebar;
