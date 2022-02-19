type StockViewerProps = {
    // Placeholder type
    stockView: string
}

const StockViewer = ({ stockView }: StockViewerProps): JSX.Element => {
  return (
    <div>
        {stockView}
    </div>
  )
}

export default StockViewer