export default function Form({
  setName,
  setPrice,
  setQuantity,
  handleOnSubmit,
}) {
  return (
    <div>
      <h2>Add Items</h2>
      <form>
        <div className="form_line">
          <label htmlFor="name">Product's Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form_line">
          <label htmlFor="price">Product's Price</label>
          <input
            type="number"
            id="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="form_line">
          <label htmlFor="quantity">Product's Quantity</label>
          <input
            type="number"
            id="quantity"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <input
          className="form_line"
          type="button"
          onClick={handleOnSubmit}
          value="Add"
          id="add_btn"
        />
      </form>
    </div>
  );
}
