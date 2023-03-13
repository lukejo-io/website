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
          "text-center mt-6 w-96 rounded-sm border p-6 text-left hover:text-blue-600 focus:text-blue-600 hover:shadow-xl hover:opacity-75)",
          className
        )}
      >
        {text}
      </Link>
    </>
  );
}

function LinkButtonPink({ link, text }: ButtonProps) {
  return <LinkButton link={link} className={"bg-pink"} text={text} />;
}

function LinkButtonPurple({ link, text }: ButtonProps) {
  return <LinkButton link={link} className={"bg-purple"} text={text} />;
}

LinkButton.Pink = LinkButtonPink;
LinkButton.Purple = LinkButtonPurple;
export { LinkButton as default };
