

export const Roadmap = () => {
    const data = [
      {
        heading: "PHASE 1",
        lists: [
          "Horizen dai dai harmony dogecoin waves nexo.",
          "Flow horizen waves dash tether zcash waves dash terraUSD.",
          "Quant harmony amp cosmos PancakeSwap decentraland decred.",
          "Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.",
        ],
      },
      {
        heading: "PHASE 2",
        lists: [
          "BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox PancakeSwap.",
          "Tether ethereum helium eCash IOTA. Litecoin enjin shiba-inu dash audius monero. ",
          "Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin celsius TRON. ",
          "Hive stellar velas flow cardano.",
        ],
      },
      {
        heading: "PHASE 3",
        lists: [
          "Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum.",
          "Waves TRON dogecoin bancor eCash quant secret.  ",
          "Celsius crypto bancor nexo litecoin decentraland crypto. ",
        ],
      },
    ];
  return (
    <div className="roadmap-container">
      <h1>Roadmap</h1>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        {data.map((item, index) => (
          <div className="phases" key={index}>
            <div>
              <h1 style={{ textAlign: "left" }}>{item.heading}</h1>
              <ul style={{ listStyleType: "disc", color: "white" }}>
                {item.lists.map((list)=> <li>H{list}</li>)}
        
              </ul>
            </div>
            <div className="phases-image">
              <img
                src="https://s3-alpha-sig.figma.com/img/1ed6/5ed2/e5488157802b3c24d158c68f4c9002b8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m7Gh8O3D7P6M7quJCSATeakuui9rxjRpFxFreqQ2efqOXJZ59S7Jf2hTehfGmrwY6CfGGD~z5N7UuE7ucO5deyIgRFcw1ie1eAIW9F4VLPGLoE~cT3c02JOJAcczT3U3cX-tcWbqBxnrJUbvtZE6sABUmTvOs75qBkzLa-GUaS9N-yLJUyPEbRcrrGndS4kFq9WWLzPkiWhn4c~Iqt2---OvieFbDQvfLm-qtg7rbiXu7XG4HQlt1Op3OPLSCOpQ0g~libiv0Gmz2aHXGApQEMRzFaH-~1SJYjxX1U0M4KKpchbpCBAG4wRK5Uqm3wdDMS142vHCkD908QeCUkTeMA__"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
