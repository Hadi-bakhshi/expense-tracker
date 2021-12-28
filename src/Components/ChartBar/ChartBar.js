import { VictoryPie } from "victory";
const ChartBar = ({ transactions, income, expense }) => {
  if (!transactions.length) return <></>;

  const data = [
    { x: "Income", y: income },
    { x: "Expense", y: expense },
  ];

  return (
    <div className="flex items-center ">
      <VictoryPie
        innerRadius={25}
        width={600}
        height={200}
        data={data}
        animate={{
          duration: 2000,
        }}
      />
    </div>
  );
};

export default ChartBar;
