const ContactMap = () => {
  return (
    <>
      <div className="map_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div
                className="contact_map animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2652.61232604759!2d85.33882331275724!3d27.698571035656645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199940d81663%3A0xaf36b9b58903050f!2sApex%20College!5e0!3m2!1sen!2snp!4v1718202850153!5m2!1sen!2snp"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
