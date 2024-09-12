import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function Result({userInput}){
  const annualData = calculateInvestmentResults(userInput);
  return(
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest(Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {
          annualData.map(item =>{
            const totalInterest = item.valueEndOfYear - (item.year * item.annualInvestment) - userInput.initialInvestment;
            return(
              <tr key={item.year}>
                <th>{item.year}</th>
                <th>{formatter.format(item.valueEndOfYear)}</th>
                <th>{formatter.format(item.interest)}</th>
                <th>{formatter.format(totalInterest)}</th>
                <th>{formatter.format(item.valueEndOfYear - totalInterest)}</th>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}