function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-5">

      <div className="container-fluid px-5">
        <div className="row">

          <div className="col-md-3">
            <h4>OrderUK</h4>
            <p className="small">Company #490039-444</p>
          </div>

          <div className="col-md-3">
            <h6>Get Exclusive Deals</h6>
            <input className="form-control my-2" placeholder="your@email.com" />
            <button className="btn btn-warning w-100">Subscribe</button>
          </div>

          <div className="col-md-3">
            <h6>Legal Pages</h6>
            <p className="small">Terms & Conditions</p>
            <p className="small">Privacy</p>
            <p className="small">Cookies</p>
          </div>

          <div className="col-md-3">
            <h6>Important Links</h6>
            <p className="small">Get Help</p>
            <p className="small">Add Restaurant</p>
            <p className="small">Create Business Account</p>
          </div>

        </div>

        <hr />

        <p className="text-center small">
          © OrderUK 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
