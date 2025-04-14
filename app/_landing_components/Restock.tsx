interface RestockProps {
  nextStock: Date;
  lastStock: Date;
}
const Restock: React.FC<RestockProps> = ({ nextStock, lastStock }) => {
  const formattedLastStock = lastStock.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const formattedNextStock = nextStock.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  return (
    <div className="text-lg">
      <p>Next Restock: {formattedNextStock}</p>
      <p>Last Restock: {formattedLastStock}</p>
    </div>
  )
}

export default Restock;
