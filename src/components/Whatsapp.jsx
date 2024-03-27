const Whatsapp = () => {
  return (
    // nomor yang akan dituju
    <a
      href="https://wa.me/6285879876043"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="fixed-bottom wa-icon">
        <img
          src="images/whatsapp.png"
          alt=""
          width="60px"
          height="60px"
          style={{ margin: "20px" }}
        />
      </div>
    </a>
  );
};

export default Whatsapp;
