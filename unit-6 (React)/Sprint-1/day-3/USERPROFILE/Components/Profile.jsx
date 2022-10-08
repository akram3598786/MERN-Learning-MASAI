export default function Profile(props) {
  let { src } = props;
  // console.log(src)
  return <img id="profilePic" src={src} alt="" />;
}
