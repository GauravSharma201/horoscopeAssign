import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import { classNames } from "primereact/utils";
import HoroscopeDet from "../horoscopeDet/horoscopeDet";
import axios from "axios";
import "./form.css";
function Form() {
  const [horoData, setHoroData] = useState({});

  const dateSelectItems = [
    { label: "today", value: "today" },
    { label: "yesterday", value: "yesterday" },
    { label: "tomorrow", value: "tomorrow" },
  ];
  function getHoroscope(data) {
    const options = {
      method: "POST",
      url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
      params: { sign: data.horoscopeSign, day: data.date },
      headers: {
        "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "8450c65270msh4313350841d16acp12de73jsnb5c86a3a61b5",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        sessionStorage.setItem("horoscopeData", JSON.stringify(response.data));
        setHoroData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "today",
      horoscopeSign: "",
      email: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      if (!data.horoscopeSign) {
        errors.horoscopeSign = "Horoscope Sign is required.";
      }

      return errors;
    },
    onSubmit: (data) => {
      console.log(data);
      getHoroscope(data);
      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  useEffect(() => {
    let data = sessionStorage.getItem("horoscopeData");
    setHoroData(JSON.parse(data));
  }, []);

  return (
    <section className="main-cont bg-purple-500 flex flex-column justify-content-evenly align-items-center">
      <div className="form-demo">
        <div className="flex justify-content-center">
          <div className="card border-pink-400 border-3 border-round p-5 shadow-4">
            <h5 className="text-center text-xl text-white font-medium">
              Enter Horoscope Details
            </h5>
            <form onSubmit={formik.handleSubmit} className="p-fluid">
              <div className="field">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                    className={classNames({
                      "p-invalid": isFormFieldValid("name"),
                    })}
                  />
                  <label
                    htmlFor="name"
                    className={classNames({
                      "p-error": isFormFieldValid("name"),
                    })}
                  >
                    Name*
                  </label>
                </span>
                {getFormErrorMessage("name")}
              </div>
              <div className="field">
                <span className="p-float-label p-input-icon-right ">
                  <i className="pi pi-envelope" />
                  <InputText
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": isFormFieldValid("email"),
                    })}
                  />
                  <label
                    htmlFor="email"
                    className={classNames({
                      "p-error": isFormFieldValid("email"),
                    })}
                  >
                    Email*
                  </label>
                </span>
                {getFormErrorMessage("email")}
              </div>
              <div className="field">
                <span className="p-float-label ">
                  <InputText
                    id="horoscopeSign"
                    name="horoscopeSign"
                    value={formik.values.horoscopeSign}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": isFormFieldValid("horoscopeSign"),
                    })}
                  />
                  <label
                    htmlFor="horoscopeSign"
                    className={classNames({
                      "p-error": isFormFieldValid("horoscopeSign"),
                    })}
                  >
                    Horoscope Sign*
                  </label>
                </span>
                {getFormErrorMessage("horoscopeSign")}
              </div>

              <div className="field">
                <span className="p-float-label">
                  <Dropdown
                    id="date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    options={dateSelectItems}
                    placeholder="Select a City"
                  />
                </span>
              </div>

              <Button
                type="submit"
                label="Submit"
                className="mt-2 bg-pink-400 shadow-3"
              />
            </form>
          </div>
        </div>
      </div>
      <HoroscopeDet horoData={horoData} />
    </section>
  );
}

export default Form;
