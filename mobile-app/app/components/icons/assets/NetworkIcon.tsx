import Svg, { Color, Path } from 'react-native-svg'

interface NetworkIconProps {
  pathColor: Color
}

export function NetworkIcon ({ pathColor }: NetworkIconProps): JSX.Element {
  return (
    <Svg width={22} height={15} viewBox='0 0 22 15' fill='none'>
      <Path fillRule='evenodd' clipRule='evenodd' d='M2.25 10.25C2.25 5.41751 6.16751 1.5 11 1.5C15.8325 1.5 19.75 5.41751 19.75 10.25C19.75 10.4178 19.7453 10.5845 19.736 10.75H21.238C21.246 10.5843 21.25 10.4176 21.25 10.25C21.25 4.58908 16.6609 0 11 0C5.33908 0 0.75 4.58908 0.75 10.25C0.75 10.4176 0.754024 10.5843 0.761982 10.75H2.26405C2.25472 10.5845 2.25 10.4178 2.25 10.25ZM18.25 10.25C18.25 10.4181 18.2443 10.5848 18.233 10.75H16.7286C16.7428 10.5852 16.75 10.4185 16.75 10.25C16.75 7.07436 14.1756 4.5 11 4.5C7.82436 4.5 5.25 7.07436 5.25 10.25C5.25 10.4185 5.25724 10.5852 5.27144 10.75H3.76697C3.75572 10.5848 3.75 10.4181 3.75 10.25C3.75 6.24594 6.99594 3 11 3C15.0041 3 18.25 6.24594 18.25 10.25ZM8.25 10.25C8.25 8.73122 9.48122 7.5 11 7.5C12.5188 7.5 13.75 8.73122 13.75 10.25C13.75 11.7688 12.5188 13 11 13C9.48122 13 8.25 11.7688 8.25 10.25ZM11 6C8.65279 6 6.75 7.90279 6.75 10.25C6.75 12.5972 8.65279 14.5 11 14.5C13.3472 14.5 15.25 12.5972 15.25 10.25C15.25 7.90279 13.3472 6 11 6Z' fill={pathColor} />
    </Svg>
  )
}
