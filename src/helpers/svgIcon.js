import sprite from '../assets/img/icons.svg';

export const SvgIcon = ({ id, width = 20, height = 20, fill, stroke }) => {
  return (
    <svg width={width} height={height} fill={fill} stroke={stroke}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};
