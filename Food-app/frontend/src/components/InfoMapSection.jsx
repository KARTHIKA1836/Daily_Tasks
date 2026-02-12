function InfoMapSection() {
  return (
    <div className="container-fluid px-5 my-5">

      <div className="row g-3 mb-4">

        <div className="col-md-4">
          <div className="p-4 bg-white shadow rounded-4 h-100">
            <h6 className="fw-bold mb-3">Delivery information</h6>
            <p>Monday: 12:00 AM – 3:00 AM, 8:00 AM – 3:00 AM</p>
            <p>Tuesday: 8:00 AM – 3:00 AM</p>
            <p>Wednesday: 8:00 AM – 3:00 AM</p>
            <p>Thursday: 8:00 AM – 3:00 AM</p>
            <p>Friday: 8:00 AM – 3:00 AM</p>
            <p>Saturday: 8:00 AM – 3:00 AM</p>
            <p>Sunday: 8:00 AM – 3:00 AM</p>
            <b>Estimated delivery time: 20 min</b>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 bg-white shadow rounded-4 h-100">
            <h6 className="fw-bold mb-3">Contact information</h6>
            <p>If you have allergies or dietary restrictions, please contact the restaurant.</p>

            <p className="fw-semibold mt-3">Phone number</p>
            <p>+934443-43</p>

            <p className="fw-semibold">Website</p>
            <p className="text-warning">http://mcdonalds.uk/</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 bg-dark text-white shadow rounded-4 h-100">
            <h6 className="fw-bold mb-3">Operational Times</h6>
            <p>Monday: 8:00 AM – 3:00 AM</p>
            <p>Tuesday: 8:00 AM – 3:00 AM</p>
            <p>Wednesday: 8:00 AM – 3:00 AM</p>
            <p>Thursday: 8:00 AM – 3:00 AM</p>
            <p>Friday: 8:00 AM – 3:00 AM</p>
            <p>Saturday: 8:00 AM – 3:00 AM</p>
            <p>Sunday: 8:00 AM – 3:00 AM</p>
          </div>
        </div>

      </div>

      <div className="position-relative rounded-4 overflow-hidden shadow">

        <iframe
          title="map"
          src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-100"
          height="350"
          style={{ border: 0 }}
        />

        <div
          className="position-absolute top-50 start-0 translate-middle-y bg-dark text-white p-4 rounded-4 shadow ms-4"
          style={{ maxWidth: "260px" }}
        >
          <h6 className="fw-bold text-warning">McDonald's</h6>
          <p className="small mb-1">South London</p>

          <p className="small">
            Tooting, London, United Kingdom
          </p>

          <p className="small mb-1">📞 +934443-43</p>
          <p className="small text-warning">http://mcdonalds.uk/</p>
        </div>

      </div>
    </div>
  );
}

export default InfoMapSection;
