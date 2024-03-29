import * as Popover from "@radix-ui/react-popover";
import * as Avatar from "@radix-ui/react-avatar";
import Link from "next/link";

type CompanyInfoProps = {
  name: string;
  description: string;
  imageSrc: string;
  companyLink: string;
};

function CompanyInfo({
  name,
  description,
  companyLink,
  imageSrc,
}: CompanyInfoProps) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className={"italic underline hover:cursor text-black "}>
          {name}
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align={"start"}
          className={
            "ring-0 bg-off-white  border border-black p-2 ring-0 drop-shadow-2xl shadow-2xl"
          }
        >
          <div className={"flex flex-row max-w-md gap-2"}>
            <Link href={companyLink}>
              <Avatar.Root>
                <Avatar.Image
                  className={" w-14 h-14 border border-black"}
                  src={imageSrc}
                  alt="Colm Tuite"
                />
                <Avatar.Fallback
                  className="rounded-full w-14 h-14 border"
                  delayMs={7000}
                />
              </Avatar.Root>
            </Link>
            <p className={"w-64"}>{description}</p>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default CompanyInfo;
