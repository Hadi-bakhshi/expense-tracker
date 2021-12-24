const TransAction = ({transactions}) => {
    return transactions.map((transaction) => {
        return <div className="flex justify-around items-center py-2" key={transaction.id}>{transaction.desc}{transaction.amount}</div>;
    });
}

export default TransAction
