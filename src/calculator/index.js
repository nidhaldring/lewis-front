export default function Calculator() {
  return (
    <div className="">
      <div class="row">
        <div class="col-8">
          <div class="col-12 flexDisplayRow">
            <span class="dollarStyle">$</span>
            <input type="number" class="inputPrice" />
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div class="col-4 flexDisplayRow">
          <div class="bttonDollarContent">
            <button type="button" class="buttonDollar">
              $
            </button>
          </div>
          <div class="buttonPourcentageContent">
            <button type="button" class="buttonPourcentage">
              %
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 flexDisplayRow">
          <div class="feeNameDiv">
            <label class="labelFeeName">Fee Name</label>
            <input type="number" class="feeName" />
          </div>
          <button type="button" class="buttonApply">
            Apply
          </button>
        </div>
        <div class="col-6 flexDisplayRow">
          <div class="feeDiv">
            <label class="labelFee">Fee</label>
            <label class="feeContent">0%</label>
          </div>
        </div>
      </div>
      <div container>
        <div class="row customPadding">
          <div class="rows">
            <button type="button" class="buttonNumber">
              1
            </button>
            <button type="button" class="buttonNumber">
              2
            </button>
            <button type="button" class="buttonNumber">
              3
            </button>
            <button type="button" class="buttonNumber clearButton">
              Clear
            </button>
            <button type="button" class="buttonNumberSpecial">
              10%
            </button>
          </div>
          <div class="rows">
            <button type="button" class="buttonNumber">
              4
            </button>
            <button type="button" class="buttonNumber">
              5
            </button>
            <button type="button" class="buttonNumber">
              6
            </button>
            <button type="button" class="buttonNumber backspace">
              <span>
                <i
                  aria-hidden="true"
                  class="material-icons q-icon backspaceIcon"
                >
                  backspace
                </i>
              </span>
            </button>
            <button type="button" class="buttonNumberSpecial">
              20%
            </button>
          </div>
          <div class="rows">
            <button type="button" class="buttonNumber">
              7
            </button>
            <button type="button" class="buttonNumber">
              8
            </button>
            <button type="button" class="buttonNumber">
              9
            </button>
            <button type="button" class="buttonNumber clearButton">
              Clear
            </button>
            <button type="button" class="buttonNumberSpecial">
              30%
            </button>
          </div>
          <div class="lastRowContent">
            <button type="button" class="buttonNumber specialButton">
              00
            </button>
            <button type="button" class="buttonNumber">
              0
            </button>
            <button type="button" class="buttonNumber specialButton">
              .
            </button>
            <button type="button" class="buttonEnter">
              <span>
                <i aria-hidden="true" class="material-icons q-icon return">
                  keyboard_return
                </i>
              </span>
            </button>
            <button type="button" class="buttonNumberSpecial">
              40%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
