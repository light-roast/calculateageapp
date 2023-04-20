export default function RealAge(props) {
    let [days, months, years] = props;
    if (days === 1 && months === 1) {
        return <h1>{years} años, {months} mes y {days} día</h1>;
      } else if (months === 1) {
        return <h1>{years} años, {months} mes y {days} días</h1>;
      } else if (days === 1) {
        return <h1>{years} años, {months} meses y {days} día </h1>;
      };
};