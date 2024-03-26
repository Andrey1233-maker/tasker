import styles from "./loader.module.scss";

export function Loader({ isLoad, children, w, h }: ILoaderProps) {
  return isLoad ? (
    <div
      style={{ height: h ?? "auto", width: w ?? "auth" }}
      className={styles["loader-wrapper"]}
    >
      <span className={styles["loader"]} />
    </div>
  ) : (
    children
  );
}

export interface ILoaderProps {
  isLoad: boolean;
  children: JSX.Element;
  w?: string;
  h?: string;
}
