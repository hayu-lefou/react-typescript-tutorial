import React, { PropsWithChildren } from "react";

export const Button = (props: PropsWithChildren<{ className: string }>) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
