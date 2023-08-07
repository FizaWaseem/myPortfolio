import React from "react";
import "./landinpage.css";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import tree from "../../assests/tree.png";
import branch from "../../assests/branch.png";
import leaf from "../../assests/leaf.png";
import leaf2 from "../../assests/leaf2.png";
import leaf4 from "../../assests/leaf4.png";
import landing from "../../assests/landing.png";
import sparrow from "../../assests/sparrow.png";
import dot from "../../assests/dot.png";
import cycle from "../../assests/cycle.png";
import cloud from "../../assests/cloud.png";
import cloud2 from "../../assests/cloud2.png";
import { Grid, Button, Typography } from "@material-ui/core";
import { Link } from "@reach/router";

const Landing = () => {
  return (
    <div className="start">
      <Grid container style={{ paddingTop: "50px" }}>
        <Grid item xs={12} sm={6} className="text-center">
          <img src={dot} alt='o' className="dot1" />
          <img src={dot} alt='o' className="dot2" />
          <img src={dot} alt='o' className="dot" />
          <Fade left>
            <img src={cloud} alt='o' />
          </Fade>
          <Fade left>
            <img src={cloud2} alt='o' delay={700} className="cloud2" />
          </Fade>
        </Grid>
        <Grid item xs={6} className="text-right">
          <img src={dot} alt='o' className="dot" />
          <Fade top delay={800}>
            {" "}
            <img src={sparrow} alt='o' className="sparrow" />{" "}
          </Fade>
        </Grid>
      </Grid>
      <Grid style={{ padding: "20px" }} className="text-center">
        <h1 className="text-center text1">Welcome</h1>
        <Fade delay={950}>
          <h1 className="text-center text">
            Welcome to My Portfolio a brand new Design ui/ux illusions
          </h1>
        </Fade>
        <Fade delay={700} bottom>
          <img src={landing} alt='o' className="landing" />
        </Fade>
        <Link to="/Intro" style={{ textDecoration: "none" }}>
          <Button className="button">
            <Typography className="Goto">Visit my portfolio</Typography>
          </Button>
        </Link>
      </Grid>

      <Grid container>
        <Grid item xs={3} sm={6} className="text-left">
          <Fade delay={1000} left>
            {" "}
            <img alt='o' src={cycle} className="cycle" />
          </Fade>
          <Fade delay={700} bottom>
            <img alt='o' src={leaf4} className="leaf3" />
          </Fade>
        </Grid>
        <Grid item xs={8} sm={3} className="text-right">
          <Fade delay={900} right>
            {" "}
            <img alt='o' src={tree} className="tree" />
          </Fade>
          <Fade bottom>
            <img alt='o' src={leaf} className="leaf" />
          </Fade>
        </Grid>
        <Grid item xs={8} sm={2} className="text-left">
          <Roll left opposite collapse>
            <img alt='o' src={leaf2} className="leaf2" />
          </Roll>
          <Fade bottom></Fade>
          <Fade bottom>
            <img alt='o' src={branch} className="branch" />
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};
export default Landing;
