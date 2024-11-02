import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center">
      <div className="xl:pt-32 lg:pt-20 pt-8 max-w-xl mx-auto flex-1">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-200",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none  text-base text-default=200"></SearchIcon>
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;