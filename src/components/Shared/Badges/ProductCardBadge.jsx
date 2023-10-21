
const ProductCardBadge = ({ badgeClass }) => {
  const badgeTitle = badgeClass === "sale"?"Sale":badgeClass === "hot"?"Hot":"Out of Stock";
  return (
    <div className="pro-badge">
      <p className={badgeClass}>{badgeTitle}</p>
    </div>
  );
};

export default ProductCardBadge;
