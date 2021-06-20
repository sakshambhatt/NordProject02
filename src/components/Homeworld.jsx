import useHomeworld from "../hooks/useHomeworld";
export default function Homeworld({ homeworldLink }) {
  const { name } = useHomeworld(homeworldLink);
  return <td>{name}</td>;
}
