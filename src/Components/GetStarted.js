import React from 'react'

export const GetStarted = () => {
  return (
    <div className="get-started-container">
      <div className="get-started-left">
        <span>🎉 New in AI.GEN: Real Time Interaction</span>
        <h1>IOTA polygon serum ipsum WAX terraUSD gala THETA.</h1>
        <p>
          Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor
          horizen ethereum quant bitcoin.
        </p>
        <button>Get Started</button>
      </div>
      <div className="get-started-right">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/elon-musk.png`}
            alt="Elon Musk"
            className="entrepreneur"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/bill-gates.png`}
            alt="Elon Musk"
            className="entrepreneur"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/unknown-1.png`}
            alt="Elon Musk"
            className="entrepreneur"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/trump.png`}
            alt="Elon Musk"
            className="entrepreneur"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/mark.png`}
            alt="Elon Musk"
            className="entrepreneur"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/unknown-2.png`}
            alt="Elon Musk"
            className="entrepreneur"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/biden.png`}
            alt="Elon Musk"
            className="entrepreneur"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/einstein.png`}
            alt="Elon Musk"
            className="entrepreneur"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/obama.png`}
            alt="Elon Musk"
            className="entrepreneur"
          />
        </div>
      </div>
    </div>
  );
}
