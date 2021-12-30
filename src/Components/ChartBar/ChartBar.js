import { VictoryPie } from "victory";
const ChartBar = ({ transactions, income, expense }) => {
  if (!transactions.length) return <></>;

  const data = [
    { x: "Income", y: income },
    { x: "Expense", y: expense },
  ];

  return (
    <div className="flex items-center w-full ">
      <VictoryPie
        responsive={true}
        innerRadius={25}
        style={{
          labels: { fontSize: 12 },
        }}
        width={600}
        height={200}
        data={data}
        colorScale={["	#BFA2DB", "#ffc09f"]}
        animate={{
          duration: 2000,
        }}
      />
    </div>
  );
};

export default ChartBar;
