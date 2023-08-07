/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Grid, Typography } from "@material-ui/core";
import rocket from "../assests/rocket.png";
import onlineGroceries from "../assests/onlineGroceries.png";
import onlinechat from "../assests/onlinechat.png";
import testing from "../assests/testing.png";
import dashbord from "../assests/dashbord.png";
import tailor from "../assests/tailor.png";
import pokemon from "../assests/pokemon.png";
import cloud from "../assests/cloud.svg";
import Fade from "react-reveal/Fade";
import CompanyLogo from "../assests/CompanyLogo.png";
import custodiy from "../assests/custodiy.png";
import TourX from "../assests/TourX.png";

function Project() {
  return (
    <div id="Projects" className="mt-5">
      <Grid xs={12} className="mb-5 mt-5">
        <Fade bottom>
          <Typography className="what">
            Projects <img src={rocket} alt="victory" className="victory" />
          </Typography>
          <Typography className="projectText">
            SOME PROJECTS THAT I'VE DONE
          </Typography>
        </Fade>

        <Grid xs={12} className="mt-5 proj">
          <Grid xs={12} md={3} className="projectDiv">
            <a href="http://staging.brandcloud.com/" target="blank">
              <img
                src={cloud}
                alt="project1"
                style={{ width: "14rem", height: "10rem" }}
              />
            </a>
            <Typography className="pText">BrandCloud</Typography>
          </Grid>
          <Grid xs={12} md={3} className="projectDiv">
            <a href="https://dev-mispartes.azurewebsites.net/" target="blank">
              <img
                src={CompanyLogo}
                alt="project1"
                className="projectImg"
                style={{height: '10rem'}}
              />
            </a>
            <Typography className="pText">Mispartes</Typography>
          </Grid>

          <Grid xs={12} md={3} className="projectDiv">
            <a href="https://web.custodiy.com" target="blank">
              <img src={custodiy} alt="project1" className="projectImg" style={{height: '6rem',marginBottom: '4rem',background: '#3f3d3d'}} />
            </a>
            <Typography className="pText">Custodiy</Typography>
          </Grid>
        </Grid>
        <Grid xs={12} className="mt-5 proj">
          <Grid xs={12} md={3} className="projectDiv">
            <a href="https://content-management.netlify.app/" target="blank">
              <img src={dashbord} alt="project1" style={{ width: "15rem" }} />
            </a>
            <Typography className="pText">CM Dashboard</Typography>
          </Grid>

          <Grid xs={12} md={3} className="projectDiv">
            <a href="https://pokemon-apps.netlify.app/" target="blank">
              <img src={pokemon} alt="project1" style={{ width: "14rem" }} />
            </a>
            <Typography className="pText">Pokemone App</Typography>
          </Grid>
          <Grid xs={12} md={3} className="projectDiv">
            <a href="https://tailorstore.netlify.app/" target="blank">
              <img src={tailor} alt="project1" style={{ width: "15rem" }} />
            </a>
            <Typography className="pText">Tailor Store</Typography>
          </Grid>
        </Grid>
        <Grid xs={12} className="mt-5 proj" >
          <Grid xs={12} md={3} className="projectDiv">
            <a href="https://kudzokastoreonline.netlify.app/" target="blank">
              <img
                src={onlineGroceries}
                alt="project1"
                className="projectImg"
              />
            </a>
            <Typography className="pText">Grocery Store</Typography>
          </Grid>

          <Grid xs={12} md={3} className="projectDiv">
            <a href="http://networktrans.netlify.app" target="blank">
              <img src={testing} alt="project1" className="projectImg" />
            </a>
            <Typography className="pText">Simple Page</Typography>
          </Grid>
          <Grid xs={12} md={3} className="projectDiv">
            <a href="http://onchatapps.netlify.app" target="blank">
              <img src={onlinechat} alt="project1" className="projectImg" />
            </a>
            <Typography className="pText">Chat App</Typography>
          </Grid>
        </Grid>
        <Grid xs={12} className="mt-5 proj" >
          <Grid xs={12} md={3} className="projectDiv">
            <a href="https://travel-x.netlify.app/" target="blank">
              <img
                src={TourX}
                alt="project1"
                className="projectImg"
              />
            </a>
            <Typography className="pText">Tour Smart</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Project;
