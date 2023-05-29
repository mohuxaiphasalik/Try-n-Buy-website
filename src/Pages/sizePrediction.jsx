import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/sizePrediction.css";
import convert from "convert-units";
import { useEffect } from "react";
import axios from "axios";
export default function SizePrediction() {
  const [loading, setLoading] = React.useState(true);
  const [results, setResults] = React.useState({});
  // const results = {
  //     "height": 184.000000,
  //     "waist": 88.899565,
  //     "belly": 86.783576,
  //     "chest": 102.663332,
  //     "wrist": 17.208063,
  //     "neck": 37.045089,
  //     "arm length": 56.851427,
  //     "thigh": 55.419682,
  //     "shoulder width": 50.602225,
  //     "hips": 101.574773,
  //     "ankle": 21.802311
  // }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://127.0.0.1:8000");
        const data = response.data;
        console.log(data);
        setResults(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {loading && (
        <div className="size-loading">
          <div id="container-loading">
            <h1 className="loading-h1">Loading...</h1>
            <div class="stick"></div>
            <div class="stick"></div>
            <div class="stick"></div>
            <div class="stick"></div>
            <div class="stick"></div>
            <div class="stick"></div>

            <h1 className="loading-h1">Perfection needs Time...</h1>
          </div>
        </div>
      )}
      {!loading && (
        <div className="sizeContent">
          <div className="sizeResults">
            <div className="size-recommendation">
              The Best Fit For You is
              <u class="underline-animation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255 32.61">
                  <path
                    d="M5 14.11s54-8 125-9 120 5 120 5-200.5-5.5-239.5 17.5"
                    class="stroke"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="10"
                  />
                </svg>
                Medium
              </u>
            </div>
            <table width="80%" border="1" cellpadding="5">
              <tbody>
                <tr>
                  <td colspan="3" bgcolor="#646262" height="25">
                    <span class="table-title">Results</span>
                  </td>
                </tr>
                <tr height="13">
                  <td height="13" align="left" valign="top" bgcolor="#eaeaea">
                    <strong>Measurements</strong>
                  </td>
                  <td align="left" valign="top" bgcolor="#eaeaea">
                    <strong>Inches (In)</strong>
                  </td>
                  <td align="left" valign="top" bgcolor="#eaeaea">
                    <strong>Centimeters (cm)</strong>
                  </td>
                </tr>
                {Object.keys(results).map((key, iterationCount) => {
                  const capitalizedKey =
                    key.charAt(0).toUpperCase() + key.slice(1);
                  let value = parseFloat(
                    results[key].replace("[", "").replace("]", "")
                  );
                  const inchesValue = convert(value)
                    .from("cm")
                    .to("in")
                    .toFixed(2);
                  const cmValue = value.toFixed(2);

                  if (iterationCount % 2 === 0) {
                    return (
                      <tr height="13" key={key}>
                        <td height="13" align="left" valign="top">
                          {capitalizedKey}
                        </td>
                        <td align="left" valign="top">
                          {inchesValue} (In)
                        </td>
                        <td align="left" valign="top">
                          {cmValue} (cm)
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr height="13" key={key}>
                        <td
                          height="13"
                          align="left"
                          valign="top"
                          bgcolor="#eaeaea"
                        >
                          {capitalizedKey}
                        </td>
                        <td align="left" valign="top" bgcolor="#eaeaea">
                          {inchesValue} (In)
                        </td>
                        <td align="left" valign="top" bgcolor="#eaeaea">
                          {cmValue} (cm)
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
