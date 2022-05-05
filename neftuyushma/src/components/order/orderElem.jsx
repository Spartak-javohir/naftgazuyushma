const orderElem = () => {
  return (
    <>
      <section className="order_section">
        <div className="container">
          <div className="order_card">
            <form action="" className="order_form">
              <label htmlFor="" className="order_label">
                <input placeholder="name and surname" required type="text" />
              </label>
              <label htmlFor="" className="order_label">
                <input placeholder="phone number" required type="tel" />
              </label>
              <label htmlFor="" className="order_label">
                <input placeholder="email" required type="email" />
              </label>
              <label htmlFor="" className="order_label">
                <input required type="select" />
              </label>
              <label htmlFor="" className="order_label">
                <button>yuborish</button>
              </label>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default orderElem;
