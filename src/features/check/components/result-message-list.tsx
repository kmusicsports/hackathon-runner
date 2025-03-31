import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { makeResultMessages } from "@/features/check/services/result-messages";

import type { Answers } from "@/features/check/types";

type ResultMessageListProps = {
  answers: Answers;
  className?: string;
};

const ResultMessageList = ({ answers, className }: ResultMessageListProps) => {
  const resultMessages = makeResultMessages({ answers });

  return (
    <div className={className}>
      <Table>
        <TableBody className="bg-muted">
          {resultMessages.map((message, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultMessageList;
