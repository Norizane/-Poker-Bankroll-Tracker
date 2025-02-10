const Form = () => {
  return (
    <>
      <div className="formContainer">
        <div className="informationContainer">
          <div>
            <input placeholder="Title" type="text" name="title" id="title" />
            <select name="gameType" id="gameType">
              <option value="texas_holdem">Texas Hold’em</option>
              <option value="omaha">Omaha</option>
              <option value="five_card_draw">Five Card Draw</option>
              <option value="seven_card_stud">Seven Card Stud</option>
              <option value="razz">Razz</option>
              <option value="caribbean_stud">Caribbean Stud</option>
              <option value="three_card_poker">Three Card Poker</option>
              <option value="horse">HORSE</option>
            </select>
            <input type="date" id="date" name="date" />
          </div>
          <div>
            <input placeholder="Buy In" type="number" />
            <input placeholder="Cash Out" type="number" />
            <input placeholder="Duration" type="number" />
          </div>
          <div>
            <textarea placeholder="Session Notes" id="notes" />
          </div>
        </div>
        <div className="statisticContainer">
          <div className="statistic-item">
            <h1>Profit</h1>
            <span>1234</span>
          </div>

          <div className="statistic-item">
            <h1>Total</h1>
            <span>5678</span>
          </div>

          <div className="statistic-item">
            <h1>Per Hour</h1>
            <span>42</span>
          </div>

          <div className="statistic-item">
            <h1>Lose</h1>
            <span>321</span>
          </div>

          <div className="statistic-item">
            <h1>ROI</h1>
            <span>15</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
