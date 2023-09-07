const Icon = ({ idIcon, width, height, iconClass, color }) => {
  return (
    <svg className={iconClass} height={height} width={width} color={color}>
      <use href={`/icons/sprite.svg#${idIcon}`}></use>
    </svg>
  );
};

export default Icon;
