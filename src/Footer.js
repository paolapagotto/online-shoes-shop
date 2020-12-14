import React from 'react';

const Footer = () => {

    return (
        <footer className="page-footer  teal lighten-1">
          <div className="container ">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Shoes Shop</h5>
                <p className="grey-text text-lighten-4">Follow us on Social Media  </p>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!"><i className="material-icons fab fa-facebook-square"></i>Facebook</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"><i className="material-icons fab fa-instagram"></i>Instagram</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"><i className="material-icons fab fa-twitter-square"></i>Twitter</a></li>
                </ul>

              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Store</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">News</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright Designed by Paola Pagotto
            <a className="grey-text text-lighten-4 right" href="#!">Privacy and Licenses</a>
            </div>
          </div>
        </footer>
        

    )

}

export default Footer;




