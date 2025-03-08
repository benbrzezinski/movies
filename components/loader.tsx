import { ClipLoader } from "react-spinners";

interface LoaderProps {
  color?: string;
  size?: number;
  loading?: boolean;
}

export default function Loader({
  color = "#fe9a00",
  size = 50,
  loading = true,
}: LoaderProps) {
  return <ClipLoader color={color} size={size} loading={loading} />;
}
