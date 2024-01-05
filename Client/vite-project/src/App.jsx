import { useState, useEffect } from "react";
import { createClient, fetchExchange, cacheExchange } from "@urql/core";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const queryUrl =
    "https://api.studio.thegraph.com/query/62641/claimreward/v0.1";

  const withdraws = `
  {
    withdraws(where: { user: "0x82684C78ED1238aE7c84A878D87103f75E5A3e90" }, orderBy: id, orderDirection: desc) {
      user
      amount
      blockNumber
    }
  }`;

  const rewards = `
  {
    rewardPaids(where: { user: "0x82684C78ED1238aE7c84A878D87103f75E5A3e90" }, orderBy: id, orderDirection: desc) {
      user
      amount
      blockNumber
    }
  }`;

  const client = createClient({
    url: queryUrl,
    exchanges: [cacheExchange, fetchExchange],
  });

  useEffect(() => {
    const gettransactions = async () => {
      const { data } = await client.query(rewards).toPromise();
      console.log(data.rewardPaids);
      setTransactions(data.rewardPaids);
    };
    gettransactions();
  }, []);
  return (
    <>
      here:{" "}
      {transactions &&
        transactions.map((t) => {
          return (
            <>
              <div>
                amount: {t.amount} blocknumber:{t.blockNumber}{" "}
              </div>
            </>
          );
        })}{" "}
    </>
  );
}

export default App;
