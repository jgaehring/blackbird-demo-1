export default function Dashboard(props) {
  return <div>
    <h1>Hello {props.name}!</h1>
    {props.children}
  </div>;
}