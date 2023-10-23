import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import logo from '../collegezio.jpeg'
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (

    <Box component="footer" sx={{ backgroundColor: "black", color: "white" }}>
      <Container maxWidth="100">
        <Grid container spacing={7}>
          <hr color="white" />
          <Grid item xs={12} sm={5}>
          <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h6" color="white">
              <span className="font-gradient2 display-6 font-founder align-self-center">
                Welcome to CollegeZio - Your Ultimate Student Resource Hub
              </span>
            </Typography>
            <Typography className="lead" variant="subtitle1" color="white">
              At CollegeZio, we're committed to empowering students on their
              educational journey by providing a wide range of free resources.
              Our mission is to make learning more accessible, efficient, and
              enjoyable. Whether you're preparing for exams, seeking reference
              materials, or aiming to enhance your knowledge, CollegeZio has you
              covered.
            </Typography>
          </Grid>
          <hr color="white" />
          <Grid item xs={12} sm={4}>
            <span className="font-gradient3 pt-5 display-6 font-founder align-self-center">
              Connect with Us:
            </span>
            <Typography className="lead" variant="subtitle1" color="white">
              Stay updated with the latest additions and announcements by
              following us on social media. For any inquiries or feedback, feel
              free to reach out to us at contact@collegezio.com. Empower your
              education with CollegeZio and embark on a journey of knowledge and
              success. Start exploring today!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" className="font-gradient1" color="white">
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            © 2023 CollegeZio. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
