import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Slide, ToastContainer, toast } from "react-toastify";
import { SearchResult } from "./types";
import { setStyles } from "./searchModal.styles";

const SearchModal = ({ onSubmit }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [searchImage, setSearchImage] = useState<string>("");
  const showList = searchValue && searchResults && searchImage === "";
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (searchValue === "") {
      toast.error("Enter a city name!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } else {
      setOpen(false);
    }
  };

  const handleSearch = async (value: string) => {
    setSearchValue(value);
    if (value === "") {
      setSearchImage("");
    } else {
      const { data } = await axios(setApiUrl(value));
      setSearchResults(data.results);
    }
  };

  const handleCityOnClick = (
    name: string,
    country: string,
    latitude: number,
    longitude: number,
    src: string
  ) => {
    sessionStorage.setItem("city", name + ", " + country);
    setSearchValue(name + ", " + country);
    setLatitude(latitude);
    setLongitude(longitude);
    setSearchImage(src);
    setSearchResults([]);
  };

  const handleSubmit = () => {
    if (searchValue === "") {
      toast.error("Enter a city name!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } else {
      onSubmit(latitude, longitude, searchImage);
      setSearchValue("");
      setSearchImage("");
      setSearchResults([]);
      setLatitude(0);
      setLongitude(0);
      handleClose();
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("city") === null) {
      handleOpen();
    }
  });

  return (
    <div className="m-12">
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ fontSize: "16px" }}
      >
        Search city
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={styles.modal}
      >
        <Box sx={styles.box}>
          <div onClick={handleClose} className={styles.closeIcon}>
            <CloseIcon />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            SEARCH CITY
          </Typography>
          <form className="relative" onSubmit={handleSubmit}>
            {searchImage && searchResults && (
              <Image
                className={styles.inputImage}
                src={searchImage}
                alt="country-flag"
                width={24}
                height={24}
              />
            )}
            <TextField
              id="outlined-basic"
              label="City name"
              variant="outlined"
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              sx={styles.input}
              required
            />
            {showList && (
              <div className={styles.list}>
                {searchResults.map((el: SearchResult) => (
                  <div key={el.id} className={styles.listItem}>
                    <Image
                      src={setImageSrc(el.country_code)}
                      alt="country-flag"
                      width={20}
                      height={20}
                    />
                    <h3
                      className={styles.h3}
                      onClick={() =>
                        handleCityOnClick(
                          el.name,
                          el.country,
                          el.latitude,
                          el.longitude,
                          setImageSrc(el.country_code)
                        )
                      }
                    >
                      <span className="mr-1">{el.name},</span>
                      <span>{el.country}</span>
                    </h3>
                  </div>
                ))}
              </div>
            )}
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={styles.input}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default SearchModal;

const styles = setStyles();
const setApiUrl = (value: string) => {
  return `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=10&language=en&format=json`;
};
const setImageSrc = (countryCode: string) => {
  return `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`;
};
