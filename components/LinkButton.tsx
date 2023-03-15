import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  link: string;
  text: string;
  className?: string;
};

function LinkButton({ link, text, className }: ButtonProps) {
  return (
    <>
      <Link
        href={link}
        className={clsx(
          "text-center rounded-sm p-6 text-left hover:shadow-xl hover:opacity-75 active:shadow-inner-xl",
          className
        )}
      >
        {text}
      </Link>
    </>
  );
}

function LinkButtonPink({ link, text }: ButtonProps) {
  return (
    <LinkButton link={link} className={"bg-pink text-black"} text={text} />
  );
}

function LinkButtonPurple({ link, text }: ButtonProps) {
  return (
    <LinkButton
      link={link}
      className={"bg-purple text-off-white"}
      text={text}
    />
  );
}

LinkButton.Pink = LinkButtonPink;
LinkButton.Purple = LinkButtonPurple;
export { LinkButton as default };
