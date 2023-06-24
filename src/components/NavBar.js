import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <svg width="100" height="60" viewBox="0 0 370 222" class="css-1j8o68f">
                <defs id="SvgjsDefs1033"></defs><g id="SvgjsG1034" featurekey="rootContainer" transform="matrix(1,0,0,1,0,0)" fill="#111111"><rect y="0" height="1" width="1" opacity="0"></rect><rect y="217" width="370" height="5"></rect></g><g id="SvgjsG1035" featurekey="symbolFeature-0" transform="matrix(1.7641129032258065,0,0,1.7641129032258065,-1.7641129032258065,55.22971188733655)" fill="#111111"><g xmlns="http://www.w3.org/2000/svg"><rect x="5" y="21" width="4" height="2"></rect><rect x="11" y="21" width="4" height="2"></rect><rect x="17" y="21" width="4" height="2"></rect><rect x="23" y="21" width="4" height="2"></rect><rect x="29" y="21" width="4" height="2"></rect><rect x="9" y="57" width="4" height="2"></rect><rect x="15" y="57" width="4" height="2"></rect><rect x="21" y="57" width="4" height="2"></rect><rect x="27" y="57" width="4" height="2"></rect><rect x="33" y="57" width="4" height="2"></rect><rect x="39" y="57" width="4" height="2"></rect><rect x="5" y="25" width="2" height="4"></rect><rect x="5" y="31" width="2" height="4"></rect><rect x="5" y="37" width="2" height="4"></rect><rect x="5" y="43" width="2" height="4"></rect><rect x="5" y="49" width="2" height="4"></rect><rect x="5" y="55" width="2" height="4"></rect><rect x="43" y="27" width="2" height="4"></rect><rect x="43" y="33" width="2" height="4"></rect><rect x="43" y="39" width="2" height="4"></rect><rect x="43" y="45" width="2" height="4"></rect><rect x="43" y="51" width="2" height="4"></rect><path d="M58.364,33C55.406,33,53,30.594,53,27.636c0-1.433,0.558-2.78,1.571-3.793l2.136-2.136c2.008-2.008,2.917-4.7,2.744-7.334   c0.268-0.242,0.547-0.47,0.803-0.727l0.695-0.694c2.73-2.729,2.73-7.172,0-9.901c-2.73-2.73-7.172-2.73-9.901,0l-0.695,0.694   c-0.425,0.425-0.818,0.872-1.201,1.328c-2.07,0.334-4.424,1.784-5.859,3.22L34.586,17H4c-1.654,0-3,1.346-3,3v40   c0,1.654,1.346,3,3,3h42c1.654,0,3-1.346,3-3V20.815c1.617-1.171,3.112-2.1,4.346-2.612c1.446-0.579,2.797-1.325,4.06-2.201   c-0.211,1.57-0.91,3.086-2.114,4.291l-2.136,2.136C51.766,23.819,51,25.669,51,27.636C51,31.696,54.303,35,58.364,35H63v-2H58.364z    M53.328,9.086L54,8.414l1.293,1.293c0.099,0.099,0.186,0.205,0.278,0.308l-0.657,0.657C54.702,10.884,54.421,11,54.121,11   C53.503,11,53,10.497,53,9.879C53,9.584,53.12,9.295,53.328,9.086z M56.708,8.293l-1.217-1.216C55.614,7.031,55.743,7,55.879,7   C56.497,7,57,7.503,57,8.121c0,0.14-0.031,0.277-0.081,0.406C56.847,8.45,56.783,8.368,56.708,8.293z M44.707,9.707   c0.649-0.649,1.539-1.306,2.468-1.812c-0.516,0.881-0.99,1.789-1.372,2.746c-0.72,1.734-2.262,3.983-4.141,6.358h-4.247   L44.707,9.707z M47,60c0,0.552-0.449,1-1,1H4c-0.551,0-1-0.448-1-1V20c0-0.552,0.449-1,1-1h36.028   c-0.562,0.668-1.138,1.337-1.722,2H35v2h1.51c-1.37,1.5-2.715,2.917-3.909,4.148C32.129,27.06,31.653,27,31.171,27h-0.343   c-2.091,0-4.057,0.814-5.536,2.293L25,29.586l-0.293-0.293C23.228,27.814,21.262,27,19.171,27h-0.343   c-2.091,0-4.057,0.814-5.536,2.293C11.814,30.771,11,32.736,11,34.828v0.772c0,2.444,0.913,4.779,2.571,6.576l9.017,9.768   C23.207,52.615,24.086,53,25,53s1.793-0.385,2.413-1.056l9.016-9.769C38.087,40.38,39,38.045,39,35.601v-0.772   c0-1.543-0.446-3.015-1.271-4.275c2.705-2.593,6.1-5.707,9.271-8.216V60z M27,38c2.092,0,4.058-0.814,5.551-2.309   c0.045-0.047,1.514-1.572,3.703-3.711C36.738,32.841,37,33.814,37,34.828v0.772c0,1.939-0.725,3.793-2.041,5.219l-9.016,9.768   c-0.485,0.525-1.403,0.525-1.887,0l-9.016-9.767C13.725,39.394,13,37.54,13,35.601v-0.772c0-1.557,0.606-3.021,1.707-4.121   C15.808,29.606,17.272,29,18.829,29h0.343c1.557,0,3.021,0.606,4.122,1.707L25,32.414l1.707-1.707   c1.09-1.089,2.535-1.692,4.074-1.705c-1.472,1.483-2.447,2.421-2.488,2.461C26.814,32.942,26,34.909,26,37v1H27z M52.59,16.351   c-6.988,2.903-20.894,17.343-21.468,17.941c-0.836,0.837-1.882,1.388-3.019,1.604c0.216-1.137,0.764-2.18,1.589-3.005   c0.613-0.589,15.053-14.495,17.962-21.495c0.939-2.349,2.323-4.447,4.112-6.237l0.695-0.694c0.975-0.975,2.256-1.463,3.537-1.463   s2.562,0.488,3.537,1.463c1.95,1.95,1.95,5.123,0,7.073l-0.526,0.526c-0.207-0.639-0.485-1.257-0.831-1.848   C58.697,9.645,59,8.895,59,8.121C59,6.4,57.6,5,55.879,5c-0.834,0-1.618,0.324-2.207,0.914l-1.758,1.758   C51.333,8.253,51,9.057,51,9.879C51,11.6,52.4,13,54.121,13c0.834,0,1.618-0.324,2.207-0.914l0.384-0.384   c0.293,0.598,0.508,1.224,0.633,1.867C55.913,14.722,54.324,15.657,52.59,16.351z"></path></g></g><g id="SvgjsG1036" featurekey="nameFeature-0" transform="matrix(3.0637254544827552,0,0,3.0637254544827552,124.09803956500721,-17.784305477944557)" fill="#111111"><path d="M1.6 40 l0 -28 l4.4 0 l0 28 l-4.4 0 z M11.905 40 l0 -28 l6.96 0 c4.4 0 6.56 2.44 6.56 6.92 l0 14.16 c0 4.48 -2.16 6.92 -6.56 6.92 l-6.96 0 z M18.785 16 l-2.48 0 l0 20 l2.48 0 c1.4 0 2.24 -0.72 2.24 -2.72 l0 -14.56 c0 -2 -0.84 -2.72 -2.24 -2.72 z M34.97 18.44 l0 15.12 c0 2 0.88 2.76 2.28 2.76 s2.28 -0.76 2.28 -2.76 l0 -15.12 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 z M30.569999999999997 33.28 l0 -14.56 c0 -4.48 2.36 -7.04 6.68 -7.04 s6.68 2.56 6.68 7.04 l0 14.56 c0 4.48 -2.36 7.04 -6.68 7.04 s-6.68 -2.56 -6.68 -7.04 z M48.915 18.72 c0 -4.48 2.2 -7.04 6.48 -7.04 s6.48 2.56 6.48 7.04 l0 0.88 l-4.16 0 l0 -1.16 c0 -2 -0.8 -2.76 -2.2 -2.76 s-2.2 0.76 -2.2 2.76 c0 2.04 0.88 3.56 3.76 6.08 c3.68 3.24 4.84 5.56 4.84 8.76 c0 4.48 -2.24 7.04 -6.56 7.04 s-6.56 -2.56 -6.56 -7.04 l0 -1.72 l4.16 0 l0 2 c0 2 0.88 2.72 2.28 2.72 s2.28 -0.72 2.28 -2.72 c0 -2.04 -0.88 -3.56 -3.76 -6.08 c-3.68 -3.24 -4.84 -5.56 -4.84 -8.76 z M71.17999999999999 18.44 l0 15.12 c0 2 0.88 2.76 2.28 2.76 s2.28 -0.76 2.28 -2.76 l0 -15.12 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 z M66.77999999999999 33.28 l0 -14.56 c0 -4.48 2.36 -7.04 6.68 -7.04 s6.68 2.56 6.68 7.04 l0 14.56 c0 4.48 -2.36 7.04 -6.68 7.04 s-6.68 -2.56 -6.68 -7.04 z"></path></g><g id="SvgjsG1037" featurekey="nameFeature-1" transform="matrix(3.100038844845509,0,0,3.100038844845509,127.63598420909604,79.79155421542995)" fill="#111111"><path d="M11.36 12 l4.48 28 l-4.44 0 l-0.76 -5.08 l-5.4 0 l-0.76 5.08 l-4.04 0 l4.48 -28 l6.44 0 z M7.88 16.96 l-2.08 14.16 l4.24 0 l-2.08 -14.16 l-0.08 0 z M17.785 16 l0 -4 l13.6 0 l0 4 l-4.6 0 l0 24 l-4.4 0 l0 -24 l-4.6 0 z M36.01 40 l0 -28 l4.4 0 l0 28 l-4.4 0 z M49.595 12 l3.32 22.84 l0.08 0 l3.32 -22.84 l4.04 0 l-4.32 28 l-6.56 0 l-4.32 -28 l4.44 0 z M69.1 18.44 l0 15.12 c0 2 0.88 2.76 2.28 2.76 s2.28 -0.76 2.28 -2.76 l0 -15.12 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 z M64.7 33.28 l0 -14.56 c0 -4.48 2.36 -7.04 6.68 -7.04 s6.68 2.56 6.68 7.04 l0 14.56 c0 4.48 -2.36 7.04 -6.68 7.04 s-6.68 -2.56 -6.68 -7.04 z"></path></g>
            </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mb-3">
            <Nav.Link as={Link} to="/about">Sobre nós</Nav.Link>
            <Nav.Link as={Link} to="/partnerships">Parcerias</Nav.Link>
            <Nav.Link as={Link} to="/activities">Actividades</Nav.Link>
            <Nav.Link as={Link} to="/media">Segue-nos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
