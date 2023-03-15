import * as Popover from "@radix-ui/react-popover";
import * as Avatar from "@radix-ui/react-avatar";

type CompanyInfoProps = {
  name: string;
  description: string;
};

function CompanyInfo({ name, description }: CompanyInfoProps) {
  return (
    <Popover.Root>
      <Popover.Trigger>{name}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={"bg-off-white  border border-black rounded-md p-2"}
        >
          <div className={"flex flex-row max-w-md gap-2"}>
            <Avatar.Root>
              <Avatar.Image
                className={"rounded-full w-14 h-14 border border-black"}
                src="/congenius.jpeg"
                alt="Colm Tuite"
              />
            </Avatar.Root>
            <p className={"w-64"}>{description}</p>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default CompanyInfo;
