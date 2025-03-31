import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

type BackButtonProps = {
  onClick: () => void;
  className?: string;
};

const BackButton = ({ onClick, className }: BackButtonProps) => {
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className={className}
      onClick={() => onClick()}
    >
      <ChevronLeft />
    </Button>
  );
};

export default BackButton;
