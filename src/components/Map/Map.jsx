import react from "react";
import googleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("min-width:600px");
  const coordinates = { Lat: 0, Lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <googleMapReact
        bootstrapurlkeys={{ key: "" }}
        defaultcenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      >
        <iframe
          margin="200px"
          width="103%"
          height="102%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </googleMapReact>
    </div>
  );
};

export default Map;
